---
title: Getting Started with uv
description: 'A beginner-friendly guide to using uv to manage Python dependencies with pyproject.toml, install packages the right way, and migrate cleanly from the traditional pip + requirements.txt workflow.'
published: 2026-03-10
tags: ['python', 'uv', 'ruff', 'astral']
links:
  - to: https://docs.astral.sh/uv/
    label: uv
    icon: simple-icons:uv
    target: _blank
    color: success
---

If you're already experienced with `uv` or modern Python dependency management, this post might be too basic for you. I'm writing this mainly for beginners (like I was) and people migrating from the traditional `pip` + `requirements.txt` workflow.

When I started using `uv`, one question immediately came up:

> How do I keep `pyproject.toml` updated automatically when installing packages, and how do I migrate from an existing `requirements.txt`?

This guide explains the clean workflow.

## Why uv?

[uv](https://docs.astral.sh/uv/) is becoming popular because it:

- is **extremely fast** (written in Rust)
- replaces multiple tools (`pip`, `virtualenv`, `pip-tools`)
- uses `pyproject.toml` + **lockfile** for reproducible environments

## Key: Direct vs Transitive Dependencies

A typical `requirements.txt` might contain many packages:

```txt
fastapi
pydantic
starlette
anyio
typing_extensions
```

But usually you only installed something like:

```txt
fastapi
```

The rest are **transitive dependencies**.

With modern tools like uv:

| File             | Purpose                        |
| ---------------- | ------------------------------ |
| `pyproject.toml` | Direct dependencies you choose |
| `uv.lock`        | Fully resolved dependency tree |

You only maintain **direct dependencies**.

## Basic uv Workflow

These are the common steps you'll use when creating and managing a Python project with uv.

### Initialize a Project

```bash
uv init
```

This creates:

```toml [pyproject.toml]
[project]
name = "my-project"
version = "0.1.0"
dependencies = []
```

### Install Packages (Correct Way)

The difference between `uv add` and `uv pip install` determines whether your project stays maintainable.

Do **not** use:

```bash
uv pip install fastapi
```

That behaves like `pip` and **does not update `pyproject.toml`**. Later, when someone else clones your project, they won't know which packages are needed.

Instead use:

```bash
uv add fastapi
```

This will:

- Add the dependency to `pyproject.toml`
- Update `uv.lock`
- Install the package into your environment

Example:

```toml [pyproject.toml]
[project]
dependencies = [
  "fastapi>=0.110.0",
]
```

::warning
Only use `uv pip install` for temporary tools or debugging.
::

### Add Dev Dependencies

Dev dependencies are packages needed for development and testing, but **not** required when your code runs in production. Examples: testing frameworks, linters, formatters.

```bash
uv add --dev pytest
```

This adds the package to a separate dependency group:

```toml [pyproject.toml]
[dependency-groups]
dev = [
  "pytest>=8.0.0",
]
```

When deploying to production, only regular dependencies are installed (unless you explicitly request dev deps).

### Remove Dependencies

If you added a package by mistake:

```bash
uv remove fastapi
```

This updates both `pyproject.toml` and `uv.lock`.

### Update Dependencies

Update all packages to their latest compatible versions:

```bash
uv lock --upgrade
```

Then sync your environment:

```bash
uv sync
```

Update a single package:

```bash
uv lock --upgrade-package fastapi
uv sync
```

### Pin Python Version

Specify which Python version your project needs:

```toml [pyproject.toml]
[project]
requires-python = ">=3.11,<3.13"
```

`uv` will automatically download and use the correct Python version if needed.

### Sync the Environment

Sync your local environment to match `pyproject.toml` and `uv.lock`:

```bash
uv sync
```

For CI (using exact locked versions):

```bash
uv sync --frozen
```

This ensures the environment matches the exact versions in `uv.lock`. Use this in production and CI pipelines for reproducibility.

## Clean Migration from requirements.txt

Most existing Python projects already have a `requirements.txt`. The **mistake** is copying everything into `pyproject.toml`.

Instead, migrate like this.

### Initialize the uv Project & Add Dependencies

Create your project and import everything. `uv` will put everything into your `pyproject.toml` initially.

```bash
uv init
uv add -r requirements.txt
```

### Identify the Bloat

Run the tree command.

```bash
uv tree
```

Look for packages at the **root** (left margin) that also appear nested under your main tools. In your example, `annotated-doc` and `typing-inspection` are root-level duplicates.

```plaintext
my-project v0.1.0
├── annotated-doc v0.0.4
├── annotated-types v0.7.0
├── anyio v4.12.1
│   └── idna v3.11
├── fastapi v0.135.1
│   ├── annotated-doc v0.0.4
│   ├── pydantic v2.12.5
│   │   ├── ...
│   ├── starlette v0.52.1
│   │   └── ...
│   ├── typing-extensions v4.15.0
│   └── typing-inspection v0.4.2 (*)
├── idna v3.11
├── pydantic v2.12.5 (*)
├── pydantic-core v2.41.5 (*)
├── starlette v0.52.1 (*)
├── typing-extensions v4.15.0
└── typing-inspection v0.4.2 (*)
(*) Package tree already displayed
```

### Prune Transitive Dependencies

Remove the packages that should be nested. `uv` will remove them from `pyproject.toml` but keep them in the environment because your main packages still require them.

```bash
# Example: removing sub-deps of FastAPI
uv remove annotated-doc typing-inspection pydantic starlette anyio idna
```

After pruning, your tree collapses. Your `pyproject.toml` is now human-readable, containing only the packages you actually care about.

```plaintext
my-project v0.1.0
├── annotated-doc v0.0.4
├── fastapi v0.135.1
│   ├── annotated-doc v0.0.4
│   ├── pydantic v2.12.5
│   │   ├── ...
│   ├── starlette v0.52.1
│   │   └── ...
│   ├── typing-extensions v4.15.0
│   └── typing-inspection v0.4.2 (*)
└── typing-inspection v0.4.2 (*)
(*) Package tree already displayed
```

### Lock and Verify

Generate the deterministic `uv.lock` file and confirm the hierarchy is clean.

```bash
uv lock
uv tree
```

## Final Project Structure

::code-tree{defaultValue="my-project/pyproject.toml"}

```toml [my-project/pyproject.toml]
[project]
name = "my-project"
version = "0.1.0"
dependencies = [
  "fastapi>=0.110.0",
]

[dependency-groups]
dev = [
  "ruff>=0.5.0",
]
```

```python [my-project/main.py]
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from uv"}
```

```lockfile [my-project/uv.lock]
[[package]]
name = "fastapi"
version = "0.110.0"

[[package]]
name = "pydantic"
version = "2.6.0"

[[package]]
name = "starlette"
version = "0.36.3"
```

```venv [my-project/.venv/]

```

::

## Format Your Code with Ruff

You can add [Ruff](https://docs.astral.sh/ruff/) as a dev dependency:

```bash
uv add --dev ruff
```

Then format your project with:

```bash
ruff format
```

**Ruff is developed by the same team behind uv**, and is designed to be extremely fast while providing formatting and linting in one tool.

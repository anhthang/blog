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

Do **not** use:

```bash
uv pip install fastapi
```

That behaves like `pip` and **does not update `pyproject.toml`**.

Instead use:

```bash
uv add fastapi
```

This will:

1. Add the dependency to `pyproject.toml`
2. Update `uv.lock`
3. Install the package

Example:

```toml [pyproject.toml]
[project]
dependencies = [
  "fastapi>=0.110.0",
]
```

### Add Dev Dependencies

```bash
uv add --dev pytest
```

```toml [pyproject.toml]
[dependency-groups]
dev = [
  "pytest>=8.0.0",
]
```

### Sync the Environment

```bash
uv sync
```

For CI:

```bash
uv sync --frozen
```

This ensures the environment matches the exact versions in `uv.lock`.

## Clean Migration from requirements.txt

Most existing Python projects already have a `requirements.txt`.

The **mistake** is copying everything into `pyproject.toml`.

Instead, migrate like this.

### Install existing requirements

```bash
uv pip install -r requirements.txt
```

### Detect direct dependencies

```bash
uv pip list --not-required
```

This shows **only the packages you installed directly**.

Example output:

```text
fastapi
uvicorn
pydantic
```

### Add them to uv

```bash
uv init
uv add fastapi uvicorn pydantic
```

Now `pyproject.toml` contains only the packages you actually chose.

### Generate the lockfile

```bash
uv lock
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

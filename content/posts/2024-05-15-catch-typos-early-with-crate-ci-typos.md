---
title: 'Catch Typos Early with crate-ci/typos'
description: "Typos can creep into any codebase, but they don't have to slow you down. crate-ci/typos is a handy tool that helps you identify and fix typos in your project."
published: '2024-05-15'
tags: [typos, crate-ci]
links:
  - to: https://github.com/crate-ci/typos
    label: crate-ci/typos
    icon: hugeicons:github
    target: _blank
---

**Here's how to get started:**

1. **Install typos-cli:**

   **Conda**

   ```bash
   conda add typos-cli
   ```

   **Homebrew (macOS)**

   ```bash
   brew install typos-cli
   ```

   You can also install `typos-cli` using `conda`, `pacman`. Check the [installation](https://github.com/crate-ci/typos?tab=readme-ov-file#install) for details on installing packages from other channels.

2. **Run typos to check your code:**

   ```bash
   typos
   ```

   This will scan your project and report any potential typos it finds.

   ```bash
   error: `Bui` should be `Buoy`, `Buy`
   --> ./nuxt.config.ts:68:22
      |
   68 |       me: 'Anh Thang Bui',
      |                      ^^^
      |
   error: `Bui` should be `Buoy`, `Buy`
   --> ./README.md:2:32
   |
   2 |   <h1 align="center">Anh Thang Bui</h1>
   |                                ^^^
   |
   ```

   `typos-cli` won't automatically change your code, but it will highlight the typos and suggest corrections. You can review the suggestions and make the necessary changes or have them fixed

   ```bash
   typos --write-changes
   typos -w
   ```

3. **Important! Review the suggestions carefully**
   - `typos-cli` is a powerful tool, but it might flag names or data coming from third-party APIs as typos.
   - **Do not change** typos that match field names, parameter names, or other data received from external APIs. Changing these could break your communication with the API.
   - Make the necessary changes to typos that are actually errors in your code.

**Bonus:** Integrate `typos-cli` into your CI pipeline to catch typos early and often.

By using **crate-ci/typos**, you can keep your code clean and professional!

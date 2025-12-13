---
title: 'Manage Dot Files with Git'
description: 'Your dot files are the heart of your dev setup, but managing them across machines can be a pain. A bare Git repository is the cleanest solution for backing up, syncing, and version-controlling your configurations.'
published: '2025-09-25'
tags: ['dotfiles', 'sync', 'settings']
links:
  - to: https://github.com/anhthang/dotfiles
    label: ~/.dotfiles
    icon: hugeicons:git-fork
    target: _blank
---

### Sync Your Settings: How to Manage Your Dot Files with Git

The best way to manage dot files with Git is to use a "bare" repository. This is a special kind of repository that doesn't have a working directory, which is perfect because you don't want a `.git` folder cluttering up your home directory.

Here’s the simple, step-by-step process.

1. **Initialize a Bare Repository**

   First, open your terminal and initialize a bare Git repository in a hidden directory.

   ```bash
   cd ~
   git init --bare $HOME/.dotfiles
   ```

2. **Create a Git Alias**

   Now, let's create a handy alias so you don't have to type a long command every time. This alias lets you use `dotfiles` as a command for managing your repository.

   ```bash
   alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
   ```

   Add this line to your shell's configuration file (like `.bashrc` or `.zshrc`) to make it permanent.

3. **Hide Untracked Files**

   You need to tell Git to ignore all the other files in your home directory so `git status` doesn't get cluttered.

   ```bash
   dotfiles config --local status.showUntrackedFiles no
   ```

4. **Add and Commit Your Files**

   Now you can add the specific dot files you want to track, just like you would with any other repository.

   ```bash
   dotfiles add .bashrc .zshrc .vimrc
   dotfiles commit -m "Initial commit of dot files"
   ```

5. **Push to GitHub**

   Create an empty repository on GitHub, then link your local one to it and push your files.

   ```bash
   dotfiles remote add origin git@github.com:your_username/your_repo_name.git
   dotfiles push -u origin main
   ```

🎉 Your dot files are now backed up on GitHub!

### How to Set Up a New Machine

On a new computer, the process is just as easy.

1. **Clone the Bare Repository**

   On the new machine, open your terminal and clone the bare repository into your home folder. This creates the hidden `.dotfiles` directory where Git will live.

   ```bash
   git clone --bare git@github.com:your_username/your_repo_name.git $HOME/.dotfiles
   ```

   Note: Replace the URL with your actual GitHub repository URL.

2. **Set Up the Alias**

   Define the alias that lets you manage your dot files easily. Add this to your shell's config file (e.g., `.zshrc`) after the setup.

   ```bash
   alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
   ```

3. **Checkout Files and Clean Status**

   Pull your configurations into your home directory and tell Git to ignore all untracked files.

   ```bash
   dotfiles checkout
   dotfiles config --local status.showUntrackedFiles no
   ```

4. **Run the Setup Script**

   Now for the magic! Navigate into your `.dotfiles` directory and execute the setup script you wrote. This script will automatically install Homebrew, Oh My Zsh, install all your apps from the Brewfile, and finalize your system configuration.

   ```bash
   cd $HOME
   chmod +x install.sh
   sh install.sh
   ```

That's it! Your perfect development environment is now just a few simple commands away, no matter what machine you're on.

Managing your dot files this way is a small change that can save you a ton of time and frustration in the long run. Happy coding!

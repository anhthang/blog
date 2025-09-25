---
title: 'Manage Dot Files with Git'
description: 'Your dot files are the heart of your dev setup, but managing them across machines can be a pain. A bare Git repository is the cleanest solution for backing up, syncing, and version-controlling your configurations.'
published: '2025-09-25'
tags: ['dotfiles', 'sync', 'settings']
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

### How to Set Up a New Machine

On a new computer, the process is just as easy.

1. **Clone the Repository**

   ```bash
   git clone --bare git@github.com:your_username/your_repo_name.git $HOME/.dotfiles
   ```

   This clones your repository into a hidden folder.

2. **Checkout Your Files**

   Use the alias and a `checkout` command to pull your files into your home directory.

   ```bash
   alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
   dotfiles checkout
   ```

That's it! Your perfect development environment is now just a few simple commands away, no matter what machine you're on.

Managing your dot files this way is a small change that can save you a ton of time and frustration in the long run. Happy coding!

---
title: Signing Git Commits With a GPG Key
slug: 2021-11-25-signing-git-commits
image: /assets/images/blog/vim-tmux.png
date: 2021-11-25
categories: ["development", "tools"]
---

- creating the GPG keyset 
- gpg signatures
  - kleopatra
- adding the GPG key to GitHub

### Signing a Commit 

Now that GitHub has a copy of your public GPG key, it can verify any commits signed with your private GPG key. Once the keyset exists, signing a commit becomes a relatively simple matter. One extra flag on the `git commit` command will do the trick.  

```bash
# use -S to create a signed commit
git commit -S -m "your commit message"
```

If you have more than one GPG key, however, Git needs to know which key to use. You can find additional documentation about this in the GitHub documentation for [Telling Git about your signing key][9]. Ultimately, once you figure out your key id, it can be added directly to your git global config.  

```bash
# list your gpg keys
gpg --list-secret-keys --keyid-format=long

# add the desired key to your git config
git config --global user.signingkey your-long-form-keyid-here
```

An X.509 key may also be used to sign commits. Please reference the above documentation for more information.  

Signing commits has the effect of marking that commit as "verified". This adds an additional layer of assurance and security as it asserts the commits were made by the individual listed. Repositories and Organizations can also be configured with additional security checks around verified commits.   

[9]: https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key  
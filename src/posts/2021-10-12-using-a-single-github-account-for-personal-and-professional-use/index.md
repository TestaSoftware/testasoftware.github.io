---
title: Using a Single GitHub Account for Personal and Professional Purposes
slug: 2021-10-12-using-a-single-github-account-for-personal-and-professional-use
image: /assets/images/blog/github-profile.png
date: 2021-10-12
categories: ["devops", "git"]
---

As a developer, a generally held principle is that you should be careful about mixing personal and professional facets of your life. Care needs to be taken in order to make sure things like intellectual property are protected on both sides. A lot of the time we can achieve that sort of care by making sure our professional lives are completely separate from our personal lives in terms of things like the projects we work on, the time we allocate, and even the hardware used. When it comes to GitHub, Some companies and enterprises might require the use of separate accounts. Make sure to double-check any existing policies. That being said, the generally recommended practice is actually **not to use multiple accounts**. It is the recommended practice to use a single GitHub account for all purposes.  

Using a single account for personal and professional purposes can make life a lot easier. It can provide a unified means to contribute to many different projects without having to switch accounts or manage multiple sets of credentials both in the browser and on the command line. Not to mention that using a single account means more green boxes! GitHub provides different ways to make the most of your account for all purposes. Armed with a little bit of information, you can make sure all your contributions to projects are recognized in the ways that you (and the organizations you contribute to) would like.

Organizations
-------------
One of the most important things you can do for yourself or your company is to make sure you're leveraging [GitHub Organizations][2]. Organizations provide a boundary for companies and organizations to facilitate collaboration while controlling access and security across many different repositories. Security and access permissions can be granted via roles under the organization.

TODO:  
To create a new organization

As an individual we can choose how we want to publicize the organizations we belong to. Navigate to the people tab of your organization, find your user (you can search for yourself if necessary), and click on your user. The page you land on will have an option regarding membership visibility. You may select public or private. Public makes your membership in this group visible to everyone and the organization will be displayed on your public profile. Private will mean that your membership is only visible to other members of the organization.  

![membership visiblity](membership-visibility.png)

Setting Your Email Address
--------------------------
You have probably already set up your global username and email address in git, but did you know you can set an email on an individual repository as well? Omitting the `--global` flag on the command saves the username and email local to the repository.

```bash
git config user.name "Steve Testa"
git config user.email "steve@testasoftware.com"
```

Setting an email on a specific repository will only affect your copy of the repository. After an email has been set then next time a `git commit` is issued it will use the more specific repository email over your globally set information. 


Another trick to make sure your contributions are recognized is to add additional emails to your profile in Git. Any additional emails you add will need to be confirmed, but once that is done all commits with that email will be recognized as one of your contributions.

- adding an email address to your GitHub account

SSH and GPG Keys
-----------------
Another nicety of using a single GitHub account is that you can use and manage multiple ssh keys. Multiple SSH keys can be generated, added, and removed if you no longer need them. 

- managing ssh keys
- gpg signatures
  - kleopatra
  - signing commits

Access Tokens
-------------
- personal access tokens
- github token
- bot accounts

Notifications
-------------
- notifications

Leaving a Company
-----------------
- User Account
    - unverify your company email address (delete the email address) and then re-add it without verifying to keep associated commits linked 
    - make sure your primary is your personal email
    - make sure your primary email is verified 
    - if your github username has references to your old company/org you should change your github username as well 
- Leaving Orgs
  - transfer ownership if you're the sole owner
  - remove yourself
  - if you own the org and someone leaves you can also remove them manually 
- open an issue or pr to keep contributions in your contributions graph

**References**: [lecoursen in GitHub Community][1] 

[1]: https://github.community/t/using-one-account-for-all-your-projects/10197 
[2]: https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations
[3]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts 
[4]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/publicizing-or-hiding-organization-membership
[5]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address#setting-your-email-address-for-a-single-repository
[6]: https://docs.github.com/en/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-the-notification-delivery-method-for-organizations-you-belong-to 
[7]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company 
[8]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#commits
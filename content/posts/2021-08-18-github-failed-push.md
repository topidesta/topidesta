---
template: 'post'
title: Github Failed Push, Pull
cover: '../images/github.png'
date: '2021-08-19T03:00:00Z'
slug: 'github-failed-push-pull'
keywords: 'Github Failed Push, Pull'
categories:
  - trick
tags:
  - github
---

Bismillah ....

Sempet heran kok gak bisa push atau pull di laptop, gw lupa ternyata Github ubah aturan Login Credentialnya dari password menjadi Token.

Pesan errornya kayak gini

```github
λ git push -u origin main
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
fatal: unable to access 'https://github.com/amati-tiru-modifikasi/10-aplikasi-sederhana-javascript.git/': The requested URL returned error: 403
```

cari via google sana sini, akhirnya terdampar diberbagai pembahasan yang jelimet, untuk pasti dihalaman ini:

```html
https://stackoverflow.com/a/68780014
```

Udah itu ajah, ikutin ajah langkahnya.

1. Buat Token dihalaman https://github.com/settings/tokens (kalo PC pribadi, bikin unlimited ajah)
2. Simpan hasil generate itu di txt pc
3. Download Github CLI (Gw pake cocolatey buat download manager)
4. Ketik `gh auth login`, copy paste hasil generate dari tokens itu
5. Done.

Have a nice day!

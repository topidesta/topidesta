---
template: 'post'
title: Buat Branch dari Commit GIT
cover: '../images/commit.png'
date: '2020-07-03T16:00:00Z'
slug: 'login-localhost-netlifycms-digatsbyjs'
keywords: 'Buat Branch dari Commit GIT'
categories:
  - trick
tags:
  - react
  - ATM
---

Bismillah

Lagi iseng mau nyamain kode berdasarkan commit ... jadi tidak usah rollback atau liat digithub, cukup dilocal komputer kita juga bisa, ini dia tricknya:

```javascript
$ git checkout <commit>
$ git checkout -b feature    # create a new branch named `feature` from the commit

# if you want to replace the current branch (say 'develop') with new created branch ('feature')
$ git branch -D develop     # delete the local 'develop' branch
$ git checkout -b develop   # create a new 'develop' branch from 'feature' branch
```

Done.

Sumber: https://stackoverflow.com/a/42159757

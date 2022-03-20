---
template: 'post'
title: Upgrade Package NodeJS di Github
cover: '../images/gitwarningdepan.png'
date: '2020-05-03T09:00:00Z'
slug: 'upgrade-package-nodejs-di-github'
keywords: 'Upgrade atau Update Package NodeJS di Github'
categories:
  - error
  - trick
tags:
  - github
  - yarn
---

Bismillah...

Kebetulan kita project belajar gw ada notif error getu, kayak gini:
![warninggit](../images/gitwarning.png)

Alhasil kita harus install ulang modules yang di node, disini gw pake yarn sebagai package manager.

```bash
rm -rf node_modules .yarn-lock
```

Kalo udah, install deh dengan perintah `yarn -i`
![yarninstall](../images/yarninstall.png)

Done!

Simple kan.

[SOURCE](https://itnext.io/fixing-security-vulnerabilities-in-npm-dependencies-in-less-than-3-mins-a53af735261d)

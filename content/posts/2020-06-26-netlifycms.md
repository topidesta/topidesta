---
template: 'post'
title: Login Localhost NetlifyCMS di GatsbyJS
cover: '../images/jamstack.png'
date: '2020-06-26T09:00:00Z'
slug: 'login-localhost-netlifycms-digatsbyjs'
keywords: 'Login Localhost NetlifyCMS di GatsbyJS'
categories:
  - trick
tags:
  - react
  - github
  - gatsbyjs
  - netlifycms
---

Bismillah 

Kebetulan gw mau ubah website persahabatan menjadi **git source** sebagai sumber data (graphQL), karena beberapa kali mysql server dikantor diserang, semua database di truncate dan untungnya punya backup, entahlah, belum tahu darimana celahnya. baiklah, karena gw tipe yang males diribetin dengan setup yang jelimet hehe... akhirnya pake starter pack dari GatsbyJS, bisa yang base css bulma atau bootstrap, ini githubnya:

1. https://github.com/netlify-templates/gatsby-starter-netlify-cms
2. https://github.com/fullstack-rocket/gatsby-starter-netlify-cms-bootstrap

Keseringan kita develop dalam local dan login pun local, nah dengan NetlifyCMS bisa kita lakukan, saat fase development atau production, hanya saja untuk localhost ada beberapa trick, berikut ini langkahnya:

1. Buka File *config.yml* di folder static
2. Lalu tambahkan kode baris ini: *local_backend: true*
3. Buka 2 command line (cmd) jalankan perintah: *yarn start* dan *npx netlify-cms-proxy-server*
4. Buka Browser arahkan ke port defaut http://localhost:8000 atau https://localhost:8000/admin
5. Selesai.

Mudah bukan? ya. Karena belajar memang harus mudah dan menyenangkan.

Have a nice day!

source: https://kutt.it/ZMivyK
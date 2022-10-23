---
template: "post"
title: Netlify CLI Freemium Forever
cover: "../images/netlifycli.png"
date: "2022-10-21T08:00:00Z"
slug: "netlify-cli-freemium-forever"
keywords: "Netlify CLI Freemium Forever"
categories:
  - trick
tags:
  - project
  - server
---

Bismillah ....

Sebetulnya posting kali ini lebih ke arah opini pribadi aja, soalnya project yang running di netlify udah kadung banyak, jadi males kalo pindah pindah CI/CD yang lain. Ditambah netlify sekarang menghapus free buat private repo (otomatis build) dari akun organisasi github, tapi masih bisa menggunakan layanan mereka dengan menggunakan `NETLIFY CLI` jadi, kenapa harus pindah? hehe

Lanjut ya, ternyata netlify tetap memberikan layanan free kok, tapi dengan skema yang sedikit jelimet, kalo sebelumnya cukup push ke repo utama, hubungkan dengan service mereka, maka robot diserver netlify akan menjalankan proses build yang disimpen diserver mereka, simple banget, tapi sekarang proses jelimet itu hanya berlaku untuk ``repo private`` dengan semua jenis akun, beda dengan repo `topidesta` yang sifatnya publik, maka otomatis build (CI/CD) netlify tetap berjalan.

Berikut ini 10 Perintah utama untuk memudahkan memanfaatkan layanan *freemium* netlify untuk tipe akun github organisasi yang private, berikut ini perintah netlify cli yang sering digunakan, sebelum melakukan perintahnya, pastikan sudah menginstall netlify-cli secara global, dengan perintah 

```bash
npm install netlify-cli -g 
```

baiklah, berikut ini 10 perintah yang biasa digunakan dalam netlify-cli, diantaranya:

## Netlify login

Untuk dapat memanfaatkan fiture build workflow netlify, pastikan sudah login, dengan perintah `ntl login` jika belum login, maka akan diarahkan ke login page netlify, gunakan login yang terhubung ke github ya, jika sudah maka akan ada warning `Already logged in via netlify config on your machine`

## Netlify init

Perintah ini untuk melakukan inisiasi awal, agar mempermudah proses workflow CI di netlify, baik projek yang baru atau yang sudah ada di local pc masing masing.

## Netlify dev

## Netlify deploy

## Netlify watch

## Netlify link

## Netlify switch 

## Netlify status

## Netlify env:set

## Netlify function

TODO DETAILNYA!

sumber
- https://docs.netlify.com/cli/get-started/
- https://www.netlify.com/blog/code-faster-wt-these-10-netlify-cli-commands/


Have a nice day!

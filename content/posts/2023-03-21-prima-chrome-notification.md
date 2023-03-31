---
template: "post"
title: Prima Chrome Notification
cover: "../images/chrome-plugins.png"
date: "2023-03-21T08:00:00Z"
slug: "prima-chrome-notification"
keywords: "Chrome Notification Extension"
categories:
  - share
tags:
  - extension
---

Bismillah ....

## Intro

Kali ini mau bahas tentang Extension Chrome untuk notifikasi Prima SIMRS (Aplikasi Sistem Rumah Sakit), based project ada dihalaman ini ya.

https://github.com/mdestafadilah/prima-chrome-extension.git

Sebetulnya notifikasi udah ada di Prima, dikembangkan oleh [Mas Ari's ](https://github.com/siaris) salah satu senior programmer di tempat gw. dengan memanfaatkan pooling atau socket dari nodejs server, cuman aja, resource yang digunakan sungguh menguras core proses dari server development gw, hingga 100%, alhasil beberapa aplikasi dibawah server development tidak merespon, diantaranya server whatsapp notifikasi dan pencarian dokter muter terus, akhirnya sekarang di stop, karena mengganggu proses aplikasi yang lain.

Jadi, gw coba kembangkan notifikasi berdasarkan plugin/ extension chrome, dengan memanfaatan API REST server Development. Untuk saat ini gw masih reasearch dahulu, untuk awal mungkin gw coba buat UTDRS (Mini PMI - Bank Darah) untuk notifikasi permintaan darah, proses darah, dan pengambilan darah, selebihnya mungkin notifikasi dari Mas Ari's yang bakal dimigrasikan ke extension chrome.

Untuk sumber kodingan besar kemungkinan adalah *copy-paste* dari project yang ada digithub, hehe. Detailnya ada di [sumber](#sumber) belajar ya, jadi gak ada yang istimewa.

## Sumber

- https://anobjectisa.wixsite.com/website/post/how-to-build-a-chrome-extension-new-manifest-v3
- https://www.youtube.com/playlist?list=PLwlNvVIUtWpsjFKGfIXKOz3CjUfg_aQN4
- https://youtu.be/7Tu2j2pc87I
- https://youtu.be/aARbTtYE2JE
- https://blog.openreplay.com/chrome-extensions-for-beginners--part-1-theory/
- https://github.com/salahuddinshaikh/chrome-notification.git [V2 Version will be Deprecated]

TODO...
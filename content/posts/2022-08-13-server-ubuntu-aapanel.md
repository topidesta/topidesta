---
template: "post"
title: Membangun Web Server Multi Aplikasi
cover: "../images/aapanel.webp"
date: "2022-08-13T08:00:00Z"
slug: "server-ubuntu-aapanel"
keywords: "Membangun Web Server Multi Aplikasi"
categories:
  - share
tags:
  - ubuntu
  - server
---

Bismillah ....

Baru kesempatan nulis lagi, karena belakang ini load pembuatan modul sekaligus aplikasi (UTDRS/ Mini PMI) ditambah Setup Server untuk domain `persahabatan.co.id` yang digunakan untuk Staging Area Pengembangan Aplikasi Programmer lainnya dan berbagai kesibukan offline (bermain dengan anak dan istri, hehe) bikin lupa untuk nulis hal tekhnis hehe...

Share kali ini gw mau bahas tentang Membangun server VPS untuk berbagai aplikasi, mulai dari PHP, NodeJS, Python hingga Golang. Mungkin bahasan yang sama di halaman ini juga, terutama mulai persiapan hingga siap digunakan. Sekedar informasi, sebelum menggunakan panel yang sekarang [aaPanel](https://www.aapanel.com/new/download.html) gw udah coba install [NasiHosting](https://github.com/kurniawandata/nasihosting.git) dan explorer beberapa panel namun, melihat support, akhirnya apanel pilihannya.

Untuk Project jadi, ada dihalaman ini https://persahabatan.co.id/ untuk bahannya kurang lebih sebagai berikut:

1. VPS dengan IP Publik
2. Ubuntu Server 20.04
3. AAPanel (Free Forever, Plugin Pro Bayar!)
4. DNS CloudFlare (Free-Tier Version)

Yaps, 4 bahan itu yang akan membantu kita membangun sebuah server yang sederhana yang bisa kita gunakan untuk kebutuhan pribadi (bukan untuk dijual lagi sebagai hosting ya). Kita bisa buat aplikasi Multi PHP Version, mulai dari Framework sampai CMS yang terkenal, bisa multi NodeJS atau aplikasi Statis Javascript, Python hingga Golang pun bisa... mantap kali kan... haha, untuk Docker hanya Pengguna Profesional alias Berbayar.

## Persiapan

### Download aaPanel
1. Login ssh menggunakan Putty atau lainnya.
2. Install aaPanel `wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh && sudo bash install.sh 93684c35`
3. Done

### Daftarkan Domain Ke Cloudflare

1. Daftar seperti biasa
2. Add domain
3. Done

> https://doc.aapanel.com/web/#/3?page_id=180

Untuk Pengecekan apakah IP VPS (Public) sudah mengarah ke DNS Cloudflare silahkan cek IP publik ya bukan domain utamanya dengan alamat berikut

1. https://dnschecker.org/all-dns-records-of-domain.php
2. https://dnschecker.org/port-scanner.php

## Permasalahan

Dalam Instalasi tak semudah membalikkan tangan, ada beberapa configurasi lanjutan, ikuti saja manual booknya/ dokumentasi aapanel. Untuk Staging kebutuhan gw misalnya, masih menggunakan PHP 5 untuk kebutuhan internal aplikasi, dan si aapanel tidak fully support, tapi masih menyediakan untuk di pasang diserver kita, misal, ada error seperti ini.

![Error PHP5](../images/error-php5.png)

gw share di forum aapanel -> https://forum.aapanel.com/d/13472-error-php-info

dan oleh Kern, salah satu Tim Support menjawab, kurang lebih disuruh install ``` sudo apt-get install libc-ares-dev  ```

Sebetulnya ada banyak trouble saat pertama kali gw ngebangung server VPS dengan aaPanel ini, mulai DNS yang tak kunjung resolve, port ip public yang tertutup, dan aapanel yang sering ngecrash, hingga ada 1 insiden yang bikin gw panik, gegara menjalankan perintah aneh, kurang lebih perintah anehnya seperti ini

```bash
firewall-cmd --permanent --zone=public --add-port=80/tcp > /dev/null 2>&1
firewall-cmd --permanent --zone=public --add-port=443/tcp > /dev/null 2>&1
firewall-cmd --reload

ufw allow 80/tcp
ufw allow 443/tcp
ufw reload
```

Akhirnya gw diminta email ke si kern, semua detailnya, wishlah kasih ajah toh ini project testing. hehe, singkat cerita gw email dibalas dalam beberapa jam, cepet banget coy, kurang lebih resolve seperti ini.

```
Hello, run the following command to see:
panelPort=$(cat /www/server/panel/data/port.pl)
echo ${panelPort}
firewall-cmd --permanent --zone=public --add-port=20/tcp >/dev/null 2>&1
firewall-cmd --permanent --zone=public --add-port=21/tcp >/dev/null 2>&1
firewall-cmd --permanent --zone=public --add-port=22/tcp >/dev/null 2>&1
firewall-cmd --permanent --zone=public --add-port=80/tcp >/dev/null 2>&1
firewall-cmd --permanent --zone=public --add-port=${panelPort}/tcp >/dev/null 2>&1
firewall-cmd --permanent --zone=public --add-port=39000-40000/tcp >/dev/null 2>&1
firewall-cmd --reload
firewall-cmd --list-all
---------
bt 14
--------
bt status
```

and done. semua bisa diakses.
## Implementasi di Server

Saat ini implementasi diserver baru sebatas aplikasi PHP dan NodeJS, untuk Python dan Golang belum gw implementasi, mungkin yang Golang akan gw coba buat service, REST API sederhana ya, karena ada fiture Docker (versi demo yang terbatas), jadi gw bungkus pake Docker ajah.

Untuk sekarang hanya berjalan aplikasi PHP (5,7,8) dan NodeJS (Api Whatsapp).

## Link Belajar

1. [aaPanel Bahasa Indonesia](https://www.youtube.com/playlist?list=PLTErGYUpf8x1LumYtc0QpBS4WsUohJadN)
2. [Api aaPanel](https://topidesta.files.wordpress.com/2022/08/api-aapanel.pdf)
3. [aaPanel Plugin Development](https://topidesta.files.wordpress.com/2022/08/aapanel_linux_panel_plug-in_development_documentation_v1.1.pdf)
4. [aaPanel Install Setup](https://topidesta.files.wordpress.com/2022/08/aapanel-nodejs-centos7-setup.pdf)

## Kesimpulan

Rasanya perlu juga ada kesimpulan? hehe.. baiklah, intinya **Belajar bukan tentang kompetisi, tapi disiplin diri untuk menghadapi berbagai tantangan [[1]](#1)**

### Reference

<a id="1">[1] https://www.linkedin.com/posts/masterkurniawan_x-code-menerapkan-kemerdekaan-belajar-orang-activity-6983481739574730752-oGM2</a>

Have a nice day!

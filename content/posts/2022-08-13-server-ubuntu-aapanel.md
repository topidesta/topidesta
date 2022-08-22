---
template: 'post'
title: Membangun Web Server Multi Aplikasi
cover: '../images/aapanel.webp'
date: '2022-08-13T08:00:00Z'
slug: 'server-ubuntu-aapanel'
keywords: 'Membangun Web Server Multi Aplikasi'
categories:
  - share
tags:
  - ubuntu
  - server
---

Bismillah ....

Baru kesempatan nulis lagi, karena belakang ini load pembuatan modul (UTDRS/ Mini PMI) yang lumayan banyak dan berbagai kesibukan offline (bermain dengan anak dan istri, hehe) bikin lupa untuk nulis hal tekhnis hehe...

Share kali ini gw mau bahas tentang Membangun server VPS untuk berbagai aplikasi, mulai dari PHP, NodeJS, Python hingga Golang. Mungkin bahasan yang sama di halaman ini juga, terutama mulai persiapan hingga siap digunakan.

Untuk Project jadi ada dihalaman ini https://persahabatan.co.id/ untuk bahannya kurang lebih sebagai berikut:

1. VPS dengan IP Publik
2. Ubuntu Server 20.04
3. AAPanel (Panel Sederhana tapi GRATIS!)
4. DNS CloudFlare (Free-Tier Version)

Yaps, 4 bahan itu yang akan membantu kita membangun sebuah server yang sederhana yang bisa kita gunakan untuk kebutuhan pribadi (bukan untuk dijual lagi sebagai hosting ya). Kita bisa buat aplikasi Multi PHP Version, mulai dari Framework sampai CMS yang terkenal, bisa NodeJS atau aplikasi Statis Javascript, Python hingga Golang coyyy... mantap kali kan... haha.

## Persiapan

1. Login ssh menggunakan Putty atau lainnya.
2. Install aaPanel `wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh && sudo bash install.sh 93684c35` (Disini saya pake Ubuntu)
3. Done

## Permasalahan

Dalam Instalasi tak semudah membalikkan tangan, ada beberapa configurasi lanjutan, ikuti saja manual booknya/ dokumentasi aapanel. Untuk Staging kebutuhan gw misalnya, masih menggunakan PHP 5 untuk kebutuhan internal aplikasi, dan si aapanel tidak fully support, tapi masih menyediakan untuk di pasang diserver kita, misal, ada error seperti ini.

![Error PHP5](../images/error-php5.png)

gw share di forum aapanel -> https://forum.aapanel.com/d/13472-error-php-info

dan oleh Kern, salah satu Tim Support menjawab, silahkan liat caranya.

## Implementasi di Server

TODO


## Dokumentasi Belajar

1. [aaPanel Bahasa Indonesia](https://www.youtube.com/playlist?list=PLTErGYUpf8x1LumYtc0QpBS4WsUohJadN)
2. [Api aaPanel](https://topidesta.files.wordpress.com/2022/08/api-aapanel.pdf)
3. [aaPanel Plugin Development](https://topidesta.files.wordpress.com/2022/08/aapanel_linux_panel_plug-in_development_documentation_v1.1.pdf)
4. [aaPanel Install Setup](https://topidesta.files.wordpress.com/2022/08/aapanel-nodejs-centos7-setup.pdf)



Have a nice day!
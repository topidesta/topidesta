---
template: 'post'
title: Aplikasi Install Program dengan Chocolatey di Windows
cover: '../images/choco.png'
date: '2019-08-09T08:00:00Z'
slug: 'aplikasi-install-program-dengan-chocolatey-di-windows'
keywords: 'Majemen aplikasi di Windows'
categories:
  - trick
tags:
  - chocolatey
  - management
  - windows
---

Bismillah

Kebetulan **laptop** dan **komputer kantor** pakai windows original, jadi sekarang pakai windows baik nguli jadi web dev (front/ backend) atau sebagai penulis blog [Topidesta' Dev](https://topidesta.my.id/)
, kembali ke topik lagi. Kalo di GNU/Linux kita kenal, DPKG, RPM, YUM, PACMAN, dll. Untuk diwindows, sekarang ini ada yang namanya Chocolatey Package Manager, amazing ini aplikasi, bisa akses kehalaman ini:

> [Chocolatey Link](https://chocolatey.org/packages)

Silahkan baca sendiri cara installnya, bisa lewat commandpromt (CMD) atau Windows Powershell (WPS), harus **admin** saat hendak install yah.

Kurang lebih dengan perintah `choco list --local-only` kita akan lihat daftar yang sudah terinstall, kurang lebih seperti gambar dibawah ini daftar list yang terinstall
![Choco Installed Thinkpad](../images/chocolist-laptop-thinkpad.png)

tanpa download file lagi, choco akan mengdownload lalu install, otomatis dengan perintah yang simple, `choco install nama_aplikasi -y`, tunggu dan boom. done.

## Update

Ternyata aplikasi yang terinstall oleh choco ada beberapa yang perlu update ... gak mungkin kan satu satu ... nah ada satu perintah lagi untuk update aplikasi yang tersedia `cup all -y` dengan catatan choco versi _0.9.8.33+._ kurang lebih nanti tampilannya seperti ini:

![Choco Installed Office PC](../images/cocoupdate.png)

Have a nice day!

source:

1. https://superuser.com/questions/1270151/how-to-list-installed-chocolatey-packages
2. https://superuser.com/a/890257

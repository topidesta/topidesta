---
template: "post"
title: React Native dengan Nox Emulator di Windows 10
cover: "../images/react-native.png"
date: "2019-12-09T05:40:00Z"
slug: "react-native-dengan-nox-emulator-di-windows-10"
keywords: "React Native dengan Nox Emulator di Windows 10"
categories: 
    - share
tags:
    - native
    - android
---

## bismillah

kali ini sekedar catatan pribadi ajah, cara biar running emulator yang ringan, NOX Emulator termasuk ringan, dibanding dengan GenyMotion ya, nah karena sering muncul kalimat **no devices detected ..** akhirnya cari tau di google, terdampar dihalaman github, kurang lebih perintahnya seperti gambar ini:
![nox emulator](../images/nox-emulator-run.png)

pastikan liat log setelah perintah *react-native run-android* karena nanti akan muncul error yang akan tampil kurang lebih kayak gini:

![error nox](../images/error-nox-1.png)

solusinya buka SDK Manager (dalam hal ini, gw gak install Android Studio ya) dan install deh build tools 28.0.3, kelar.

running deh react native, ups, muncul error lagi kayak gini:

![erro nox kedua](../images/error-nox-2.png)

jangan panik, jalankan lagi ajah perintah koneksi ke nox, liat gambar pertama, perintahnya kurang lebih seperti ini:

```bash
nox_adb.exe connect 127.0.0.1:62001
```

eh muncul error
```script
unable to connect to 127.0.0.1:62001: cannot connect to 127.0.0.1:62001: No connection could be made because th
e target machine actively refused it.
```
langsung ajah jalankan perintah dibawah ini...
```bash
nox_adb.exe kill-server
nox_adb.exe connect 127.0.0.1:5037
```
berikut ini gambarnya:
![nox error](../images/nox-error.png)


done, sekarang bisa pake nox emulator deh! :)

sumber:
1. https://github.com/facebook/react-native/issues/13397#issuecomment-360830691
2. https://codingrakitan.blogspot.com/2018/11/cara-mengatasi-unable-to-connect-to.html
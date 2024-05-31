---
template: "post"
title: Compare 2 Database
cover: "../images/dbvear.png"
date: "2024-04-17T08:00:00Z"
slug: "compare-2-database-berbeda"
keywords: "database"
categories:
  - trick
tags:
  - database
  - dbvear
  - aapanel
---


## Bismillah

Ini terinspirasi dari project gw yang di halobayi, karena database ada 2, untuk production dan development. terkadang kita lupa, didevelopment ada perubahan, dan aplikasi production error, karena kurang kolom, nah bisa kita manfaatkan fiture dari dbvear, **Compare/ Migrate Schema** seperti dibawah ini.

![Compare Schema](../images/comparedb.png)

Caranya, klik kanan ke database production, pastikan bagian kiri adalah database development dan kanan adalah database production, seperti dibawah ini.

![Compare Schema 2](../images/comparedb2.png)

Tunggu beberapa saat... nanti akan muncul result yang memperlihatkan perbedaan strukture table development dengan production seperti dibawah ini.

![Compare Schema 3](../images/comparedb3.png)

Sekian Trick kali ini.

Have a nice day!
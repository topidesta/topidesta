---
template: 'post'
title: Helper Codeigniter Yang Berguna
cover: '../images/ci2.png'
date: '2022-03-16T08:00:00Z'
slug: 'helper-codeigniter-yang-berguna'
keywords: 'Helper Codeigniter Yang Berguna'
categories:
  - share
tags:
  - codeigniter
  - php
---

Bismillah ....

Kebetulan development internal masih menggunakan PHP 5, dan beberapa fungsi ada yang gak berjalan, langkah terbaiknya dengan memanfaatkan helper dan disimpan dalam function.

Untuk aturan pembuatan helper silahkan liat dokumentasinya, untuk function yang gw buat di Codeigniter 2 dan 3, biasanya ditulis dengan **namaHelper_helper.php** yang disimpan di folder *helpers*. 

Lanjut ke scriptnya beserta manfaat singkatnya, untuk sumber *code* nyah gw sertakan juga ya sudah gw sertakan juga ya.

`gist:mdestafadilah/791fd5f39e1b84518e2e3b625fecba46#random_text`

> script diatas untuk melakukan generate string semacam uniq id.


`gist:mdestafadilah/61584f53d9eac3f0ad5382f2a72a12a6#kalimat_salam`

> Kalimat Salam yang berdasarkan waktu komputer client.


`gist:mdestafadilah/6ff66034115c5150aba821837e3a1626#dropdown_value_db`

> script diatas untuk menampilkan value dalam bentuk dropdown  yang diambil dari table -> field (column) dengan type **enum**


`gist:mdestafadilah/a5fd0054dd1bcfcfa056d40c4909dca3#array_kolom`

> script diatas khusus PHP < 5.4 yang tidak bisa menggunakan fungsi array_column() php > 5.5 

# TODO masih ada Banyak ... staytune!


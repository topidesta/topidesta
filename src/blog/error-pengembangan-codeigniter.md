---
title: Daftar Error Pengembangan Web Codeigniter
published: true
description: Daftar Error Pengembangan Web Codeigniter buat pemula
tags: wordpress, codeigniter, php, error
date: '2019-08-09'
---

## Bismillah...

<p style="text-align:justify;">Okelah, pagi pagi dengan internet gratis di kampus yang <del datetime="2012-12-26T01:52:56+00:00">tercinta</del>? kali ini gw pengen berbagi dari hasil pengalaman gw aja sih, dan halaman ini akan terus di update secara berkala, karena setiap error yang gw alami, akan gw catat, haa... biasa otak pas-pasan dan cepet lupa pula, okelah ini dia beberapa line-code yang error dan berhasil gw atasi masalahanya dengan bantuan om google.</p>

```Fatal error: Call to a member function query() on a non-object in C:\xampp\htdocs\lab\ci\@riset-PKL\www\models\user_model.php on line 21```

Solusinya ini

```php
into your library don’t use
$this->db->query();
but
$CI = get_instance();
$CI->db->query
see in the help file
Ciao!
sumber: [sumber link](http://goo.gl/xk61d)
```

```php
A PHP Error was encountered
Severity: Notice
Message: Undefined variable: kd_wil
Filename: controllers/admin.php
Line Number: 79
```

Solusinya:

```Tambahkan variable kd_wil di file Admin dengan $kd_wil yang memiliki nilai tertentu misalkan, dalam passing object yang telah di assign ke variable $kd_wil, biasanya variable di view gak singkron dengan variable kontroler.```


```
A PHP Error was encountered
Severity: Notice
Message: Trying to get property of non-object
Filename: controllers/user.php
Line Number: 40
```

Solusinya ini:

```
Solusi: Ganti tanda (;) setiap endforeach;
Source: http://codeigniter.com/forums/viewthread/160337/
```
```
<?php anchor();?>
PERMASALAHAN: TIDAK BISA link image? Ada solusinya.
```


Solusinya ini:

```
http://codeigniter.com/forums/viewthread/97297/
```

```
[Err] 1305 - FUNCTION riset_pkl.alamat does not exist
```
Solusinya ini:

```SOLUSI: Artinya, tidak ada field alamat pada tabel, dikarenkan kurang dalam penulisan sintaks, tambahkan (comma)/ (,). Masalah ilaang.```

```Parse error: syntax error, unexpected T_ELSE, expecting T_FUNCTION in C:\xampp\htdocs\lab\ci\@riset-PKL\www\controllers\peksos.php on line 1141```

Solusinya ini:

```SOLUSI: Cek tanda kutif kurawal – { } di setiap baris logic codenya. Selasai```

```Fatal error: Call to a member function getCalendar() on a non-object in C:\xampp\htdocs\lab\ci\@mynote\www\controllers\welcome.php on line 135```

Solusinya ini:

```
SOLUSI: Kalo udah baca post diatas (paling atas) biasanya pake ini $CI = get_instance(); tricknya, tapi kali ini sedikit berbeda, setelah gw liat script oranglaen, dan wow, bisa ini dia yang dia pake.

BEST-SOLUSI: 
$date = $this->welcome->getCalendar($year, $mon);
$this->load->model('Mynote_m','welcome');

artinya: Kita mengload controller 'welcome' agar pas diakses controller maka langsung mengakses model (construct).
```

Yups, hanya itu yang gw alami, nanti gw tambahin juga trick dari group codeigniter indonesia, biar lebbih afdol mending temen-temen bookmark. ya, kalo dirasa perlu.

## Have Nice Day!
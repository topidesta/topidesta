---
template: "post"
title: Fungsi Untuk Mencari Kelipatan Bulan Setiap Tahun
cover: "../images/php.png"
date: "2019-10-30T08:40:00Z"
slug: "fungsi-untuk-mencari-kelipatan-bulan-setiap-tahun"
keywords: "Fungsi Untuk Mencari Kelipatan Bulan Setiap Tahun"
categories: 
    - trick 
tags:
    - php
    - codeigniter
---

### bismillah

Sekedar catatan pribadi aja sih yah, hehe ... kebetulan lagi buat laporan Grafik, dan beberapa pilihannya itu ada yang unik, yaitu mencari data pertriwulan, persemester, pertahun dan perbulan, tapi gak mau pake rentang bulan, misalkan kalo biasa bikin laporan kan gw pake rentang bulan, seperti gambar dibawah ini:
![rentangbulan](../images/rentangbulan.png)
Nah, gak masalah sih, bisa dihitung, asal *baku* pertriwulan itu dimulai dari Januari - Maret, bukan Febuari - April, ok Fix, bisa. nah langkah pertama buka google, haha ... cari deh keyword pake englsih .. "***date range 3 month in php***" ... pasti resultnya banyak dan bingung, neh gw kasih langsung ajah yah, fungsinya, bisa taro di helper (kalo pake Codeigniter).
```php
// source: https://stackoverflow.com/a/7068745
// contoh: https://3v4l.org/6GWnC
if ( !function_exists('trisemester')) {
    function trisemester($apa) {

        $isiTri = [];

        // 1 Jan - 31 Maret
        if ($apa == '1') {
            $awal = '01-01-'.date('Y');
            $tri = mktime(0, 0, 0, date("1")+3, date("01"),date("Y"));

        // 1 April - 30 Juni
        }elseif ($apa == '2') {
            $awal = '01-04-'.date('Y');
            $tri = mktime(0, 0, 0, date("4")+3, date("01"),date("Y"));
        
        // 1 Juli - 30 September
        }elseif ($apa == '3') {
            $awal = '01-07-'.date('Y');
            $tri = mktime(0, 0, 0, date("7")+3, date("01"),date("Y"));
        
        // 1 Oktober - 31 Desember
        }elseif ($apa == '4') {
            $awal = '01-10-'.date('Y');
            $tri = mktime(0, 0, 0, date("10")+3, date("01"),date("Y"));

        // Semester 1, 1 Januari - 30 Juni
        }elseif ($apa == '5') {
            $awal = '01-01-'.date('Y');
            $tri = mktime(0, 0, 0, date("1")+6, date("01"),date("Y"));

        // Semester 1, 1 Juli - 31 Desember
        }elseif ($apa == '6') {
            $awal = '01-07-'.date('Y');
            $tri = mktime(0, 0, 0, date("7")+6, date("01"),date("Y"));

        // Setaon
        }elseif ($apa == '7') {
            $awal = '01-01-'.date('Y');
            $tri = mktime(0, 0, 0, date("1")+12, date("01"),date("Y"));
        }

        return $isiTri = array(
            'awal'  => $awal,
            'akhir' => gmdate("d-m-Y",$tri)
        );
    }
}
```
itu sekalian gw kasih source dari StackOverFlow nyah yah. oh iya bonus neh, ada satu lagi yang bikin fungsinya juga, ini dia.
```php
// source: https://stackoverflow.com/a/24014541
if ( !function_exists('addMonths')) {
    function addMonths($months, DateTime $dateObject) {
        $next = new DateTime($dateObject->format('Y-m-d'));
        $next->modify('last day of +'.$months.' month');

        if($dateObject->format('d') > $next->format('d')) {
            return $dateObject->diff($next);
        } else {
            return new DateInterval('P'.$months.'M');
        }
    }
}

if ( !function_exists('endCycle')) {
    function endCycle($d1, $months) {
        $date = new DateTime($d1);

        // call second function to add the months
        $newDate = $date->add(addMonths($months, $date));

        // goes back 1 day from date, remove if you want same day of month
        $newDate->sub(new DateInterval('P1D')); 

        //formats final date to Y-m-d form
        $dateReturned = $newDate->format('Y-m-d'); 

        return $dateReturned;
    }
}
```

Keduanya sama saja, cuman yang gw butuh date yang sudah di definisikan, kalo yang kedua, kita bisa tentuin sendiri, triwulan itu dimulai dari mana, dah getu ajah, gak perlu lah yah dijelasin fungsinya, searching aja di dokumentasi php official ajah. sekian.

Have a nice day!
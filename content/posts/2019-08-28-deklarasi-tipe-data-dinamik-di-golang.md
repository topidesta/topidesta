---
template: "post"
title: Deklarasi Tipe data secara dinamik di Golang
cover: "../images/tipe-dinamik.png"
date: "2019-08-28T12:50:00Z"
slug: "deklarasi-tipe-data-dinamik-di-golang"
keywords: "Deklarasi Tipe data secara dinamik di Golang"
categories: 
    - belajar 
tags:
    - golang
---

### Bismillah

Sekedar catatan aja sih, hehe .... soalnya saat liat source code golang, ada yang membenak di otak gw, ini tuh kode apa sih ... ``:=`` nah mulai deh baca manual book dari orang laen bukan official yak, ternyata itu adalah **tipe data dinamik** kalo orang bule nyebutnya tuh **type inference** alias tipe data berdasarkan nilai valuenya, contohnya,

```go
	var x float64 = 20
	y := 30
	firstName := "fadilah"
	
	fmt.Println(x)
	fmt.Println(y)
	fmt.Println(firstName)
	
	fmt.Printf("tipe data x adalah %T\n", x)
	fmt.Printf("tipe data y adalah %T\n", y)
	fmt.Printf("tipe data firstName adalah %T\n", firstName)
```
bisa dilihat, baris pertama dari nilai `x` adalah `20` dengan tipe datanya `float64` yang sudah didefinisikan diawal, inget cara bacanya dari kanan, **nilai 20 bertipe float64 divariabel X** lanjut, kalo variabel `y` tipe datanya adalah `int` karena berupa angka, sedangkan variabel `firstName` tipe datanya adalah `string`, golang membacanya melalui sebuah **literal double quote** macam ini `"_value_"` silahkan baca manualnya [di sini](https://golang.org/pkg/fmt/) dan bisa dilihat di halaman [play go](https://play.golang.org/p/0TRE3j0UcFO)

done, simple tapi mengena.
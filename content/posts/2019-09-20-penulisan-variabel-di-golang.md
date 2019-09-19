---
template: "post"
title: Penulisan Variabel di Go Lang
cover: "../images/golang.png"
date: "2019-09-20T03:40:00Z"
slug: "penulisan-variabel-di-bahasa-go-lang"
keywords: "Penulisan Variabel di Go Lang"
categories: 
    - belajar 
tags:
    - golang
---

### Bismillah

Sekedar catatan dari belajar Golang, ada beberapa style penulisan variabel di golang, 1 baris atau lebih dari 1 baris. berikut ini contoh penulisan variabel

```golang
package main

func main() {
    // sintak penulisan variabel dengan banyak baris
    var john int // variabel john dengan tipe int nilai default 0
    var doe float64 // variabel doe dengan tipe float nilai default 0 
    var salah bool // varibel salah dengan tipe bool nilai default false atau 0
    var benar bool = true // variabel dengan tipe bool dan nilai true atau 1
    
    benar := true // sintak penulisan secara singkat, tipenya bool dengan nilai 1/ true

    // sintak penulisan variabel dengan banyak baris dalam 1 group
    var (
        john int
        doe float64
        salah bool 
    )
 
    // atau dengan cara lazzy, termalas ... hehe, 1 baris kelar
    var john, doe int // john dan doe pertipe integer

    namaDepan, namaBelakang := "John", "Doe" // deklarasi secara singkat otomatis bertipe string 

}
```

yaps, sesimple ituh ... semoga bermanfaat.

Have a nice day!
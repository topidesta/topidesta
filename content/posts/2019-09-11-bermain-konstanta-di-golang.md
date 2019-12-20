---
template: "post"
title: [belajar] Bermain Konstanta di Golang
cover: "../images/golang.png"
date: "2019-09-11T08:00:00Z"
slug: "bermain-konstanta-di-golang"
keywords: "Bermain Konstanta di Golang"
categories: 
    - belajar 
tags:
    - golang
---

### Bismillah

kali ini gw akan coba bahas mendasar, penulisan konstanta (nilai tetap) pada golang .. ya sekedar catatan gw sendiri juga ya, berikut code go nyah.

```go
package main

import (
	"fmt"
)

const Hello = "hello"
const World = "world"

func main() {
	fmt.Println(Hello, World)
}
```
Play groundnya [klik](https://play.golang.org/p/z6AsqQM2-oF), jadi pada fungsi diatas, kita akan menampilkan fungsi hello world dengan mendefinisikan nilai tetap **Hello** dan **World**. 

senjata utama GO ialah, bisa **penetapan nilai secara multiple**, seperti code go dibawah ini:

```go
package main

import (
	"fmt"
)

const Hello, World = "hello","world"

func main() {
	fmt.Println(Hello, World)
}
```
Play groundnya [klik](https://play.golang.org/p/uyULLpLyoKS) untuk beberapa orang akan menganggap ini terlalu beraturan, sulit untuk membacanya, makah bisa kita ubah menjadi ini:

```go
package main

import (
	"fmt"
)

const (
    Hello = "hello"
    World = "world"
)

func main() {
	fmt.Println(Hello, World)
}
```
Play groundnya [klik](https://play.golang.org/p/TSwONyUC1yI) ups, ini tergantung kalian, style yang mana ... kondisikan saja lah yah, oh iya kita juga mendefinisikan keluaran dengan jenis tipe nyah dengan menambahkan **%v** semacam verb default (nilai bawaan), sumberya ini: package [fmt](https://golang.org/pkg/fmt/), source go seperti ini:

```go
package main

import (
	"fmt"
)

const (
    Hello = "hello"
    World = "world"
)

func main() {
	fmt.Printf("%v %v",Hello, World)
}
```
Play groundnya [klik](https://play.golang.org/p/NP76SqDDkKI) 

done.

Have a nice day!

sumber: [GoNotebook](https://twitter.com/hashtag/GoNotebook)
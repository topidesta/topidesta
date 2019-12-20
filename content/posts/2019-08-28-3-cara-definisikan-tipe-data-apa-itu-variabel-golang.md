---
template: "post"
title: [belajar] 3 Cara mencari tahu tipe data apa di golang
cover: "../images/golang.png"
date: "2019-08-28T11:50:00Z"
slug: "3-cara-mencari-tahu-tipe-data-apa-di-golang"
keywords: "3 Cara mencari tahu tipe data apa di golang"
categories: 
    - belajar 
tags:
    - golang
---

### Bismillah 

lagi belajar variabel tipe data di golang, catatan coba cek [disini](/deklarasi-tipe-data-dinamik-di-golang) eh coba gogling, karena error muncul saat define string, ``./prog.go:13:15: invalid character literal (more than one character)`` ternyata dimanual booknya dikatakan men-definisi string wajib kudu harus double quote .. `"_value_"` tetiba terdampar dihalaman [stackoverflow](https://stackoverflow.com/a/27160765)

#### #1 - ***string formatting***
Teknik ini sudah kita gunakan dicatatan [ini](/deklarasi-tipe-data-dinamik-di-golang), pengunnannya simple, contohnya seperti ini:
```go
i := "horror"
fmt.Printf("%T\n", i)
```
resultnya adalah **string** tipe datanya.

#### #2 - ***package reflect***
Teknik ini dengan mengimport paket `reflect` dahulu, baru bisa kita gunakan, misalkan seperti ini:
```go
import (
	"fmt"
	"reflect"
)

func main() {
	i := "horror"
	fmt.Println(reflect.TypeOf(i))
}
```
resultnya adalah **string** juga, silahkan coba di go play ya [ini](https://play.golang.org/p/IkmNqTCgPrc).

#### #3 - ***dengan assertions***
Assertion itu semacam mengecek value yang sudah didefine sebelumnya, contohnya ini, sumber di [tour golang](https://tour.golang.org/methods/15) ya
```go
	var i interface{} = "hello"

	s := i.(string)
	fmt.Println(s)

	s, ok := i.(string)
	fmt.Println(s, ok)

	f, ok := i.(float64)
	fmt.Println(f, ok)

	f = i.(float64) // panic
	fmt.Println(f)
```

```go
	var i interface{} = "horror"
	fmt.Printf("%T\n", i)
	fmt.Println(reflect.TypeOf(i))

	switch i.(type) {
	case string:
		fmt.Println("betul string")
	case int:
		fmt.Println("betul integer")
	}
```
berdasarkan info [e-book](https://dasarpemrogramangolang.novalagung.com/) dari om noval agung, penggunakan `switch` - `case` hanya digunakan untuk mendeteksi tipe data konkrit yang bertipe `interface{}`. silahkan cek di [playgroundnya](https://play.golang.org/p/5NTJ5O4U3Ey) ya.

yaps sekian, have a nice day!

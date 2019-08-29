---
template: "post"
title: Memahami Slice atau Array di Golang
cover: "../images/tipe-dinamik.png"
date: "2019-08-28T12:50:00Z"
slug: "memahami-slice-array-di-golang"
keywords: "Memahami Slice atau Array di Golang"
categories: 
    - belajar 
tags:
    - golang
---

### Bismillah

Langsung saja baca penjelasannya ya, konsepnya sama hanya beda gaya menjelaskannya. :)

atau kita sedikit bermain dengan playground ya ... kurang lebih seperti ini:

```go

    // ke-1
    fmt.Println("\n###### Array ######\n")
    intArray := [5]int{1,2,3,4,5}   
    for index,element := range intArray{
        fmt.Println(index,"=>",element)
    }
     
    // ke-2
    fmt.Println("\n###### Slice ######\n")
    intSlice := make([]int,5)
    intSlice[0]=1
    intSlice[1]=2
    intSlice[2]=3
    intSlice[3]=4
    intSlice[4]=5
    for index,element := range intSlice{
        fmt.Println(index,"=>",element)
    }
     
    // ke-3
    fmt.Println("\n###### Map ######\n")
    intStrMap := make(map[string]int)
    intStrMap["A"]=0
    intStrMap["B"]=1
    intStrMap["C"]=2
    intStrMap["D"]=3
    intStrMap["E"]=4
    for index,element := range intStrMap{
        fmt.Println(index,"=>",element)
    }
```
oya, ini gw dapet dari halaman ini: [Golang Programs](https://www.golangprograms.com/print-index-and-element-or-data-from-array-slice-and-map.html)

### Ke #1
---

Kita akan mencoba modifikasi source ini:
```go
    fmt.Print("\n###### Array ######\n")
    intArray := [5]int{1,2,3,4,5}   
    for index,element := range intArray{
        fmt.Println(index,"=>",element)
    }

    fmt.Print("\n###### Array ######\n")
    intArray := [4]int{1,2,3,4,5}   
    for index,element := range intArray{
        fmt.Println(index,"=>",element)
    }
    // output: ./prog.go:9:32: array index 4 out of bounds [0:4]
```

Menurut Mas Noval Agung, `error` itu karena kapasitas dari array adalah `4`, sedangkan isi dari array itu berjumlah `5`, bagaimana kalo di isi `6` ? silahkan cek [playground](https://play.golang.org/p/nngB_aeKMrQ) ternyata tidak error, tetapi akan mengisi dengan nilai `0`. Nah, kita akan convert ke slice berdasarkan buku mas noval. kurang lebih seperti ini:

```go
    fmt.Print("\n###### Array ######\n")
    intArray := []int{1,2,3,4,5}   
    newArray := intArray[0:4] // kita ambil nilai sebelum 4

    for index,element := range newArray {
        fmt.Println(index,"=>",element)
    }
```
Silahkan cek [playgroundnya](https://play.golang.org/p/9mdkYUiQmaM).

### Ke #2
----

Lanjut, kita akan modifikasi slice ini:
```go
    fmt.Print("\n###### Slice ######\n")
    intSlice := make([]int,5)
    intSlice[0]=1
    intSlice[1]=2
    intSlice[2]=3
    intSlice[3]=4
    intSlice[4]=5
    for index,element := range intSlice{
        fmt.Println(index,"=>",element)
    }
```
sebetulnya slice tak perlu di-index datanya (dari buku yang gw baca) .. hems, coba kita ubah menjadi ini:

```go
    fmt.Print("\n###### Slice ######\n")
    intSlice := []int{1,2,3,4,5}
    for index,element := range intSlice{
        fmt.Println(index,"=>",element)
    }
```
ternyata berhasil tanpa error, silahkan cek [playgroundnya](https://play.golang.org/p/UXBtCH7XxqG)


sumber: 
1. https://dasarpemrogramangolang.novalagung.com/14-array.html
2. https://dasarpemrogramangolang.novalagung.com/15-slice.html
3. https://kodingin.com/slice-pada-golang/

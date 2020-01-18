---
template: "post"
title: Ajax Request di React - Lifecyle Event
cover: "../images/react-js.png"
date: "2020-01-19T03:40:00Z"
slug: "ajax-request-di-react-lifecycle-event"
keywords: "Ajax Request di React - Lifecyle Event"
categories: 
    - belajar
tags:
    - react
    - udacity
---

## bismillah

Jika di Javascript kita mengenal *Ajax request* untuk menghandle tampilan data setelah ada permintaan, direact pun sama ada sendiri, dikenal dengan **Lifecycle events**, jika direact nampilin data dengan method *Render()*, hanya menampilkan ini belom request/ fetch data, nah method untuk request/ fetch data ini dikenal dengan lifecycle events, diantaranya:

1. **componentDidMount()**
   dipanggil saat komponen sudah *dimasukkkan* ke DOM
2. **componenetWillMount()**
   dipanggil sebelum komponene *dihapus* dari DOM
3. **getDrivedStateFromProps()**
   dipanggil saat komponen dipakai dan ketika ada props baru

ingat, method *Render()* hanya untuk menampilkan data, jangan sesekali menambahkan fungsi fetch data didalamnya!, gunakanlah **componentDidMount()** untuk menghandle fetch/ request data.

dah itu ajah, contohnya bisa cek disini: https://reactjs.org/docs/react-component.html
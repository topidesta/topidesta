---
template: "post"
title: Dua Cara Binding Set State di React
cover: "../images/react-js.png"
date: "2020-02-02T08:40:00Z"
slug: "dua-cara-binding-set-state-di-react"
keywords: "Dua Cara Binding Set State di React"
categories: 
    - belajar
tags:
    - react
    - lynda
---

## bismillah

Lagi ikutin langkah menjadi ReactJS developer dari Lynda.com, ini linknya:
https://www.lynda.com/learning-paths/Web/become-a-react-developer

nah, dibagian tutorial bu ello `React.js Essential Training` section *Using setState*, ada 2 teknik untuk memaparkan lemparan data kalo direact disebut setstate, teknik #1

```javascript
constructor(props){
    super(props)
    this.state = {
        open: false
    }
    // cara #1
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
}

toggleOpenClosed = () => {
    this.setState( prevState => ({
        open: !prevState.open
    }))
}
```
Penjelasan singkat:
sebuah object data open bernilai false, disimpan dikonstraktor, yang sifatnya global, dan dibuat fungsi onClick namanya `toggleOpenClosed` dengan menggunakan setState, dengan objek yang bernilai kebalikan dari false, berarti true, `!prevState.open` dah getu aja.

dan ini trick ke #2

```javascript
state = { open: false }
toggleOpenClosed = () => {
    this.setState( prevState => ({
        open: !prevState.open
    }))
}
```

done. nah kan ada yang lebih simple.
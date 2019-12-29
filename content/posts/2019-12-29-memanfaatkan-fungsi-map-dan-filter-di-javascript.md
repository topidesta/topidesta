---
template: "post"
title: Memanfaatkan Fungsi Map dan Filter Di Javascript
cover: "../images/react-js.png"
date: "2019-12-29T13:40:00Z"
slug: "memanfaatkan-fungsi-map-dan-filter-di-javascript"
keywords: "Memanfaatkan Fungsi Map dan Filter Di Javascript"
categories: 
    - belajar
    - share
tags:
    - react
---

## bismillah

Sekarang masih fokus di *Front End* dengan reactJS, cuman beda source, sebelumnya di lynda.com nah karena pembahasan di lynda.com sedikit membosankan, coba cari Video Tutorial lainnya di Internet, *Udacity NanoDegree V2*.

Langsung aja ke *sourcecode* nyah yah

```javascript
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler'];
```
kalo biasa kita memecahkan data dengan fungsi *for* dan *if* dengan vanillaJS sangat gampang, sekarang akan kita gunakan fungsi *map()* dan *filter()* untuk menggantikannya, karena di ReactJS akan lebih menggunakan itu ketimbang gaya lama.

jadi pada contoh kali ini kita akan share cara menggunakan 2 fungsi yang sudah mendukung ES6

1. [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
2. [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

sekarang kita akan bahas menggunakan fungsi *for* yang digantikan dengan fungsi *.map()*, kita tambahkan karakter **!**, berikut contohnya:

```javascript

/* Menggunakan For untuk looping */
const excitedPeople = []
for (let i = 0; i < people.length; i++) {
 excitedPeople[i] = people[i] + '!'
}

/* Menggunakan Map() untuk looping */
const excitedPeople = people.map(name => name + '!')

// contoh: https://jsbin.com/nofelop/5/edit?js,console
```

oke lanjut kita akan coba dengan fungsi lainnya 

```javascript
/* Menggunakan If untuk mencari kondisi */
const excitedPeople = [];
const excitedPeopleLength = [];

for (let i = 0; i < people.length; i++) {
 excitedPeople[i] = people[i];
 excitedPeopleLength[i] = people[i].length;
 
  if(excitedPeopleLength[i] > 6){
    console.log(excitedPeople[i])
  }
}

/* Menggunakan Filter() untuk mencari kondisi */

const shortNames = people.filter( name => name.length > 6 );

```

nah, simple kan .. yah gw juga baru tau pas belajar reactJS ajah sih .. haha.

have a nice day!
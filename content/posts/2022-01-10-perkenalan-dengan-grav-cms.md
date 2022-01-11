---
template: 'post'
title: Perkenalan dengan Grav CMS
cover: '../images/gravcms.png'
date: '2022-01-10T08:00:00Z'
slug: 'perkenalan-dengan-grav-cms'
keywords: 'Perkenalan dengan Grav CMS'
categories:
  - share
tags:
  - cms
  - gravcms
---

Bismillah ....

Kebetulan lagi pengen cari Alternatif FlatFile CMS, hampir semuanya mengarah ke MERN Stack. Kebetulan PHP masih menjadi Dominasi dan juga kebutuhan kantor sekarang jadi carilah Cms PHP dengan FlatFile support (tanpa koneksi Database), cari sana sini, termasuk dokumentasi serta dukungan komunitas yang banyak, akhirnya coba deh GetGrav CMS.

> https://getgrav.org/about

Prinsipnya sederhana, dan gw suka.

> Tim GravCMS sadar diluar sana banyak CMS powerfull seperti Drupal, Wordpress dan Joomla, tapi... mereka butuh waktu yang banyak untuk mempelajari sebuah fungsi agar bisa di tambahkan atau dirawat. **Grav is a Fast, Simple, and Flexible file-based Web-platform**.

Jadi, ini bukan judul yang pas sih, **Perkenalan dengan Grav CMS** ... hanya sharing gw yang beberapa hari terakhir coba explore ini tools di dunia CMS's dan sangat sangat Powerfull. Diantaranya teknologi Grav memanfaatkan teknologi terkini, diantaranya:

- [Twig Templating](https://twig.symfony.com/): untuk mengontrol Template tampilan Pengguna
- [Markdown](https://en.wikipedia.org/wiki/Markdown): untuk konten yang disimpan (termasuk blog ini, filenya format .md)
- [YAML](https://yaml.org/): untuk konfigurasi
- [Parsedown](https://parsedown.org/): untuk Membantu Markdown di lingkup PHP
- [Doctrine Cache](https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/caching.html): Untuk Performa website
- [Pimple Dependency Injection Container](https://pimple.symfony.com/): Untuk Kemudahan dalam Penambahan dan Perawatan website
- [Symfony Event Dispatcher](https://symfony.com/doc/current/components/event_dispatcher.html): Untuk merawat plugin tambahan
- [Symfony Console](https://symfony.com/doc/current/components/console.html): Tampilan Command Line Interface (CLI)
- [Gregwar Image Library](https://github.com/Gregwar/Image): Untuk manipulasi Gambar

Ternyata memanfaatkan teknogi Symfony secara umum. Tapi saat gw coba, tak sesulit yang dibayangkan, kita bisa install melalui .zip extract foldernya ke document root atau lewat composer, banyak pilihannya deh.

Ouh ya, untuk Template/ Themes/ Plugins sudah banyak juga kok ... kurang lebih dihalaman ini:

1. https://getgrav.org/downloads/skeletons
2. https://getgrav.org/downloads/themes
3. https://getgrav.org/downloads/plugins


# Skeletons

Jadi skeletons itu All-in-one paket GravCMS diantaranya Plugins, Halaman dan Konfigurasi untuk memulai Grav, tinggal extract foldernya. dan Jalankan.

# Themes

Jadi themes semacam layout yang sudah jadi, tinggal di custom sesuai kebutuhannya.

```javascript
$ php bin/gpm index (melihat semua themes yang tersedia)

$ php bin/gpm install themename (untuk melakukan instalasi themes)
```

# Plugins 

Jadi plugins itu semacam alat tambahan untuk produktifitas GravCMS, ada buanyak tools, baca pelan pelan secara seksama alat yang pas untuk pengembahang websitenya.


Huft... pengen nulis banyak sih, tp gw lagi baca baca lagi .... atau nanti mungkin gw buat series aja kali ya...  doakan semoga terwujud.

# Sumber Belajar

- https://github.com/getgrav/awesome-grav#tutorials
- https://getgrav.org/blog/developing-with-github-part-1
- https://getgrav.org/blog/developing-with-github-part-2
- https://discourse.getgrav.org/c/showcase/7


Have a nice Day!

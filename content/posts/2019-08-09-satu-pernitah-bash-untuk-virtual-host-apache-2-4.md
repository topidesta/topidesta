---
template: "post"
title: Satu Perintah Bash Untuk Virtual Host 2.4 Di Linux Lite
cover: "../images/placeholder-660x400-464662.png"
date: "2019-08-09T08:00:00Z"
slug: "satu-perintah-bash-untuk-virtual-host-2-4-linux-lite"
categories: 
    - linux
    - codeigniter
    - bash
tags:
    - trick
---

#### Bismillah...

pernah share, cara membuat virtual host untuk pengembangan web terutama laravel ya masa kudu akses dari loclhost/laravel/public, soal akses url, ini dia:
<blockquote>trick-cara-jitu-setting-virtual-host-untuk-laravel-di-linuxlite-ubuntu-16-04</blockquote>

<script src="https://gist.github.com/mdestafadilah/2aff0ebefefcd79a7932393d8dec5f1d.js"></script>

kalo males copy past donwload aja ini url:
<a href="https://gist.github.com/mdestafadilah/2aff0ebefefcd79a7932393d8dec5f1d">https://gist.github.com/mdestafadilah/2aff0ebefefcd79a7932393d8dec5f1d</a>

Langkahnya:
<ol>
 	<li>$ cd /tmp</li>
 	<li>wget -s https://gist.github.com/mdestafadilah/2aff0ebefefcd79a7932393d8dec5f1d</li>
 	<li>sudo mv vhosts.sh vhosts</li>
 	<li>sudo mv /tmp/hosts /usr/local/bin/vhosts</li>
 	<li>Run: vhost -h</li>
</ol>
Done. caranya ada kok di sourcenya.

Have a nice day.

source: <a href="https://gist.github.com/fideloper/2710970">https://gist.github.com/fideloper/2710970</a>

#### have a nice day!
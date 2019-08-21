---
template: "post"
title: Upload docusaurus local ke github pages
cover: "../images/docusaurus.png"
date: "2019-08-09T08:00:00Z"
slug: "upload-docusaurus-local-ke-github-pages"
categories: 
	- trick
tags:
	- react
    - github
---

## Bismillah...

Langsung ajah lo liat video youtube ini:

https://www.youtube.com/watch?v=dn4dgA51WNg

Jadi, Langkahnya yang gw tangkep:
<ol>
 	<li>Buat Repository di Github</li>
 	<li>Clone ke Lokal (Komputer)</li>
 	<li>Install docusaurus di Folder hasil clone (di dalam foldernya), gw anggep lu tau install docusaurus</li>
 	<li>Push ke master</li>
 	<li>Commit ke branch</li>
 	<li>$ git checkout -b gh-pages</li>
 	<li>Masuk ke folder website, jalankan perintah ini:yarn run build # or `npm run build`</li>
 	<li>$ git add -f website/build/nama_repo_github &amp;&amp; git commit -m "Initial dist subtree commit"</li>
 	<li>$ git subtree push --prefix website/build/nama_repo_github origin gh-pages</li>
 	<li>Done. akses via: nama_username.github.io/nama_repo_github</li>
</ol>
&nbsp;

#### Permasalahan_ke_1

Tanya: Gw Pengen Update ke Master, tapi github.io gak update?

Jawab:
<ol>
 	<li>git branch -d the_local_branch</li>
 	<li>git push origin --delete the_remote_branch</li>
 	<li>Ikuti Ke-6 diatas sanpai langkah terakhir</li>
 	<li>Selesai terupdate</li>
</ol>
Have a Nice Day!

source:
~~~html
<ul>
 	<li>https://www.youtube.com/watch?v=dn4dgA51WNg</li>
 	<li>https://makandracards.com/makandra/621-git-delete-a-branch-local-or-remote</li>
 	<li>https://docusaurus.io/docs/en/publishing</li>
</ul>
~~~

## have a nice day!
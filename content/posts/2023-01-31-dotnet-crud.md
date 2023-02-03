---
template: "post"
title: CRUD Dot Net dengan ReactJS
cover: "../images/dotnet.png"
date: "2023-01-31T08:00:00Z"
slug: "dotnet-crud"
keywords: "CRUD DotNet ReactJS"
categories:
  - belajar
tags:
  - reactjs
  - dotnet
  - crud
  - draft
---

Bismillah ....

Postingan kali ini tentang CRUD DotNet dengan ReactJS, langsung saja ke Repositorinya ya.

> https://github.com/mdestafadilah/crud-dot-net-reactjs


## Persiapan

## Permasalahan

Database bisa pake MySQL, berhubung ini DotNet sekalian aja pake SQLServer 2019, install seperti biasa. nah muncul masalah saat koneksi ke tools dbeavear, pesan erronya kyak gini

> The TCP/IP connection to the host localhost, port 1433 has failed

coba browsing duckduckgo, mampir ke halaman ini -> https://stackoverflow.com/a/18981672

Simplenya ketik aja **sql server 2019** seperti dibawah ini

![sql Server 2019](../images/sqlserver2019.png)

kalo udah kebuka, lanjutkan dengan enable TCP/ IP, seperti berikut ini

![tcp ip sql Server](../images/sqlserver-enable.png)

Kalo udah lanjut deh config connection di dbeaver seperti berikut ini

![dbeaver sql Server](../images/dbeavear-sql.png)

> Koneksi SQLServer mau pakai Username dan Password

Default koneksi dengan **Windows Authentication** pasti berhasil, jika sudah lakukan perintah SQL berikut ini, satu satu ya.

```sql
EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'LoginMode', REG_DWORD, 2;

ALTER LOGIN [sa] WITH PASSWORD='newpassword', CHECK_POLICY=OFF;

ALTER LOGIN [sa] ENABLE;
```

disana kita akan enable default username **sa** dengan password **newpassword** dan ada angka [2] yang artinya kita akan mengaktifkan kombinasi authentikasi login [[1]](#1).

Jika sudah jangan lupa restart SQL Servernya.

## Sumber Belajar

1. http://go.topidesta.my.id/dotnet5-crud
2. http://go.topidesta.my.id/react-hook-crud
3. http://go.topidesta.my.id/react-crud-simple
4. http://go.topidesta.my.id/orm-entity-framework
5. http://go.topidesta.my.id/orm-entity-framework-official
6. <a id="1">[1] https://superuser.com/a/731047</a>

TODO:

Have a nice day!

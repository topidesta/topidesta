---
template: "post"
title: Catatan belajar C# .Net
cover: "../images/csharp.png"
date: "2024-02-27T08:00:00Z"
slug: "catatan-belajar-c-sharp-dot-net"
keywords: "C#"
categories:
  - belajar
tags:
  - dotnet
  - C#
  - csharp
---


## Bismillah

Alhamdulillah, gw diterima ~~Freelance di Catalyst sebagai Programmer Support~~, jadi belum sempet update blog ditambah sebelumnya gw sibuk belajar [C# dari Microsoft](https://topidesta.my.id/belajar-c-sharp-sertifikat-resmi) dan mini project lainnya, hihi.

Catatan kali ini terkait teknologi .Net yang 1 tahun terakhir gw udah belajar, dan akan terus belajar, karena teknologi ini sudah multiplatform (windows, linux, macos) dan digunakan oleh Perusahaan besar (semoga THP juga Besar, aamiin.) Oke, jadi semua catatan akan gw taro disini, baik itu trick intrick dalam dunia .Net (terutama C#) ataupun catatan yang perlu gw catata yang akan digunakan berulang ulang.

Biasanya kita clone project .Net tapi bingung langkah selanjutnya, inget ini mirip java.

```csharp
// - Build Dahulu Projectnya
// - Pilih Nuget Package Manager
// - Console: PM > Add-Migration Initial
// - Console: PM > Update-Database

// We will create model from Database Tables
// -----------------------------------------
// source: github.com/CuriousDrive/BookStores/blob/master/Database/GenerateData.sql
// - Create Core API Project
// - Select Nuget Package from Root Project Browser
// - Install EntityFrameworkSqlServer
// - Install EntityFrameworkCoreTools
// - Open Pacakge Manager Console to Run Scaffolding the model
// - Scaffold-DbContext "Server=.\SQLExpress;Database=BookStoresDB;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
```

Dotnet run error kayak gini

![Dotnet Error](../images/dotnet-error.png)

Silahkan pakai trick ini

```csharp
dotnet publish "C:\Users\RSUP\DEV\C#\FolderProject\NamaProject.Ya\NamaProject.Ya.csproj" "/p:PublishProfile=C:\Users\RSUP\DEV\C#\FolderProject\NamaProject.Ya\Properties\PublishProfiles\FolderProfile.pubxml"

# simpan dalam bentul .bat
# Jika sudah running hasil publish code tersebut

$ dotnet Questio.Web.dll --urls=http://localhost:5001/
```


---
template: "post"
title: Command Not Found React Native Run Android
cover: "../images/react-native.png"
date: "2019-12-05T05:40:00Z"
slug: "command-not-found-react-native-run-android"
keywords: "Command Not Found React Native Run Android"
categories: 
    - trick
tags:
    - native
    - android
---

## bismillah

langsung sajah dah, tetiba perintah **react-native run-android** gw kagak bisa, command not found! apa karena gw ganti hdd ke ssd yak ... hems... padahal hanya drive selain C: .. yasudah, ini dia tricknya, install ulang lagi ajah module node js pake yarn package manager ya, ini perintahnya:

1. yarn global add expo-cli
2. yarn global add react-native-cli

pastikan buka **CMD** atau **BASH** terminal dalam posisi *Run Administrator* kalo udah ya restart atau log-out dulu, biar re-create index dl itu windows, inget ini bukan linux yak, hehe.

cek dengan perintah ini: **react-native -v** nanti akan muncul versi nyah.

Done, have a nice day!

source: 
1. https://stackoverflow.com/a/55224044
2. https://stackoverflow.com/a/54778838
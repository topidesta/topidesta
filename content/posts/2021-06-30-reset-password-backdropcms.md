---
template: 'post'
title: Reset Password BackdropCMS
cover: '../images/backdropcms.png'
date: '2021-06-30T10:00:00Z'
slug: 'reset-password-backdropcms'
keywords: 'Reset Password BackdropCMS'
categories:
  - trick
tags:
  - drupal7
  - backdropcms
---

Bismillah

Tulisan ini pengalaman gw karena lupa password di localhost (development) backdropCMS.

Berikut ini langkah Ribet, karena kalo ubah dari database langsung, tidak akan bekerja, ini dilakukan jika reset-password tidak berfungsi ya, langsung saja.

1. Buat PHP Code
```php
<?php
    define('BACKDROP_ROOT', getcwd());
    require_once BACKDROP_ROOT . '/core/includes/bootstrap.inc';
    backdrop_bootstrap(BACKDROP_BOOTSTRAP_FULL);
    require_once BACKDROP_ROOT . '/core/includes/password.inc';

        if (isset($_GET['pass']) && !empty($_GET['pass'])) {
            $newhash = user_hash_password($_GET['pass']);
        }
        else {
            die('Retry with ?pass=PASSWORD set in the URL');
        }

    $updatepass = db_update('users') 
                    ->fields(array(
                    'pass' => $newhash,
                    // 'name' => 'admin',
                    //'mail' => '<a href="mailto:yourmail@example.com'">yourmail@example.com'</a>'
                    ))
                    ->condition('uid', '1', '=')
                    ->execute();
    print "Done. Please delete this file immediately!";
    backdrop_exit();
?>
```

2. Upload di **root** backdropcms disimpan.

3. Akses Via web browser PHP Code yang sudah kitabuat.

- Buka Halaman http://localhost/website-backdrop/lupapassword.php?pass=passwordBaru
- Ganti passwordBaru dengan password yang henda diganti, pastikan kombinasi ya

4. Jika sudah jangan lupa Hapus File lupapassword.php nyah.

*Catatan: Bekerja di backdropcms 1.8 s.d 1.19*

---

## For Your Information (FYI)

Terkadang trick diatas tidak bisa, entah kenapa, akhirnya baca komentar dibawahnya, ada yang share, diantaranya:

1. Set file settings.php ke 777 (jika linux), abaikan jika windows
2. copy-paste baris **$settings['hash_salt']** di file settings.php yang website berhasil ke website bermasalah.
3. copy-paste password user 1, berhasil login yang terenkripsi di database ke database user 1 login bermasalah.
4. Kosongkan table **flood** di website bermasalah tadi.
5. Login dengan Password yang website berhasil tadi.
6. Selesai.

Have a nice day!

source:
1. https://forum.backdropcms.org/forum-topic/how-reset-admin-password
2. https://www.drupal.org/node/1556488
3. https://www.drupal.org/forum/support/post-installation/2010-03-01/how-to-unblock-my-own-admin-account-after-5-failed-login

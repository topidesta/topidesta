---
template: 'post'
title: Codeigniter 4 Error saat Push ke Heroku
cover: '../images/heroku.png'
date: '2021-12-27T14:00:00Z'
slug: 'codeigniter-4-error-saat-push-ke-heroku'
keywords: 'Codeigniter 4 Error saat Push ke Heroku'
categories:
  - share
tags:
  - codeigniter4
  - heroku
---

Bismillah ....

Kebetulan lagi handle Project yang sudah gak dihandle sama Maintenernya, tapi lagi gw tanya, mau dilanjutin apa kagak sih, project terbaru **Codeigniter 4 Restful JWT Token** dihalaman ini masih sangat sederhana.

```https://github.com/mdestafadilah/ci-rest-jwt```

Project sebelumnya masih CI 3 dan ada masalah saat push ke Heroku, dan gw coba Refactore ke CI 4 eh sempet ada masalah juga di heroku, seperti ini:

```bash
-----> Building on the Heroku-20 stack
-----> Determining which buildpack to use for this app
-----> PHP app detected
-----> Bootstrapping...
-----> Installing platform packages...
 !     ERROR: Failed to install system packages!
 !     
 !     Your platform requirements (for runtimes and extensions) could
 !     not be resolved to an installable set of dependencies, or a
 !     platform package repository was unreachable.
 !     
 !     This usually means that you (or packages you are using) depend
 !     on a combination of PHP versions and/or extensions that are
 !     currently not available on Heroku.
 !     
 !     The following is the full output from the installation attempt:
 !     
 !     > You are using Composer 1 which is deprecated. You should upgrade to Composer 2, see https://blog.packagist.com/deprecating-composer-1-support/
 !     > Loading repositories with available runtimes and extensions
 !     > Updating dependencies
 !     > Your requirements could not be resolved to an installable set of packages.
 !     > 
 !     >   Problem 1
 !     >     - The requested package composer-plugin-api could not be found in any version, there may be a typo in the package name.
 !     > 
 !     
 !     For reference, the following runtimes are currently available:
 !     
 !     PHP:  8.1.1, 8.1.0, 8.0.14, 8.0.13, 8.0.12, 8.0.11, 8.0.10, 
 !     8.0.9, 8.0.8, 8.0.7, 8.0.6, 8.0.3, 8.0.2, 8.0.1, 8.0.0, 
 !     8.0.0RC4, 7.4.27, 7.4.26, 7.4.25, 7.4.24, 7.4.23, 7.4.22, 
 !     7.4.21, 7.4.20, 7.4.19, 7.4.16, 7.4.15, 7.4.14, 7.4.13, 
 !     7.4.12, 7.3.33, 7.3.32, 7.3.31, 7.3.30, 7.3.29, 7.3.28, 
 !     7.3.27, 7.3.26, 7.3.25, 7.3.24
 !     
 !     Please verify that all requirements for runtime versions in
 !     'composer.lock' are compatible with the list above, and ensure
 !     all required extensions are available for the desired runtimes.
 !     
 !     When choosing a PHP runtimes and extensions, please also ensure
 !     they are available on your app's stack (heroku-20), and select
 !     a different stack if needed after consulting the article below.
 !     
 !     For a list of supported runtimes & extensions on Heroku, please
 !     refer to: https://devcenter.heroku.com/articles/php-support
 !     Push rejected, failed to compile PHP app.
 !     Push failed
```

Oke ternyata masalahnya di *composer* sendiri, duh ya. berikut pernyataannya.

```Well, the plugin ecosystem is not yet fully compatible with the upcoming Composer 2.0. There is #8726 to track this```

setelah melakukan downgrade ke composer 1,

```bash
composer self-update --1
```

Permasalahan selesai.

Have a nice day!

sumber:
- https://github.com/composer/composer/issues/8913
- https://stackoverflow.com/a/34525259

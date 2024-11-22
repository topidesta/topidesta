---
template: "post"
title: WAF diaplikasi Klinik Hazika
cover: "../images/waf-logo.png"
date: "2024-11-22:08:00Z"
slug: "waf-diaplikasi-klinik-hazika"
keywords: "codeigniter, waf, security"
categories:
  - trick
tags:
  - codeigniter
  - server
---

## Bismillah

Alhamdulilah, lagi dipaksa buat nulis lagi, meski lagi sibuk banget ini, tulisan kali ini adalah security trick yang gw implentasikan di **Aplikasi Klinik Hazika** yang digunakan di halo bayi indonesia, menggunakan WAF. Web Application Firewall, sebuah layer keamanan aplikasi dari sisi aplikasi, dari sisi cara aksesnya. berikut ini gambaran sederhana bagaimana sebuah WAF melindungi aplikasi kita.

![waf-working](../images/waf-work.png)
source: https://www.stormit.cloud/blog/what-is-a-web-application-firewall/

Selain menggunakan WAF dari sisi server gw implentasikan juga **Nginx Free Firewall** dari aaPanel, berikut ini tampilannya.

![nginx-firewall](../images/nginx-firewall.png)

kita bisa setting *whitelist* atau *blacklist* sebuah IP Address, apakah mencurigkan atau tidak dan lain sebagainya.

Selain itu gw juga menambahan security lainnya, seperti **nG Firewall** dari sisi Server, menggunakan tools dari Perishable Press.

Untuk sisi aplikasi, gw gunakan Shieldon yang compatible dengan PSR-4 (Composer), karena aplikasi klinik hazika menggunakan codeigniter 4, dan tersedia secara *opensource.*

masih kurang? yaps, dari tampilan sebelum masuk ke sistem, gw implentasikan sebuah captcha slider, untuk masuk ke sistem, seperti berikut.

![waf-slider](../images/waf-slider.png)

Untuk sementara bebarapa kali gw liat akses yang aneh, dan gak tembus, alhamduillah. jadi gw rasa 3 tools dengan 2 layer keamanaan sudah cukup ya.

## Catatan Implementasi ShieldOn

Saat implentasi shieldon agak sedikit tricky, karena ada sedikit error seperti ini

![shieldon-ci4](../images/shieldon-ci4.png)

Kita harus ubah di folder **vendor** dimana shieldon terinstall dan ubah scriptnya dengan ini di folder

![shieldon-ubah](../images/shieldon-ubah.png)

```php
<?php
/*
 * This file is part of the Shieldon package.
 *
 * (c) Terry L. <contact@terryl.in>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * 
 * File Correction: APP\vendor\Shieldon\src\Firewall\Integration\CodeIgniter4
 * Source instalation: https://shieldon.io/en/guide/codeigniter.html#codeigniter-4
 * Source Correction: https://forum.codeigniter.com/showthread.php?tid=78109&pid=382427#pid382427
 * 
 */

declare(strict_types=1);

namespace Shieldon\Firewall\Integration;

use Shieldon\Firewall\Firewall;
use Shieldon\Firewall\HttpResolver;
use CodeIgniter\HTTP\RequestInterface as Request;
use CodeIgniter\HTTP\ResponseInterface as Response;
use CodeIgniter\Filters\FilterInterface;
use Shieldon\Firewall\Captcha\Csrf;
use function csrf_token; // CodeIgniter 4
use function csrf_hash; // CodeIgniter 4

/**
 * CodeIgniter 4 Middleware of Shieldon Firewall.
 */
class CodeIgniter4 implements FilterInterface
{
    /**
     * The absolute path of the storage where stores Shieldon generated data.
     *
     * @var string
     */
    protected $storage;

    /**
     * The entry point of Shieldon Firewall's control panel.
     *
     * For example: https://yoursite.com/firewall/panel/
     * Just use the path component of a URI.
     *
     * @var string
     */
    protected $panelUri;

    /**
     * Constructor.
     *
     * @param string $storage  See property `storage` explanation.
     * @param string $panelUri See property `panelUri` explanation.
     *
     * @return void
     */
    public function __construct(string $storage = '', string $panelUri = '')
    {
        $this->storage = WRITEPATH . 'shieldon_firewall';
        $this->panelUri = '/firewall/panel/';

        if ('' !== $storage) {
            $this->storage = $storage;
        }

        if ('' !== $panelUri) {
            $this->panelUri = $panelUri;
        }
    }

    /**
     * Shieldon middleware invokable class.
     *
     * @param Request $request
     *
     * @return mixed
     */
    public function before(Request $request, $arguments = null)
    {
        if ($request->isCLI()) {
            return;
        }

        // CodeIgniter 4 is not a PSR-7 compatible framework, therefore we don't 
        // pass the Reqest and Reposne to Firewall instance.
        // Shieldon will create them by its HTTP factory.
        $firewall = new Firewall();
        $firewall->configure($this->storage);
        $firewall->controlPanel($this->panelUri);

        // Pass CodeIgniter CSRF Token to Captcha form.
        $firewall->getKernel()->setCaptcha(
            new Csrf([
                'name' => csrf_token(),
                'value' => csrf_hash(),
            ])
        );

        $response = $firewall->run();

        if ($response->getStatusCode() !== 200) {
            $httpResolver = new HttpResolver();
            $httpResolver($response);
        }
    }

    /**
     * We don't have anything to do here.
     *
     * @param Response $request
     * @param Response $response
     *
     * @return mixed
     */
    public function after(Request $request, Response $response, $arguments = null)
    {

    }
}
```

gw udah buat Pull Request (PR) tapi belom di acc sama ownernya, jadi mau gak mau langsung ubah aja di folder **vendor** ya.

> https://github.com/terrylinooo/shieldon/pull/68

Sekian informasi dan trick yang gw implentasikan di aplikasi klinik hazika.

Have a nice day!


### Source

1. [aaPanel](https://www.aapanel.com/)
2. [nG Firewall](https://perishablepress.com/ng-firewall/)
3. [ShieldOn for Codeigniter](https://github.com/terrylinooo/shieldon)
4. [Patch Codeigniter 4](https://gist.github.com/mdestafadilah/9b3cab601c9492d552ebf59a2d698667)
<?php

namespace App\ThirdParty\Shieldon;

use Shieldon\Firewall\Integration\CodeIgniter4 as ShieldonFilter;

/**
 * Thin wrapper to register Shieldon as a ThirdParty class.
 * Keeps configuration local to the app namespace and uses CI4 writable path.
 */
class Firewall extends ShieldonFilter
{
    public function __construct()
    {
        $storage = WRITEPATH . 'shieldon_firewall';
        $panelUri = '/firewall/panel/';

        parent::__construct($storage, $panelUri);
    }
}


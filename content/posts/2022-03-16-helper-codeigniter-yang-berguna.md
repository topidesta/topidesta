---
template: 'post'
title: Helper Codeigniter Yang Berguna
cover: '../images/ci2.png'
date: '2022-03-16T08:00:00Z'
slug: 'helper-codeigniter-yang-berguna'
keywords: 'Helper Codeigniter Yang Berguna'
categories:
  - share
tags:
  - codeigniter
  - php
---

Bismillah ....

Kebetulan development internal masih menggunakan PHP 5, dan beberapa fungsi ada yang gak berjalan, langkah terbaiknya dengan memanfaatkan helper dan disimpan dalam function.

Untuk aturan pembuatan helper silahkan liat dokumentasinya, untuk function yang gw buat di Codeigniter 2 dan 3, biasanya ditulis dengan **namaHelper_helper.php** yang disimpan di folder *helpers*. 

Lanjut ke scriptnya beserta manfaat singkatnya, untuk sumber *code* nyah gw sertakan juga ya sudah gw sertakan juga ya.

```php
# source: https://gist.github.com/raveren/5555297
if ( !function_exists('random_text')) {
  function random_text( $type = 'alnum', $length = 8 ) {
    switch ( $type ) {
      case 'alnum':
      $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      break;
      case 'alpha':
      $pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      break;
      case 'hexdec':
      $pool = '0123456789abcdef';
      break;
      case 'numeric':
      $pool = '0123456789';
      break;
      case 'nozero':
      $pool = '123456789';
      break;
      case 'distinct':
      $pool = '2345679ACDEFHJKLMNPRSTUVWXYZ';
      break;
      default:
      $pool = (string) $type;
      break;
    }

    $crypto_rand_secure = function ( $min, $max ) {
      $range = $max - $min;
      if ( $range < 0 ) return $min; // not so random...
      $log    = log( $range, 2 );
      $bytes  = (int) ( $log / 8 ) + 1; // length in bytes
      $bits   = (int) $log + 1; // length in bits
      $filter = (int) ( 1 << $bits ) - 1; // set all lower bits to 1
      do {
        $rnd = hexdec( bin2hex( openssl_random_pseudo_bytes( $bytes ) ) );
      $rnd = $rnd & $filter; // discard irrelevant bits
      } while ( $rnd >= $range );
      return $min + $rnd;
    };

    $token = "";
    $max   = strlen( $pool );
    for ( $i = 0; $i < $length; $i++ ) {
      $token .= $pool[$crypto_rand_secure( 0, $max )];
    }
    return $token;
  }
}
```

> script diatas untuk melakukan generate string semacam uniq-id.


```php
# source: https://stackoverflow.com/a/46574723
if(!function_exists('ucapan_selamat')) {
	function ucapan_selamat() {
    $hour = date("G");
    return ($hour >= 3 && $hour < 12) 
              ? "Selamat Pagi, " 
              : (($hour >= 12 && $hour < 17) ? "Selamat Siang, " : "Selamat Malam, ");
	}
}
```

> Kalimat Salam yang berdasarkan waktu komputer client.


```php
# source: https://github.com/typesafer/codeigniter-enum-select-boxes
if (!function_exists('dropdownKolom')) {
  function dropdownKolom($table , $field, $all=false)
  {
      $ci = & get_instance();
      $query = "SHOW COLUMNS FROM ".$table." LIKE '$field'";
      $row = $ci->db->query("SHOW COLUMNS FROM ".$table." LIKE '$field'")->row()->Type;  
      $regex = "/'(.*?)'/";
      preg_match_all( $regex , $row, $enum_array );
      $enum_fields = $enum_array[1];
      
      foreach ($enum_fields as $key=>$value)
      {
          if ($all) {
              $enums['all'] = 'All'; 
              $enums[$value] = strtoupper($value); 
          }else{
              $enums[$value] = strtoupper($value); 
          }
      }
      return $enums;
  }
}
```

> script diatas untuk menampilkan value dalam bentuk dropdown  yang diambil dari table -> field (column) dengan type field **enum**


```php
# source: https://stackoverflow.com/a/33919648
# using for php < 5.4 if server using > 5.5 please, use array_columnt instead
if (!function_exists('arr_kolom')) {
  function arr_kolom(array $array, $columnKey, $indexKey = null)
  {
      $result = array();
      foreach ($array as $subArray) {
          if (!is_array($subArray)) {
              continue;
          } elseif (is_null($indexKey) && array_key_exists($columnKey, $subArray)) {
              $result[] = $subArray[$columnKey];
          } elseif (array_key_exists($indexKey, $subArray)) {
              if (is_null($columnKey)) {
                  $result[$subArray[$indexKey]] = $subArray;
              } elseif (array_key_exists($columnKey, $subArray)) {
                  $result[$subArray[$indexKey]] = $subArray[$columnKey];
              }
          }
      }
      return $result;
  }
}
```

> script diatas khusus PHP < 5.4 yang tidak bisa menggunakan fungsi array_column() yang ada di php > 5.5 

# TODO masih ada Banyak ... staytune!


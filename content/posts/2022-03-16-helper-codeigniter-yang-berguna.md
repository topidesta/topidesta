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

<details>
    <summary>Generate Random String</summary>
    <pre>
        // source: https://gist.github.com/raveren/5555297
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
    </pre>
</details>

<details>
    <summary>Kalimat Salam</summary>
    <pre>
        // source: https://stackoverflow.com/a/46574723
        if(!function_exists('ucapan_selamat')) {
            function ucapan_selamat() {
            $hour = date("G");
            return ($hour >= 3 && $hour < 12) 
                    ? "Selamat Pagi, " 
                    : (($hour >= 12 && $hour < 17) ? "Selamat Siang, " : "Selamat Malam, ");
            }
        }
    </pre>
</details>

<details>
    <summary>Dropdown Field Tabel Kolom Field Enum</summary>
    <pre>
        // source: https://github.com/typesafer/codeigniter-enum-select-boxes
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
    </pre>
</details>

<details>
    <summary>array_column</summary>
    <pre>
    // source: https://stackoverflow.com/a/33919648
    // using for php < 5.4 if server using > 5.5 please, use array_columnt instead
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
    </pre>
</details>

<details>
    <summary>Convert Number for Whatsapp</summary>
    <pre>
    if ( !function_exists('convertNumber')) {
        function convertNumber( $nope, $whatsappStyle=false ) {
            $ci =& get_instance();
            $styleNomorWa = ($whatsappStyle) ? '@c.us' : '';
            $cekArrayData = is_string($nope); //exit(dump($cekArrayData != true));
            $EnamDuaNumber = '';
            $NewEnamDuaNumber = '';
            // Gerombolan
            if ($cekArrayData != true && isset($nope)) {
                foreach ($nope as $key => $value) {
                    $output = preg_replace('/[^0-9]/', '', $value);
                    $EnamDuaNumber .= ((mb_substr($output, 0, 1) == 0) ? "'62".ltrim($output, 0) : $output).$styleNomorWa."',";
                    $NewEnamDuaNumber = rtrim($EnamDuaNumber, ',');
                }
            // Alone
            }else{
                $output = preg_replace('/[^0-9]/', '', $nope); 
                $EnamDuaNumber = ((mb_substr($output, 0, 1) == 0) ? "62".ltrim($output, 0) : $output).$styleNomorWa;
                $NewEnamDuaNumber = $EnamDuaNumber;
            }
            return $NewEnamDuaNumber;
        }
    }
    </pre>
</details>

<details>
    <summary>Pengecekan JSON Text</summary>
    <pre>
    // source: https://stackoverflow.com/a/15198925
    if (!function_exists('isJson')) {
        function isJson($string)
        {
            // decode the JSON data
            $result = json_decode($string);
            // switch and check possible JSON errors
            switch (json_last_error()) {
                case JSON_ERROR_NONE:
                    $error = ''; // JSON is valid // No error has occurred
                    break;
                case JSON_ERROR_DEPTH:
                    $error = 'The maximum stack depth has been exceeded.';
                    break;
                case JSON_ERROR_STATE_MISMATCH:
                    $error = 'Invalid or malformed JSON.';
                    break;
                case JSON_ERROR_CTRL_CHAR:
                    $error = 'Control character error, possibly incorrectly encoded.';
                    break;
                case JSON_ERROR_SYNTAX:
                    $error = 'Syntax error, malformed JSON.';
                    break;
                // PHP >= 5.3.3
                case JSON_ERROR_UTF8:
                    $error = 'Malformed UTF-8 characters, possibly incorrectly encoded.';
                    break;
                // PHP >= 5.5.0
                case JSON_ERROR_RECURSION:
                    $error = 'One or more recursive references in the value to be encoded.';
                    break;
                // PHP >= 5.5.0
                case JSON_ERROR_INF_OR_NAN:
                    $error = 'One or more NAN or INF values in the value to be encoded.';
                    break;
                case JSON_ERROR_UNSUPPORTED_TYPE:
                    $error = 'A value of a type that cannot be encoded was given.';
                    break;
                default:
                    $error = 'Unknown JSON error occured.';
                    break;
            }
            if ($error !== '') {
                // throw the Exception or exit // or whatever :)
                return $error;
            }
            // everything is OK
            return $result;
        }
    }
    </pre>
</details>

<details>
    <summary>Backup DB</summary>
    <pre>
        /**
        * MySQLi Export
        *
        * @access  private
        * @param   array   Preferences
        * @return  mixed
        * @source https://stackoverflow.com/a/29801337
        */
        if ( !function_exists('backupDB')) {
            function backupDB($params = array())
            {
                // Currently unsupported
                //---return $this->db->display_error('db_unsuported_feature');
                if (count($params) == 0)
                {
                    return FALSE;
                }
                // Extract the prefs for simplicity
                extract($params);
                // Build the output
                $output = '';
                foreach ((array)$tables as $table)
                {
                    // Is the table in the "ignore" list?
                    if (in_array($table, (array)$ignore, TRUE))
                    {
                        continue;
                    }
                    // Get the table schema
                    $query = $this->db->query("SHOW CREATE TABLE `".$this->db->database.'`.`'.$table.'`');
                    // No result means the table name was invalid
                    if ($query === FALSE)
                    {
                        continue;
                    }
                    // Write out the table schema
                    $output .= '#'.$newline.'# TABLE STRUCTURE FOR: '.$table.$newline.'#'.$newline.$newline;
                    if ($add_drop == TRUE)
                    {
                        $output .= 'DROP TABLE IF EXISTS '.$table.';'.$newline.$newline;
                    }
                    $i = 0;
                    $result = $query->result_array();
                    foreach ($result[0] as $val)
                    {
                        if ($i++ % 2)
                        {
                            $output .= $val.';'.$newline.$newline;
                        }
                    }
                    // If inserts are not needed we're done...
                    if ($add_insert == FALSE)
                    {
                        continue;
                    }
                    // Grab all the data from the current table
                    $query = $this->db->query("SELECT * FROM $table");
                    if ($query->num_rows() == 0)
                    {
                        continue;
                    }
                    // Fetch the field names and determine if the field is an
                    // integer type.  We use this info to decide whether to
                    // surround the data with quotes or not
                    $i = 0;
                    $field_str = '';
                    $is_int = array();
                    while ($field = mysqli_fetch_field($query->result_id))
                    {
                        // Most versions of MySQL store timestamp as a string
                        $is_int[$i] = (in_array(
                                                //strtolower(mysqli_field_type($query->result_id, $i)),
                                                strtolower($field->type),
                                                array('tinyint', 'smallint', 'mediumint', 'int', 'bigint'), //, 'timestamp'),
                                                TRUE)
                                                ) ? TRUE : FALSE;
                        // Create a string of field names
                        $field_str .= '`'.$field->name.'`, ';
                        $i++;
                    }
                    // Trim off the end comma
                    $field_str = preg_replace( "/, $/" , "" , $field_str);
                    // Build the insert string
                    foreach ($query->result_array() as $row)
                    {
                        $val_str = '';
                        $i = 0;
                        foreach ($row as $v)
                        {
                            // Is the value NULL?
                            if ($v === NULL)
                            {
                                $val_str .= 'NULL';
                            }
                            else
                            {
                                // Escape the data if it's not an integer
                                if ($is_int[$i] == FALSE)
                                {
                                    $val_str .= $this->db->escape($v);
                                }
                                else
                                {
                                    $val_str .= $v;
                                }
                            }
                            // Append a comma
                            $val_str .= ', ';
                            $i++;
                        }
                        // Remove the comma at the end of the string
                        $val_str = preg_replace( "/, $/" , "" , $val_str);
                        // Build the INSERT string
                        $output .= 'INSERT INTO '.$table.' ('.$field_str.') VALUES ('.$val_str.');'.$newline;
                    }
                    $output .= $newline.$newline;
                }
                return $output;
            }
        }
    </pre>
</details>

<details>
    <summary>Buat array dari String</summary>
    <pre>
        /**
        * @param $string - Input string to convert to array
        * @param string $separator - Separator to separate by (default: ,)
        * @return array
        * @source http://snippets.khromov.se/convert-comma-separated-values-to-array-in-php/
        * @contoh: [2,3,4] => { 0=>2, 1=>3, 2=>4 } 
        */
        if ( !function_exists('comma_separated_to_array')) {
        function comma_separated_to_array($string, $separator = ',') {
            //Explode on comma
            $vals = explode($separator, $string);
            //Trim whitespace
            foreach($vals as $key => $val) {
                $vals[$key] = trim($val);
            }
            //Return empty array if no items found
            //http://php.net/manual/en/function.explode.php#114273
            return array_diff($vals, array(""));
            }
        }
    </pre>
</details>

<details>
    <summary>Get Data From Row DB</summary>
    <pre>
        // source: http://stackoverflow.com/a/11479038
        if ( !function_exists('get_db_row_obj')) {
            function get_db_row_obj($result)
            {
                return $result->num_rows() ? $result->row() : FALSE;
            }
        }
        // source: http://stackoverflow.com/a/11479038
        if ( !function_exists('get_db_row_arr')) {
            function get_db_row_arr($result)
            {
                return $result->num_rows() ? $result->row_array() : FALSE;
            }
        }
    </pre>
</details>

<details>
    <summary>Get Kolom Data</summary>
    <pre>
    // source: https://github.com/typesafer/codeigniter-enum-select-boxes
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
    </pre>
</details>

# TODO masih ada Banyak ... staytune!


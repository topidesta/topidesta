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
    <summary>Merubah array Ke Kolom</summary>
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
    <summary>Ubah Format HP untuk Whatsapp</summary>
    <pre>
    if ( !function_exists('convertNumber')) {
        function convertNumber( $nope, $whatsappStyle=false ) {
            $ci =& get_instance();
            $styleNomorWa = ($whatsappStyle) ? '@c.us' : '';
            $cekArrayData = is_string($nope);
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

<details>
    <summary>Convert to Img</summary>
    <pre>
    // source: https://stackoverflow.com/a/45843537
    function base30_to_jpeg($base30_string, $output_file) {
        require_once APPPATH . 'Libraries/jSignature_Tools_Base30.php';
        $data = str_replace ( 'image/jsignature;base30,', '', $base30_string );
        $converter = new jSignature_Tools_Base30 ();
        $raw = $converter->Base64ToNative ( $data );
        // Calculate dimensions
        $width = 0;
        $height = 0;
        foreach ( $raw as $line ) {
            if (max ( $line ['x'] ) > $width)
                $width = max ( $line ['x'] );
            if (max ( $line ['y'] ) > $height)
                $height = max ( $line ['y'] );
        }
        // Create an image
        $im = imagecreatetruecolor ( $width + 20, $height + 20 );
        // Save transparency for PNG
        imagesavealpha ( $im, true );
        // Fill background with transparency
        $trans_colour = imagecolorallocatealpha ( $im, 255, 255, 255, 127 );
        imagefill ( $im, 0, 0, $trans_colour );
        // Set pen thickness
        imagesetthickness ( $im, 2 );
        // Set pen color to black
        $black = imagecolorallocate ( $im, 0, 0, 0 );
        // Loop through array pairs from each signature word
        for($i = 0; $i < count ( $raw ); $i ++) {
            // Loop through each pair in a word
            for($j = 0; $j < count ( $raw [$i] ['x'] ); $j ++) {
                // Make sure we are not on the last coordinate in the array
                if (! isset ( $raw [$i] ['x'] [$j] ))
                    break;
                if (! isset ( $raw [$i] ['x'] [$j + 1] ))
                    // Draw the dot for the coordinate
                    imagesetpixel ( $im, $raw [$i] ['x'] [$j], $raw [$i] ['y'] [$j], $black );
                else
                    // Draw the line for the coordinate pair
                    imageline ( $im, $raw [$i] ['x'] [$j], $raw [$i] ['y'] [$j], $raw [$i] ['x'] [$j + 1], $raw [$i] ['y'] [$j + 1], $black );
            }
        }
        // Check if the image exists
        if (! file_exists ( dirname ( $output_file ) )) {
            mkdir(dirname($output_file));
        }
        // Create Image
        $ifp = fopen ( $output_file, "wb" );
        imagepng ( $im, $output_file );
        fclose ( $ifp );
        imagedestroy ( $im );
        copy($output_file, WRITEPATH.'uploads/ttd/'.$output_file);
        unlink( $output_file );
        return $output_file;
    }
    // Source: https://stackoverflow.com/a/50739890
    function base64_to_jpeg($base64_string, $output_file) {
        // open the output file for writing
        $ifp = fopen( $output_file, 'wb' ); 
        // split the string on commas
        // $data[ 0 ] == "data:image/png;base64"
        // $data[ 1 ] == <actual base64 string>
        $data = explode( ',', $base64_string );
        // we could add validation here with ensuring count( $data ) > 1
        fwrite( $ifp, base64_decode( $data[ 1 ] ) );
        // clean up the file resource
        fclose( $ifp ); 
        return $output_file; 
    }
    </pre>
</details>

<details>
    <summary>Debug/ Var_dump/ Print_r</summary>
    <pre>
    function dump($var, $return = FALSE)
    {
        // Joost Van Veen Style
        // $output = ob_get_clean();
        // $output = preg_replace("/\]\=\>\n(\s+)/m", "] => ", $output);
        // $output = "<pre class=\"dump\">" . _dump($var, 0) . "</pre>\n";
        $output = '<pre class=\"dump\" style="background: #FFFEEF; color: #000; border: 1px dotted #000; padding: 10px; margin: 10px 0; text-align: left;">' . _dump($var, 0) . '</pre>\n';
        if (!$return)
        {
            $trace = debug_backtrace();
            $i = isset($trace[1]['class']) && $trace[1]['class'] === __CLASS__ ? 1 : 0;
            if (isset($trace[$i]['file'], $trace[$i]['line']))
            {
                $output = substr_replace($output, '<small>' . htmlspecialchars("in file {$trace[$i]['file']} on line {$trace[$i]['line']}", ENT_NOQUOTES) . '</small>', -8, 0);
            }
        }
        if ($return)
        {
            return $output;
        }
        else
        {
            echo $output;
            return $var;
        }
    }
    function _dump(&$var, $level)
    {
        $maxDepth = 4;
        $maxLen = 250;
        $tableUtf = $tableBin = array();
        $reBinary = '#[^\x09\x0A\x0D\x20-\x7E\xA0-\x{10FFFF}]#u';
        if ($tableUtf === NULL)
        {
            foreach (range("\x00", "\xFF") as $ch)
            {
                if (ord($ch) < 32 && strpos("\r\n\t", $ch) === FALSE)
                    $tableUtf[$ch] = $tableBin[$ch] = '\\x' . str_pad(dechex(ord($ch)), 2, '0', STR_PAD_LEFT);
                elseif (ord($ch) < 127)
                $tableUtf[$ch] = $tableBin[$ch] = $ch;
                else
                {
                    $tableUtf[$ch] = $ch;
                    $tableBin[$ch] = '\\x' . dechex(ord($ch));
                }
            }
            $tableBin["\\"] = '\\\\';
            $tableBin["\r"] = '\\r';
            $tableBin["\n"] = '\\n';
            $tableBin["\t"] = '\\t';
            $tableUtf['\\x'] = $tableBin['\\x'] = '\\\\x';
        }
        if (is_bool($var))
        {
            return ($var ? 'TRUE' : 'FALSE') . "\n";
        }
        elseif ($var === NULL)
        {
            return "NULL\n";
        }
        elseif (is_int($var))
        {
            return "$var\n";
        }
        elseif (is_float($var))
        {
        $var = (string) $var;
        if (strpos($var, '.') === FALSE)
        $var .= '.0';
        return "$var\n";
        } elseif (is_string($var))
        {
        if ($maxLen && strlen($var) > $maxLen)
        {
        $s = htmlSpecialChars(substr($var, 0, $maxLen), ENT_NOQUOTES) . ' ... ';
        }
        else
        {
        $s = htmlSpecialChars($var, ENT_NOQUOTES);
        }
        $s = strtr($s, preg_match($reBinary, $s) || preg_last_error() ? $tableBin : $tableUtf);
        $len = strlen($var);
        return "\"$s\"" . ($len > 1 ? " ($len)" : "") . "\n";
        }
        elseif (is_array($var))
        {
        $s = "<span>array</span>(" . count($var) . ") ";
        $space = str_repeat($space1 = '   ', $level);
        $brackets = range(0, count($var) - 1) === array_keys($var) ? "[]" : "{}";
        static $marker;
        if ($marker === NULL)
        $marker = uniqid("\x00", TRUE);
        if (empty($var)) {}
        elseif (isset($var[$marker]))
        {
            $brackets = $var[$marker];
            $s .= "$brackets[0] *RECURSION* $brackets[1]";
        }
        elseif ($level < $maxDepth || !$maxDepth)
        {
            $s .= "<code>$brackets[0]\n";
            $var[$marker] = $brackets;
            foreach ($var as $k => &$v)
        {
        if ($k === $marker)
            continue;
            $k = is_int($k) ? $k : '"' . strtr($k, preg_match($reBinary, $k) || preg_last_error() ? $tableBin : $tableUtf) . '"';
            $s .= "$space$space1$k => " . _dump($v, $level + 1);
        }
            unset($var[$marker]);
            $s .= "$space$brackets[1]</code>";
            } else {
        $s .= "$brackets[0] ... $brackets[1]";
            }
            return $s . "\n";
        }
        elseif (is_object($var))
        {
        $arr = (array) $var;
        $s = "<span>" . get_class($var) . "</span>(" . count($arr) . ") ";
        $space = str_repeat($space1 = '   ', $level);
        static $list = array();
        if (empty($arr)) {}
        elseif (in_array($var, $list, TRUE))
        {
        $s .= "{ *RECURSION* }";
        }
        elseif ($level < $maxDepth || !$maxDepth)
        {
            $s .= "<code>{\n";
            $list[] = $var;
            foreach ($arr as $k => &$v)
            {
                $m = '';
                if ($k[0] === "\x00")
                {
                $m = $k[1] === '*' ? ' <span>protected</span>' : ' <span>private</span>';
                $k = substr($k, strrpos($k, "\x00") + 1);
                }
                $k = strtr($k, preg_match($reBinary, $k) || preg_last_error() ? $tableBin : $tableUtf);
                $s .= "$space$space1\"$k\"$m => " . _dump($v, $level + 1);
            }
            array_pop($list);
            $s .= "$space}</code>";
        }
            else
        {
            $s .= "{ ... }";
        }
        return $s . "\n";
        }
        elseif (is_resource($var))
        {
        return "<span>" . get_resource_type($var) . " resource</span>\n";
        }
        else
        {
            return "<span>unknown type</span>\n";
        }
    }
    </pre>
</details>

<details>
    <summary>PDF File Upload Base64 Sturucture</summary>
    <pre>
    public function uploadFileFromBlobString($base64string = '', $file_name = '', $folder = '')
    {
        // source: https://dev.to/rogeriotaques/uploading-pdf-files-as-base64-strings-in-php-and-saving-it-in-the-hard-disk-f7o
        $file_path = "";
        $result = 0;
        // Convert blob (base64 string) back to PDF
        if (!empty($base64string)) {
            // Detects if there is base64 encoding header in the string.
            // If so, it needs to be removed prior to saving the content to a phisical file.
            if (strpos($base64string, ',') !== false) {
                @list($encode, $base64string) = explode(',', $base64string);
            }
            $base64data = base64_decode($base64string, true);
            $file_path  = "{$folder}/{$file_name}";
            // Return the number of bytes saved, or false on failure
            $result = file_put_contents("{$file_path}", $base64data);
        }
        return $result;
    }
    </pre>
</details>

<details>
    <summary>Enkripsi dan Deskripsi</summary>
    <pre>
        #source: http://3v4l.org/CArS9
        if ( !function_exists('en_de')) {
            function en_de($act, $string) {
                $output = false;
                $encrypt_method = "AES-256-CBC"; // method enkripsinya
                // Salt key
                $secret_key = 'NAMA-SECRET-RAHASIA-KUNCI';
                $secret_iv = 'NAMA-SECRET-RAHASIA-IV';
                // hash
                $key = hash('sha256', $secret_key);
                $iv = substr(hash('sha256', $secret_iv), 0, 16); // varchar(16) it's true?
                // cek
                if($act == 'enkripsi') { $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv); $output = base64_encode($output); }
                elseif ($act == 'dekripsi') { $output = $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv); }
                // return 
                return $output;
            }
            // How to use: $text = "text enkripsi";  $rahasia = en_de('enkripsi', $text); or en_de('dekripsi', $rahasia); simple.
        }
    </pre>
</details>

# masih ada Banyak ... staytune!
---
template: "post"
title: Common Function MySQL
cover: "../images/mysql-function.png"
date: "2024-10-11T12:08:00Z"
slug: "common-function-mysql"
keywords: "mysql"
categories:
  - trick
tags:
  - database
  - server
  - mysql
---

## Bismillah

Ini beberapa trick Function mySQL yang digunakan di project yang gw kerjakan untuk mempermudah dikonsumsi oleh Frontend.

<details>
    <summary>JSON Extract</summary>
    <pre>
        CREATE DEFINER=`namaUser`@`%` FUNCTION `namaDatabase`.`json_extract_c`(
        details TEXT,
        required_field VARCHAR (255)
        ) RETURNS text CHARSET latin1
        BEGIN
        SET details = TRIM(LEADING '{' FROM TRIM(details));
        SET details = TRIM(TRAILING '}' FROM TRIM(details));
        RETURN TRIM(
            BOTH '"' FROM SUBSTRING_INDEX(
                SUBSTRING_INDEX(
                    SUBSTRING_INDEX(
                        details,
                        CONCAT(
                            '"',
                            SUBSTRING_INDEX(required_field,'$.', - 1),
                            '":'
                        ),
                        - 1
                    ),
                    ',"',
                    1
                ),
                ':',
                -1
            )
        ) ;
        END
    </pre>
</details>

<details>
    <summary>JSON Extract with Datetime</summary>
    <pre>
        CREATE DEFINER=`namaUser`@`%` FUNCTION `namaDatabase`.`json_extract_d`(details TEXT,required_field VARCHAR (255)) RETURNS text CHARSET latin1
            DETERMINISTIC
        BEGIN
          /* get key from function passed required field value */
          set @JSON_key = SUBSTRING_INDEX(required_field,'$.', -1); 
          /* get everything to the right of the 'key = <required_field>' */
          set @JSON_entry = SUBSTRING_INDEX(details,CONCAT('"', @JSON_key, '"'), -1 ); 
          /* get everything to the left of the trailing comma */
          set @JSON_entry_no_trailing_comma = SUBSTRING_INDEX(@JSON_entry, ",", 1); 
          /* get everything to the right of the leading colon after trimming trailing and leading whitespace */
          set @JSON_entry_no_leading_colon = TRIM(LEADING ':' FROM TRIM(@JSON_entry_no_trailing_comma)); 
          /* trim off the leading and trailing double quotes after trimming trailing and leading whitespace*/
          set @JSON_extracted_entry = TRIM(BOTH '"' FROM TRIM(@JSON_entry_no_leading_colon));
          RETURN @JSON_extracted_entry;
        RETURN 1;
        END
    </pre>
</details>

<details>
    <summary>Bulan Indonesia</summary>
    <pre>
      CREATE DEFINER=`namaUser`@`%` FUNCTION `namaDatabase`.`bulan_indonesia`(bulan INT) RETURNS varchar(255) CHARSET latin1
          DETERMINISTIC
      BEGIN
        DECLARE varhasil VARCHAR(255);
          SELECT 
            CASE (bulan) 
              WHEN 1 THEN 'Januari' 
              WHEN 2 THEN 'Februari' 
              WHEN 3 THEN 'Maret' 
              WHEN 4 THEN 'April' 
              WHEN 5 THEN 'Mei' 
              WHEN 6 THEN 'Juni' 
              WHEN 7 THEN 'Juli' 
              WHEN 8 THEN 'Agustus' 
              WHEN 9 THEN 'September'
              WHEN 10 THEN 'Oktober' 
              WHEN 11 THEN 'November' 
              WHEN 12 THEN 'Desember' 
            END
          INTO varhasil;
          RETURN varhasil;
          END
    </pre>
</details>

<details>
    <summary>Find Strip Tags</summary>
    <pre>
        CREATE DEFINER=`namaUser`@`%` FUNCTION `namaDatabase`.`fnStripTags`( Dirty varchar(4000) ) RETURNS varchar(4000) CHARSET latin1
            DETERMINISTIC
        BEGIN
          DECLARE iStart, iEnd, iLength int;
            WHILE Locate( '<', Dirty ) > 0 And Locate( '>', Dirty, Locate( '<', Dirty )) > 0 DO
              BEGIN
                SET iStart = Locate( '<', Dirty ), iEnd = Locate( '>', Dirty, Locate('<', Dirty ));
                SET iLength = ( iEnd - iStart) + 1;
                IF iLength > 0 THEN
                  BEGIN
                    SET Dirty = Insert( Dirty, iStart, iLength, '');
                  END;
                END IF;
              END;
            END WHILE;
            RETURN Dirty;
        END
    </pre>
</details>

<hr >

### Source
1. https://www.youtube.com/watch?v=j73M7OIkEcY
2. https://www.queryexamples.com/sql/mysql/create-a-function-calculate-power-of-a-number-in-mysql/
3. https://stackoverflow.com/a/57856940
4. https://stackoverflow.com/a/50998046
5. https://stackoverflow.com/a/9815396
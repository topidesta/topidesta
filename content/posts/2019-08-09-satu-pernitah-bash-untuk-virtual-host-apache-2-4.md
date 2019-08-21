---
template: "post"
title: Satu Perintah Bash Untuk Virtual Host 2.4 Di Linux Lite
cover: "../images/placeholder-660x400-464662.png"
date: "2019-08-09T08:00:00Z"
slug: "satu-perintah-bash-untuk-virtual-host-2-4-linux-lite"
categories: 
    - linux
    - codeigniter
    - bash
tags:
    - trick
---

#### Bismillah...

pernah share, cara membuat virtual host untuk pengembangan web terutama laravel ya masa kudu akses dari loclhost/laravel/public, soal akses url, ini dia:
<blockquote>trick-cara-jitu-setting-virtual-host-untuk-laravel-di-linuxlite-ubuntu-16-04</blockquote>

<script src="https://gist.github.com/mdestafadilah/2aff0ebefefcd79a7932393d8dec5f1d.js"></script>

kalo males copy past donwload aja ini url:
~~~bash
#! /bin/bash

# May need to run this as sudo!
# I have it in /usr/local/bin and run command 'vhost' from anywhere, using sudo.

#
#   Show Usage, Output to STDERR
#
function show_usage {
cat <<- _EOF_

Create a new vHost in Ubuntu Server
Assumes /etc/apache2/sites-available and /etc/apache2/sites-enabled setup used

    -d    DocumentRoot - i.e. /var/www/yoursite
    -h    Help - Show this menu.
    -s    ServerName - i.e. example.com or sub.example.com
    
    how: sudo vhost -d /var/www/myproject  -s myproject.local
    
_EOF_
exit 1
}


#
#   Output vHost skeleton, fill with userinput
#   To be outputted into new file
#
function create_vhost {
cat <<- _EOF_
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName $ServerName
    ServerAlias www.$ServerName

    DocumentRoot $DocumentRoot

    <Directory $DocumentRoot>
        Options -Indexes +FollowSymLinks +MultiViews
        AllowOverride All
        Order allow,deny
        Allow from all
        Require all granted
    </Directory>

    ErrorLog \${APACHE_LOG_DIR}/$ServerName-error.log

    # Possible values include: debug, info, notice, warn, error, crit,
    # alert, emerg.
    LogLevel warn

    CustomLog \${APACHE_LOG_DIR}/$ServerName-access.log combined


</VirtualHost>
_EOF_
}

#Sanity Check - are there two arguments with 2 values?
if [ $# -ne 4 ]; then
	show_usage
fi

#Parse flags
while getopts "d:s:" OPTION; do
    case $OPTION in
        h)
            show_usage
            ;;
        d)
            DocumentRoot=$OPTARG
            ;;
        s)
            ServerName=$OPTARG
            ;;
        *)
            show_usage
            ;;
    esac
done

if [ ! -d $DocumentRoot ]; then 
    mkdir -p $DocumentRoot
    #chown USER:USER $DocumentRoot #POSSIBLE IMPLEMENTATION, new flag -u ?
fi

if [ -f "$DocumentRoot/$ServerName.conf" ]; then
    echo 'vHost already exists. Aborting'
    show_usage
else
    sudo sh -c "echo \"127.0.0.0    ${ServerName}\" >> \/tmp\/hosts"
    create_vhost > /etc/apache2/sites-available/${ServerName}.conf
    cd /etc/apache2/sites-available/ && a2ensite ${ServerName}.conf #Enable site
    service apache2 reload #Optional implementation
fi
~~~

Langkahnya:
<ol>
 	<li>$ cd /tmp</li>
 	<li>wget -s https://gist.github.com/mdestafadilah/2aff0ebefefcd79a7932393d8dec5f1d</li>
 	<li>sudo mv vhosts.sh vhosts</li>
 	<li>sudo mv /tmp/hosts /usr/local/bin/vhosts</li>
 	<li>Run: vhost -h</li>
</ol>
Done. caranya ada kok di sourcenya.

Have a nice day.

source: [Sumber](https://gist.github.com/fideloper/2710970)


#### have a nice day!
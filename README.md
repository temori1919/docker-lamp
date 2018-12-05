## Description
This is a multi domain basic LAMP environment built using Docker Compose.
It consists following.

- php-fpm(php7)
- centos7
- apache2.4
- mariadb
- phpMyAdmin
- composer

## Installation

```bash
# clone this repository
https://github.com/temori1919/docker-lamp.git
cd docker-lamp
# run docker compose
docker-compose up -d
```


## How to use
Code dir is documentroot.
Put your app under the documentroot.
then you can access [your app dir].lvh.me

  
You can access either http or https.

phpMyAdmin is [localhost:8080].


## Constitution
```
docker-lamp
├── web
│   ├── logs
│   ├── Dockerfile
│   └── docker.conf  #Copy to /etc/httpd/conf.d
├── php
│   └── Dockerfile
├── db
│   ├── logs
│   ├── my.cnf  #Copy to /etc/mysql/conf.d
│   └── Dockerfile
├── code  #Mounted on /var/www/html
└── docker-compose.yml
```


## Composer
  
You can run docker container composer.
```bash
# move your app dir
cd docker-lamp/code/[yourapp]
docker-compose run --rm -v $(pwd):/app composer install
```

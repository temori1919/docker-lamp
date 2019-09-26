## Description
This is a multi domain basic LAMP environment built using Docker Compose.
It consists following.

- php-fpm(php7)
- centos7
- apache2.4
- mariadb
- phpMyAdmin
- composer
- node js (Gulp)

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
then you can access like below.

```sh
 [your app dir].[public dir].lvh.me
```

You can access either http or https.

phpMyAdmin is [localhost:8080].


## Constitution
```
docker-lamp/
├── web
│   ├── logs
│   ├── Dockerfile
│   └── docker.conf  #Copy to /etc/httpd/conf.d
├── php
│   ├── xdebug.ini   #Copy to /usr/local/etc/php/conf.d
│   └── Dockerfile
├── db
│   ├── logs
│   ├── my.cnf  #Copy to /etc/mysql/conf.d
│   └── Dockerfile
├── code  #Mounted on /var/www/html
│   ├── example
|   ├── gulpfile.js
│   └── config
|      └── default.json.example
└── docker-compose.yml
```
## PHP
The PHP extension installs only mailparse and xdebug.
The xdebug configuration file is in the following directory.
```bash
docker-lamp/php/xdebug.ini
```

If you want to install more PHP extension, 
add it to the Dockerfile.


See more infomation

[PHP official repository](https://hub.docker.com/_/php/)

## Composer

You can run docker container composer.
```bash
# move your app dir
cd docker-lamp/code/[yourapp]
docker-compose run --rm -v $(pwd):/app composer install
```


If you need specific PHP extensions, 
you can avoid them with the following options.
```bash
docker-compose run --rm -v $(pwd):/app composer install --ignore-platform-reqs --no-scripts
```


See more infomation

[Composer official repository](https://hub.docker.com/_/composer/)

## Gulp
If you want to run PHPUnit with Gulp,
make new default.json from code/config/default.json.example,

then, rewrite like below.
```js
{
	"config": {
      # 'targets' is file of monitored.
  		"targets": [
  			"./your_app/config/**/*.php",
			"./your_app/database/**/*.php"
  		],
      # 'phpunitCmd' is commond path.
  		"phpunitCmd": "./your_app/vendor/bin/phpunit",
      # 'phpunitFile' is path to phpunit.
  		"phpunitFile": "./your_app/phpunit.*"
  	}
}
```

Run gulp.
```bash
docker-compose run -v --rm --no-deps node gulp watch
```

When you stop gulp,
```bash
# find container of "gulp watch".
docker ps

# remove container.
docker kill [container_id]
```

## More information
If you are using Laravel, 
add the following ip to hosts for migration cmd.
```
127.0.0.1 db
```

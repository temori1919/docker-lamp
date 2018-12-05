FROM php:7.2-fpm-alpine
RUN mv $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini && \
	sed -i -e "s|;session.save_path = "/tmp"|session.save_path = "/tmp" |" /usr/local/etc/php/php.ini
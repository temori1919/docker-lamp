FROM node:latest
RUN npm install -g gulp@3.9.1 gulp-phpunit config && \
	npm install gulp@3.9.1 gulp-phpunit config && \
	apt-get -y update && \
	apt-get -y upgrade && \
	apt-get -y install ca-certificates apt-transport-https && \
	wget -q https://packages.sury.org/php/apt.gpg -O- | apt-key add - && \
	echo "deb https://packages.sury.org/php/ stretch main" | tee /etc/apt/sources.list.d/php.list && \
	apt-get -y update && \
	apt-get -y install php7.2 php7.2-cli php7.2-common php7.2-opcache php7.2-curl php7.2-mbstring php7.2-mysql php7.2-zip php7.2-xml

WORKDIR /var/www/html
FROM php:8.2-fpm

COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

RUN apt-get update && apt-get install -y \
git \
libzip-dev \
unzip \
&& docker-php-ext-install zip \
    pdo pdo_mysql mysqli \
&& rm -rf /var/lib/apt/lists/*

# 4 xDebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

# 5-7 Install nvm, node, npm
COPY --chmod=0777 node-env-install.sh .
RUN ./node-env-install.sh


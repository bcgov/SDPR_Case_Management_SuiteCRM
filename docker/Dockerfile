FROM php:8.2-apache AS builder

WORKDIR /

# Update and upgrade and install required packages
RUN apt update \
&& apt upgrade -y \
&& apt install nodejs npm -y \
&& npm install --global yarn sass

# Install php extensions
ADD --chmod=0755 https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN install-php-extensions intl gd mbstring mysqli pdo_mysql soap zip redis

# Enable apache rewrite and ssl module
RUN a2enmod rewrite \
&& a2enmod ssl

# Copying builded SuiteCRM files to container
COPY ./build/suitecrm /suitecrm
COPY ./build/apache2 /etc/apache2
COPY ./build/php/php.ini /usr/local/etc/php/php.ini
# COPY ./suitecrm-modified-files-builder/suitecrm/public/legacy/config_override.php /suitecrm/public/legacy/config_override.php
# COPY ./suitecrm-modified-files-builder/suitecrm/public/legacy/config.php /suitecrm/public/legacy/config.php

# Removing .env.local file
RUN rm /suitecrm/.env.local

WORKDIR /suitecrm

# Changing permissions for SuiteCRM folder
RUN adduser www-data root \
&& find . -type d -not -perm 2775 -exec chmod 2775 {} \; \
&& find . -type f -not -perm 0644 -exec chmod 0644 {} \; \
&& find . ! -user www-data -exec chown www-data:root {} \; \
&& chmod -R g+rwx /suitecrm \
&& rm /var/run/apache2/apache2.pid

# Bundling and building SuiteCRM theme modifications
RUN sass public/legacy/themes/suite8/css/Dawn/style.scss public/legacy/themes/suite8/css/Dawn/style.css --style compressed \ 
&& yarn install \
&& yarn run build:defaultExt \
&& yarn run build:common \
&& yarn run build:core \
&& yarn run build:shell

# Exposed ports
EXPOSE 8181
EXPOSE 8143

CMD ["apache2ctl", "-D", "FOREGROUND"]
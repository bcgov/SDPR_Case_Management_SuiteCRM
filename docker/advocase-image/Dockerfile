FROM php:8.2-apache AS builder

WORKDIR /

# Update and upgrade and install required packages
RUN apt update \
&& apt upgrade -y \
&& apt install nodejs npm -y \
&& npm install --global yarn sass

ADD --chmod=0755 https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN install-php-extensions intl gd mbstring mysqli pdo_mysql soap zip redis

# Copying builded SuiteCRM files to container
COPY ./suitecrm-base /suitecrm
COPY ./build-files /tmp/build-files

RUN a2enmod rewrite \
&& a2enmod ssl

# Removing .env.local file
RUN rm /suitecrm/.env.local

WORKDIR /tmp

# Running script to copy modified files to SuiteCRM
RUN chmod +x /tmp/build-files/copy_files.sh \
&& /tmp/build-files/copy_files.sh \
&& rm -rf /tmp/*

WORKDIR /suitecrm

# Bundling and building SuiteCRM theme modifications
RUN sass public/legacy/themes/suite8/css/Dawn/style.scss public/legacy/themes/suite8/css/Dawn/style.css --style compressed \ 
&& yarn install \
&& yarn run build:defaultExt \
&& yarn run build:common \
&& yarn run build:core \
&& yarn run build:shell

# Changing permissions for SuiteCRM folder
RUN adduser www-data root \
&& chmod +x ./bin/console \
&& find . -type d -not -perm 2775 -exec chmod 2775 {} \; \
&& find . -type f -not -perm 0644 -exec chmod 0644 {} \; \
&& find . ! -user www-data -exec chown www-data:root {} \; \
&& chmod -R g+rwx /suitecrm \
&& chmod -R 777 /var/run/apache2

# Restarting apache
RUN service apache2 restart

# Exposed ports
EXPOSE 8181
EXPOSE 8143
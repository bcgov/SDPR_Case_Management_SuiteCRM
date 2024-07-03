FROM php:8.2-apache

WORKDIR /

# Update and upgrade and install required packages
RUN apt update \
&& apt upgrade -y \
&& apt install wget unzip

# Install php extensions
ADD --chmod=0755 https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN install-php-extensions intl gd mbstring mysqli pdo_mysql soap zip redis

# Enable apache rewrite and ssl module
RUN a2enmod rewrite \
&& a2enmod ssl

# Downloading and unpacking SuiteCRM
RUN wget https://suitecrm.com/download/147/suite86/563895/suitecrm-8-6-0.zip \
&& unzip *.zip -d suitecrm \
&& rm *.zip

# Copying modified files to container
COPY ./build-files /tmp/build-files

# Change working directory to tmp
WORKDIR /tmp

# Running script to copy modified files to SuiteCRM
RUN chmod +x /tmp/build-files/copy_files.sh \
&& /tmp/build-files/copy_files.sh \
&& rm -rf /tmp/*

# Change working directory to SuiteCRM root folder
WORKDIR /suitecrm

# Changing permissions for SuiteCRM folder
RUN adduser www-data root \
&& chmod +x ./bin/console \
&& find . -type d -not -perm 2775 -exec chmod 2775 {} \; \
&& find . -type f -not -perm 0644 -exec chmod 0644 {} \; \
&& find . ! -user www-data -exec chown www-data:root {} \; \
&& chmod -R g+rwx /suitecrm \
&& chmod -R 777 /var/run/apache2 \
&& mkdir sslcerts \
&& openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj /emailAddress=support@gov./C=CA/ST=BC/L=Victoria/O=BCGov/OU=Ministry/CN=cbsuitecrm -keyout ./sslcerts/apache-selfsigned.key -out ./sslcerts/apache-selfsigned.crt

# Restarting apache
RUN service apache2 restart

# Exposed ports
EXPOSE 8181
EXPOSE 8143
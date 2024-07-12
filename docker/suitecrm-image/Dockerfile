FROM php:8.2-apache

WORKDIR /

# Update and upgrade and install required packages
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get clean && \
    apt-get install unzip mariadb-client -y && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Install php extensions
ADD --chmod=0755 https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN install-php-extensions intl gd mysqli pdo_mysql soap zip redis

# Copying modified files to container
COPY ./suitecrm /opt/suitecrm

# Running script to download and unzip SuiteCRM
RUN /opt/suitecrm/scripts/suitecrm/download.sh

# Exposed ports
EXPOSE 8181
EXPOSE 8143

WORKDIR /suitecrm

ENTRYPOINT [ "/opt/suitecrm/scripts/entrypoint.sh" ]
CMD ["apache2-foreground"]
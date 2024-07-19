FROM php:8.2-apache

WORKDIR /

# Update and upgrade and install required packages
# Update and upgrade fixes the following CVEs:
# - From docker vulnerability scan (checked on July 18th, 2024): https://hub.docker.com/layers/library/php/8.2-apache/images/sha256-2dd18816e6297162cf10c553fe19bd97af1493f30e2cf25a9a0836076ca0a5dc?context=explore
#  - CVE-2024-38475
#  - CVE-2024-29573
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

RUN touch /usr/local/etc/php/php.ini && \
    chgrp -R 0 /opt/suitecrm /etc/apache2 /usr/local/etc/php /var/run/apache2 /var/lib/apache2 /suitecrm && \
    chmod -R g=u /opt/suitecrm /etc/apache2 /usr/local/etc/php /var/run/apache2 /var/lib/apache2 && \
    find /suitecrm -type d -not -perm 2775 -exec chmod 2775 {} \; && \
    find /suitecrm -type f -not -perm 0666 -exec chmod 0644 {} \;

RUN chmod -R 775 /opt/suitecrm

RUN chown -R 1001:0 /opt/suitecrm /etc/apache2 /usr/local/etc/php /var/run/apache2 /suitecrm /var/lib/apache2 /suitecrm

# Exposed ports
EXPOSE 8181

WORKDIR /suitecrm

USER 1001:0

ENTRYPOINT ["/opt/suitecrm/scripts/entrypoint.sh"]
CMD ["apache2-foreground"]
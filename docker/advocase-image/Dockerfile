FROM artifacts.developer.gov.bc.ca/ad0d-suitecrm-docker/bc-gov-suitecrm:latest

USER root

# Update and upgrade and install required packages
RUN apt-get update && apt-get upgrade -y && \
    apt-get clean && \
    apt-get install nodejs npm -y && \
    npm install -g corepack sass

# Copying builded SuiteCRM files to container
COPY ./build-files /tmp/build-files
COPY ./scripts/suitecrm/copy-custom-files.sh /opt/suitecrm/scripts/suitecrm/copy-custom-files.sh

# Running script to copy modified files to SuiteCRM
RUN /opt/suitecrm/scripts/suitecrm/copy-custom-files.sh

WORKDIR /suitecrm

# Bundling and building SuiteCRM theme modifications
RUN sass public/legacy/themes/suite8/css/Dawn/style.scss public/legacy/themes/suite8/css/Dawn/style.css --style compressed
RUN yarn set version stable
RUN yarn install
RUN yarn merge-angular-json
RUN yarn build
RUN yarn build:extension defaultExt
RUN rm -r /suitecrm/.angular /suitecrm/node_modules /suitecrm/dist
RUN npm uninstall -g corepack sass
RUN apt-get remove nodejs npm -y
RUN apt-get autoremove -y

# Fixing permissions for backwards compatibility with OpenShift and Kubernetes
RUN chgrp -R 0 /suitecrm && \
    find /suitecrm -type d -not -perm 2775 -exec chmod 2775 {} \; && \
    find /suitecrm -type f -not -perm 0664 -exec chmod 0664 {} \; && \
    chown -R 1001:0 /suitecrm && \
    chmod +x /suitecrm/bin/console

USER 1001:0

# Exposed ports
EXPOSE 8181
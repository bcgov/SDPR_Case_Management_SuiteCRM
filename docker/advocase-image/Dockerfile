ARG BASE_IMAGE=artifacts.developer.gov.bc.ca/ad0d-suitecrm-docker/bc-gov-suitecrm:latest
ARG ENVIRONMENT=production

# ── Stage 1: builder ──────────────────────────────────────
FROM ${BASE_IMAGE} AS builder

ARG ENVIRONMENT 

USER root

# Update and upgrade and install required packages
RUN echo "Build environment: ${ENVIRONMENT}"
RUN apt-get update && apt-get upgrade -y && apt-get install -y curl ca-certificates
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
RUN corepack enable
RUN corepack prepare yarn@4.10.3 --activate
RUN npm install --global sass @angular/cli

# Copying builded SuiteCRM files to container
COPY ./build-files /tmp/build-files
COPY ./scripts/suitecrm/copy-custom-files.sh /opt/suitecrm/scripts/suitecrm/copy-custom-files.sh

# Running script to copy modified files to SuiteCRM
RUN /opt/suitecrm/scripts/suitecrm/copy-custom-files.sh

WORKDIR /suitecrm

# Bundling and building SuiteCRM theme modifications
RUN sass public/legacy/themes/suite8/css/Dawn/style.scss public/legacy/themes/suite8/css/Dawn/style.css --style compressed
RUN ng version
RUN yarn -v
RUN yarn install
RUN yarn merge-angular-json
RUN ls -a
# RUN yarn build

# ── Stage 2: final ────────────────────────────────────────
# FROM ${BASE_IMAGE}


# Copy only the compiled output and custom overrides — no Node.js, no node_modules, ever
# COPY --from=builder /suitecrm/public /suitecrm/public
# COPY --from=builder /suitecrm/config /suitecrm/config
# COPY --from=builder /suitecrm /suitecrm

# Fixing permissions for backwards compatibility with OpenShift and Kubernetes
RUN chgrp -R 0 /suitecrm
RUN find /suitecrm -type d -not -perm 2775 -exec chmod 2775 {} \;
RUN find /suitecrm -type f -not -perm 0664 -exec chmod 0664 {} \;
RUN chown -R 1001:0 /suitecrm
RUN chmod +x /suitecrm/bin/console

USER 1001:0

# Exposed ports
EXPOSE 8181
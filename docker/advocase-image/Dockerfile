ARG BASE_IMAGE=artifacts.developer.gov.bc.ca/ad0d-suitecrm-docker/bc-gov-suitecrm:latest
ARG ENVIRONMENT=production

# Stage 1: builder — discarded wholesale, so nothing installed here reaches the final image
FROM ${BASE_IMAGE} AS builder

ARG ENVIRONMENT

USER root

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl ca-certificates \
  && rm -rf /var/lib/apt/lists/*
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
  && apt-get install -y --no-install-recommends nodejs \
  && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare yarn@4.10.3 --activate
RUN npm install --global sass

WORKDIR /suitecrm

RUN yarn install

COPY ./build-files /tmp/build-files
COPY ./scripts/suitecrm/copy-custom-files.sh /opt/suitecrm/scripts/suitecrm/copy-custom-files.sh
RUN /opt/suitecrm/scripts/suitecrm/copy-custom-files.sh


RUN sass public/legacy/themes/suite8/css/Dawn/style.scss \
  public/legacy/themes/suite8/css/Dawn/style.css --style compressed

RUN yarn run build:core
RUN yarn run build:shell

# Stage 2: final
FROM ${BASE_IMAGE}

USER root

RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

# Build products only; node_modules, .angular and dist/ never leave the builder
COPY --from=builder --chown=1001:0 /suitecrm/public /suitecrm/public
COPY --from=builder --chown=1001:0 /suitecrm/core   /suitecrm/core
COPY --from=builder --chown=1001:0 /suitecrm/config /suitecrm/config

RUN find /suitecrm -type d -not -perm 2775 -exec chmod 2775 {} + \
  && find /suitecrm -type f -not -perm 0664 -exec chmod 0664 {} + \
  && chmod +x /suitecrm/bin/console

USER 1001:0

EXPOSE 8181
FROM php:8.2-fpm
COPY php.ini /usr/local/etc/php/

RUN apt-get update \
    && apt-get install -y \
    curl \
    build-essential \
    libssl-dev \
    git \
    libzip-dev \
    unzip \
    && docker-php-ext-install pdo pdo_mysql zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

ENV NODE_VERSION=20.12.0
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.39.7/install.sh | bash
RUN . "$HOME/.nvm/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$HOME/.nvm/nvm.sh" && nvm use ${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

WORKDIR /var/www/html
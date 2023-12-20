#!/bin/bash
apt-get install curl
# nvm install
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
# node install; pick node version suitable for you
nvm install --lts
#npm install
npm install -g npm@latest

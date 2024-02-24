#!/usr/bin/env bash

echo "> FE 배포"

cd /home/ubuntu/fridge-link-deploy

pm2 reload fride-link
pm2 --name fride-link start yarn --start
pm2 startup
pm2 save
#!/usr/bin/env bash

echo "> FE 배포"

cd /home/ubuntu/fridge-link-deploy

pm2 reload fride-link
pm2 start fride-link
pm2 startup
pm2 save
#!/usr/bin/env bash

echo "> FE 배포"

sudo fuser -k 80/tcp

cd /home/ubuntu/fridge-link-deploy

nohup yarn start &
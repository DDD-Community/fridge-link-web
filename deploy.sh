#!/usr/bin/env bash

echo "> FE 배포"

cd /home/ubuntu/fridge-link-deploy

nohup yarn start &


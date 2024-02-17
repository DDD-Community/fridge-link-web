#!/usr/bin/env bash

echo "> FE 배포"

nohup PORT=80 yarn start &


#!/bin/bash
BASE_DIR=./integration/node_modules
yarn clean
yarn build
mkdir -p $BASE_DIR
mkdir -p ${BASE_DIR}/angularx-date-picker
cp -R ./dist/* ${BASE_DIR}/angularx-date-picker
cd ./integration
yarn install
yarn build
yarn e2e
yarn e2e:server

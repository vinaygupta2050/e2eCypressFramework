#!/bin/bash
set -xe

source common.sh

echo "Starting application"

docker-compose up -d --remove-orphans spree

checkForContainerFailure spree1

waitForPort localhost 3000

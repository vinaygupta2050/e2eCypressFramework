#!/bin/bash
set -xe

waitForPort()
{
  host=$1
  port=$2
  sleep=${3:-20}
  retries=${2:-20}
  i="0"
  while ! nc $host $port < /dev/null
  do
    if [ $i -eq $(( $retries)) ]
    then
      echo "$host is not listening on port $port, giving up .."
      exit -1
    fi
    sleep 2
    i=$[$i+1]
  done
}

checkForContainerFailure()
{
  containerName=$1
  exitCode=`docker inspect -f '{{ .State.ExitCode}}' $containerName`
  if [ "$exitCode" -ne "0" ]; then
    exit 1
  fi
}

#!/bin/bash

FILENAME='lesson'

rm -rf log
for i in {5..42}
do
    if [[ -d "${FILENAME}${i}" ]]
    then
        echo "${FILENAME}${i}" >> log
        cd "${FILENAME}${i}"
        rm -rf node_modules yarn.lock
        npm install
        npm audit fix >> ../log
        rm -rf node_modules
        cd ..
    fi
done
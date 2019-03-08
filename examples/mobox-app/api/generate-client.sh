#!/bin/sh

java -jar ./swagger-codegen-cli.jar generate \
       -i swagger.json \
       -l typescript-fetch \
       -D modelPropertyNaming=original \
       -o ./src

rm -rf src/.swagger*
rm src/git_push.sh
rm src/.gitignore
rm -rf build

#!/usr/bin/env bash
docker login registry.mannseicher.com
npm run-script clean
npm run-script build

docker build -t registry.mannseicher.com/sigma-bau ./
docker push registry.mannseicher.com/sigma-bau
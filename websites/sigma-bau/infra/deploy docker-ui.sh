#!/usr/bin/env bash

 docker run -d -p 5001:80 -e URL=https://registry.mannseicher:5000 -e DELETE_IMAGES=true --restart always --name docker-ui joxit/docker-registry-ui:static
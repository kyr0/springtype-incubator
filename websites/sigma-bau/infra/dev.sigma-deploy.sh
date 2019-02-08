#!/bin/bash
NAME=dev-sigma-bau
IMAGE=registry.mannseicher.com/sigma-bau

docker pull $IMAGE
docker kill $NAME
docker system prune -f
docker run  \
	-p 0.0.0.0:8081:80 \
	--name $NAME \
	--restart always \
	$IMAGE
docker logs -f $NAME

#!/usr/bin/env bash

sudo certbot --nginx -d mad2man.com
sudo certbot --nginx -d mad2man.de
sudo certbot --nginx -d digi-hood.com
sudo certbot --nginx -d digi-hood.de
sudo certbot --nginx -d mannseicher.com
sudo certbot --nginx -d dui.mannseicher.com
sudo certbot --nginx -d registry.mannseicher.com

# sigma bau
sudo certbot --nginx -d sigma-bau.de
sudo certbot --nginx -d dev.sigma-bau.de


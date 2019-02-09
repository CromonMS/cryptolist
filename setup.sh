#!/bin/bash

echo 'Installing Rubygems'
bundle install

echo 'Installing Server'
cd server && bundle install

echo 'Installing Client'
cd client && yarn install

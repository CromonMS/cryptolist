#!/bin/bash

echo 'Installing Rubygems'
bundle install

echo 'Installing Server'
npm install

echo 'Installing Client'
cd client && npm install


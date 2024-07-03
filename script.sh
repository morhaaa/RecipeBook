#!/bin/bash

# Start the server
cd server
npm install
npm run start &

# Start the client
cd ../client
npm install
npm run dev &

#### TO KILL PROCESS SERVER ####
#  sudo lsof -i :8080
#  sudo kill -9  <PID> 

#### TO KILL PROCESS CLIENT ####
#  sudo lsof -i :5173
#  sudo kill -9  <PID> 
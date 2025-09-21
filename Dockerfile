FROM node:24-bullseye-slim

RUN apt-get update && \
    apt-get install -y git curl --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app 

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
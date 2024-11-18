#!/bin/bash

CONTAINER_NAME="api-container"

echo "Starting Docker Compose with --build..."
docker-compose up --build -d

echo "Waiting for the container to start..."
until docker ps | grep -q "$CONTAINER_NAME"; do
  echo "Waiting for $CONTAINER_NAME to start..."
  sleep 2
done

echo "$CONTAINER_NAME is running. Accessing the container..."

docker exec -it "$CONTAINER_NAME" sh -c "npm test"

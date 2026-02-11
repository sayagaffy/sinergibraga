#!/bin/bash
set -e

echo "Starting Environment Verification..."

# Check Postgres
if service postgresql status > /dev/null; then
    echo "Postgres Service is active."
else
    echo "Postgres Service is NOT active. Starting..."
    sudo service postgresql start
fi

# Run Tests
echo "Running Tests..."
npm test

# Run Build
echo "Running Build..."
npm run build

echo "Environment Verification Complete. Snapshot Triggered."

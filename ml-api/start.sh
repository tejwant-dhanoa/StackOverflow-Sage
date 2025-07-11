#!/bin/bash

echo "Starting Gunicorn server..."

# Use the full path to the gunicorn installed in the venv
python3 -m gunicorn app:app --bind 0.0.0.0:$PORT
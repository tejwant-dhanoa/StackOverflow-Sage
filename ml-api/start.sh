#!/bin/bash

echo "Starting Gunicorn server..."

# Activate the virtual environment
source .venv/bin/activate

# Start Gunicorn
python -m gunicorn app:app --bind 0.0.0.0:$PORT

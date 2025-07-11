#!/bin/bash

echo "Starting Gunicorn server..."

# Use the full path to the gunicorn installed in the venv
python -m gunicorn app:app --bind 0.0.0.0:$PORT
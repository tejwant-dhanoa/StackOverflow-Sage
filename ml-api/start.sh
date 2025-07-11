#!/bin/bash
echo "Starting Gunicorn server..."
python -m gunicorn app:app --bind 0.0.0.0:$PORT

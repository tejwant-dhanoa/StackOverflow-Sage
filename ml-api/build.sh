#!/usr/bin/env bash

set -o errexit

# Create a virtual environment
python -m venv .venv

# Activate it
source .venv/bin/activate

# Upgrade pip and install requirements
pip install --upgrade pip
pip install -r requirements.txt

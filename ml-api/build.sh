#!/usr/bin/env bash

# Fail on first error
set -o errexit

# Install Python 3.11 using pyenv
PYTHON_VERSION=3.11.9

echo "Installing Python $PYTHON_VERSION with pyenv..."
curl https://pyenv.run | bash

export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
pyenv install -s $PYTHON_VERSION
pyenv global $PYTHON_VERSION

# Install pip and project requirements
pip install --upgrade pip
pip install -r requirements.txt

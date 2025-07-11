#!/bin/bash

# Load pyenv
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# Set correct Python version
pyenv shell 3.11.9

# Run your app with gunicorn
gunicorn app:app --bind 0.0.0.0:$PORT

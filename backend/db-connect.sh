#!/usr/bin/env bash
script_dir="$(dirname "$0")"
source "${script_dir}/.env"
mongosh "$DB_CONN_STRING"

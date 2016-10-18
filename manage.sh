#!/usr/bin/env bash

function create() {
  local bucket_name=$1
  local bucket_uri="s3://${bucket_name}"
  aws s3 mb $bucket_uri
  aws s3 website \
    --index-document index.html \
    --error-document error.html \
    $bucket_uri
  local region=$(aws configure get region)
  echo "Website endpoint is: http://${1}.s3-website-${region}.amazonaws.com"
}

function deploy() {
  local bucket_uri="s3://$1"
  aws s3 sync public/ $bucket_uri --acl public-read
}

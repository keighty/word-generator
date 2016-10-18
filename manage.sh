#!/usr/bin/env bash
directory=`pwd`

function create_bucket() {
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

function deploy_s3() {
  aws s3 sync $directory/public/ s3://keighty.wordplay.com --acl public-read
}

action=${1:-"help"}

cd $root_dir

case "$action" in
  deploy)
    deploy_s3
    ;;
  create)
    create_bucket ${2}
    ;;
esac

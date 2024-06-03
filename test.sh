#!/bin/bash

fn_name="spa-routing"
fn_code="fileb://functions/spa-routing.js"

found=$(aws cloudfront list-functions | jq '.FunctionList.Items[] | select(.Name=="'$fn_name'") | length')
echo $found

if [ -n "$found" ]; then
  echo 'update'
  etag_current=$(aws cloudfront describe-function --name $fn_name | jq -r '.ETag')
  echo "etag_current: $etag_current"
  aws cloudfront update-function \
    --name $fn_name \
    --function-config Comment="update spa-routing",Runtime="cloudfront-js-2.0" \
    --function-code $fn_code \
    --if-match $etag_current
  echo 'update end'

else
  echo 'create'
  aws cloudfront create-function \
    --name $fn_name \
    --function-config Comment="create spa-routing",Runtime="cloudfront-js-2.0" \
    --function-code $fn_code
  echo 'create end'
fi

echo 'publish'
etag_publish=$(aws cloudfront describe-function --name $fn_name | jq -r '.ETag')
echo "etag_publish: $etag_publish"
aws cloudfront publish-function \
  --name $fn_name \
  --if-match $etag_publish
echo 'publish end'

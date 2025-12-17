#!/bin/bash
S3_BUCKET="www.artkuchnie.pl"
CLOUDFRONT_ID="E39ARICWT6KFAR"

cd /d/artkuchnie.pl
npm run build
aws s3 sync dist/ s3://${S3_BUCKET} --delete
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_ID} --paths "/*"
echo "✅ Deployed to https://www.artkuchnie.pl"
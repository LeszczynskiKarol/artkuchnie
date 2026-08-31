#!/bin/bash
# Deploy artkuchnie.pl: build -> S3 -> inwalidacja CloudFront.
#
# Odzwierciedla .github/workflows/deploy.yml krok w krok, bo od wyczerpania
# limitu minut GitHub Actions to jest JEDYNA sciezka na produkcje (uruchamiana
# recznie albo przez publisher). Dwie rzeczy, o ktore latwo sie potknac:
#  1) sa DWIE dystrybucje CloudFront — www i apex. Inwalidacja tylko www
#     zostawia artkuchnie.pl (bez www) ze stara wersja w cache.
#  2) dwuprzebiegowy sync: assety z hashem w nazwie leca na rok jako immutable,
#     ale HTML/sitemap/robots musza byc must-revalidate, inaczej przegladarka
#     trzyma stary HTML mimo inwalidacji.
set -euo pipefail

S3_BUCKET="www.artkuchnie.pl"
CF_DIST_WWW="E39ARICWT6KFAR"
CF_DIST_APEX="E2T0RCEEQURZB"
export AWS_REGION="eu-north-1"
export AWS_DEFAULT_REGION="eu-north-1"

cd "$(dirname "$0")"

npm run build

echo "→ S3: assety (immutable, 1 rok)"
aws s3 sync dist/ "s3://${S3_BUCKET}/" --delete --size-only \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" --exclude "robots.txt" --exclude "sitemap*.xml"

echo "→ S3: HTML i pliki SEO (must-revalidate)"
aws s3 sync dist/ "s3://${S3_BUCKET}/" --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "*" --include "*.html" --include "robots.txt" --include "sitemap*.xml"

echo "→ CloudFront: inwalidacja www + apex"
aws cloudfront create-invalidation --distribution-id "$CF_DIST_WWW" \
  --paths "/*" --query "Invalidation.Status" --output text
aws cloudfront create-invalidation --distribution-id "$CF_DIST_APEX" \
  --paths "/*" --query "Invalidation.Status" --output text

echo "✅ Deployed to https://www.artkuchnie.pl"

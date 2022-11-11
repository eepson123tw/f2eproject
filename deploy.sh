#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git checkout -b master
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:eepson123tw.github.io/f2eproject.git main:gh-pages

cd -

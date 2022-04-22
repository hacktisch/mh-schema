read -p "Commit description: " desc
npm run timestamp && \
git add --all && \
git commit -m "$desc" && \
git push origin master && \

version=$(git log --pretty=format:'%h' -n 1)
echo "Installing version: $version to mh-api"
cd ../mh-api && npm i "https://github.com/hacktisch/mh-schema.git#$version"
echo "Installing version: $version to mh-cms"
cd ../mh-cms && npm i "https://github.com/hacktisch/mh-schema.git#$version"

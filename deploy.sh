rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:EvaLLLLL/gulu-website.git &&
git push -f -u origin master &&
cd -
echo https://evalllll.github.io/gulu-website/index.html#/
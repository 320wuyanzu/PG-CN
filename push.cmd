chcp 65001

:: 先push生成文档
call npm run dbuild
cd ./docs/.vuepress/dist
git init
git add *
git commit -m%time%
git push -f git@github.com:320wuyanzu/PG-CN.git master:gh-pages

:: 再push源文档
cd ../../../
git add *
git commit -m"目录做完了"
git push -f git@github.com:320wuyanzu/PG-CN.git master:master
env=$1
echo "正在运行的环境：$env";
cp src/providers/Constants-${env}.ts src/providers/Constants.ts


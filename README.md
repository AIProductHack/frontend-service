Фронтенд-часть решения кейса [НЛМК](https://www.nlmk.com/ru/) на хакатоне [AI Product Hack](https://aiproducthack.com/)

Запуск проекта

1. Без докера
```shell
npm install && npm start
```

2. С докером
```shell
docker image build -t <image-name>:<tag>

docker run -p "3000:3000" -d <image-name>:<tag>
```
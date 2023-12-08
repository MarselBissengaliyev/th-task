ENV для фронта:
```REACT_APP_API=http://localhost:4444```

ENV для бэка:
```MONGOOSE_CONNECT_URL="mongodb+srv://marselbisengaliev1:123@cluster0.aflvikp.mongodb.net/?retryWrites=true&w=majority"
PORT=4444
CLIENT_URL=http://localhost:3000
```

сначала запускаем бэк:
cd/api
npm start

потом фронт:
в корне проекта пишем - npm start
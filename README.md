# React website Earthquake Streaming data
<p align="center">
  <h3 align="center">Real-time Earthquake Streaming</h3>

  <p align="center">
    Bigdata Ecosystem project 2022
    <br>
  </p>
</p>


## Table of contents

- [Quick start](#quick-start)
- [What's included](#whats-included)
- [Creators](#creators)


## Quick start

It's generate mock data of earthquake and display it in a react website in realtime with socket.io. 

You need to start 2 terminals, one in the backend folder and the other one in the frontend.

```
cd earthquake-streaming-react
```

First terminal:
```
cd frontend-web
yarn install && yarn start
```

Second terminal:
```
cd backend-express
yarn install && yarn add nodemon && nodemon server.js
```


## What's included


```text
earthquake-streaming-react/
└── backend-express/
    ├── earhquake_streaming.py
    └── server.js
└── frontend-web/
        ├── public/
        └── src/
            ├── index.js
            └── App.js
```



## Creators

**Alexis Capon**

**Cyril Perez**

**Arthur Auffray**

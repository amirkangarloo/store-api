# Store API  (NodeJs - Express - MongoDB)
A simple REST API for store. This is API products includes show list of the products, sorting, filtering, search for product name and custom pagination.

## Usage

**first step**

```javascript
git clone https://github.com/amirkangarloo/store-api.git
```

then

```javascript
cd store-api
```

**second step**
```javascript
npm install
```

**third step**

Make **.env** file. like a below:


    # === App ===
    APP_URL=http://localhost:3000
    APP_PORT=3000
    APP_SECRET=
    
    # === MongoDB ===
    MONGO_URL=mongodb://localhost:27017
    MONGO_PORT=27017
    MONGO_USERNAME=
    MONGO_PASSWORD=
    MONGO_DB_NAME=store-api
    
    # === Redis ===
    REDIS_URL=
    REDIS_PORT=
    REDIS_USERNAME=
    REDIS_PASSWORD=
    

**fourth step**
```javascript
npm start
```

## Route API

| **HTTP Method**  | **Route**  | **Result**  |
| :------------: | :------------: | :------------: |
|  GET |  api/v1/products |  Get a list of products |

## Create data

In this project, for testing router can use test data. **create-data folder** include 2 files.

### **1. products.json**

This file has 23 product data.

### **2. import-data-into-database.js**

**WARNING:** If using this file first **delete** all documents in mongo and after that, Create products data. (products.json).

------------

**usage:** run command below

    node .\create-data\import-data-into-database.js


## Options

## License
[MIT](https://choosealicense.com/licenses/mit/)

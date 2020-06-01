# with mongoDB

```zsh
docker-compose up --build
```


## insert new documents
```zsh
docker exec -it mongodb_mongo_1 bash
mongo --port 27017  --authenticationDatabase "admin" -u "root" -p

use examples

db.inventory.insertMany([
   { item: "journal", qty: 25, status: "A", size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
   { item: "notebook", qty: 50, status: "A", size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
   { item: "paper", qty: 10, status: "D", size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
   { item: "planner", qty: 0, status: "D", size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
   { item: "postcard", qty: 45, status: "A", size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
]);

```

## References

- [github](https://github.com/mongodb/node-mongodb-native)
- [quick Start(mongoDB)](https://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/)
- [Getting Stared](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
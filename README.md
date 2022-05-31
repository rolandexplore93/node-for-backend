# UPSKILLING | Learning Nodejs, Express, MongoDB
Nodejs, written with C++ wrapped google v8 engine that it uses to convert javascript to machine code (machine codes are complex to write or read just like binary) for the computer/server to understand and interpret

### Practice learning order w.r.t to file creation
1. [test](/test.js)
2. [global](/global.js)
3. [modules](/modules.js)
4. [people](/people.js)
5. [files](/files.js)
6. [streams & buffer](/streams.js)
7. [clients|servers|HTTP](/servernode.js)
    - nodemon: Automatically restarts the server whenever there is a change made in the server
    - [lodash](https://lodash.com/): An utility library. I practiced randon number and once() function
    - npm and dependencies
8. [express server using ejs template engine](/app.js)
9. [moogoose models](/models)

> # DATABASE | MongoDB
*  > 31/05/2022

MongoDB is a NoSQL database that uses collections and documents to store records of data.

Installation: MongoDB can be installed
* `locally using MongoDB compass and MongoDBShell`
* `on cloud database (MongoDB ATLAS) which is already hosted`

### MongoDB Compass
MongoDB compass server was download from MongoDB website and installed on my local machine. Inside the server, you can create a database collection and documents to it. You can also perform various operations like create, read, update and delete.

### MongoDB Shell commands
* show database: `show dbs`
* switch to a db: use database-name  (e.g `use bookstore`)
* clear screen: `cls`
* current database: `db`
* show all collections: `show collections`
* start the shell: `mongosh`
* exit the shell: `exit`

### Using MongoDB Shell to perform CRUD operations and interact with the database
* insertOne({})
* insertMany([{}, {}, {}])
* find()
* filter: find({property: value})
* find({}, {second arg})   | The second argument will only display the exact properties we specified in the collections populated
* findOne({})
* count()
* sort({})
* limit()

### Nested documents
* E.g for 1 document ===> db.books.insertOne({title: "RollyJS", author: "Roland"}, rating: 20, review: [{name: "Fash", comment: "Great Book"}, {name: "FashyNET", comment: "Great Documentation"}])
* E.g for multiple documents ===> db.books.insertMany([ { title: "RollyJS", author: "Roland", rating: 20, review: [{name: "Fash", comment: "Great Book"},   { title: "RollyJS", author: "Roland", rating: 20, review: [{name: "Fash", comment: "Great Book"}])

### Operators & Complex Queries
Operators in mongoDB are denoted by $.
* `$gt -> greater than`
* `$gte -> greater than or equal to`
* `$lt -> less than`
* `$lte -> less than or equal to`

> e.g db.books.find({rating: {$gt: 7}})

* `'$or' operator` is used to find document whereby a field value is either one value or another value. \
db.books.find({$or: [ {rating: 7}, {rating: 8}, {rating: 9}, {pages: 400} ] })

* `'$in' operator` means that a particular field will be within a certain range of value. This is similar to `$in operator` but it's easier and shorter to write than `$in`
db.books.find({rating: {$in: [7, 8, 9]} })

* `'$nin' not-in-operator` means that a particular field will not be within a certain range of value specified. This is opposite to `'$in' operator`
db.books.find({rating: {$nin: [7, 8, 9]} })

### Querying Array using *filtering approach
* Without []: e.g; db.books.find({genres: "magic"})  will return genres property items that include "magic"
* With []: e.g; db.books.find({genres: ["magic"]})  will return genres property items that only include "magic". [] means EXACT match here

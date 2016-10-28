# Node Service skeleton
`\*** Temp file -  Should be replaced before prodacaion ***\`

Please explain the porpuse of the app in this file, all API methods and q&a if needed.
I will add example api in the bottom that works in real life so everyone will understand this project guidelines.

You can add more docs by adding `.md` files in docs folder and link to them by [link](/docs/madeby).
The name and settings are taken from git and `package.json` file.

### Things that you might want to know before start with your project:
* [How To Install Guide (local)](/docs/install)
* [How to use tasks (local)](/docs/tasks)
* [ES6 Guide lines](/docs/tasks)
* [Who wrote `HOW + Mehow`](/docs/tasks)?

## Example API

You can open an [postman](https://www.google.co.il/search?q=postman) collection file from [here](/docs/assets/postman_collection) to test this example.

### books#get
Retrive all books from db with basic data.

Response :
```
[
  {
    "id": 1,
    "name": "Harry Poter"
  },
  {
    "id": 2,
    "name": "Lord of the rings"
  },
  {
    "id": 3,
    "name": "Sherlock Holmes"
  },
  {
    "id": 4,
    "name": "Into the wild"
  }
]
```

### books#post
Add a book with data from request.

Response :
```
{
  "addedBookID": 4
}
```

### books/:id#get
Get data from specific book.

Response :
```
{
  "id": 2,
  "name": "Lord of the rings",
  "published": 1993,
  "timeSincePublished": "23 years ago"
}
```
### books/:id#delete
Get data from specific book.

Response :
```
{
  "deleted": true
}
```
### books/:id#put
Update a book with id = :id.

Response :
```
{
  "updated": 1
}
```

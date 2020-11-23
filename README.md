# social_network_backend

## Description
This backend application is made for social-media apps. In this backend application we can find users, create users, add and delete friends, add and remove thoughts, and add and remove reactions.

## Used in the Project
* Mongoose
* Express
* Moment (date and time formatting)
* MongoDB

## Running the app
npm start => This runs the backend app (if you are connected, a console.log will explain "Connected to social_network_backend on localhost:3001")
* You will have to test these routes with a REST client

## Route Testing
This is with JSON
* Get (GET) all users => http://localhost:3001/api/users - body takes nothing (none)
* Get (GET) one unique user => http://localhost:3001/api/users/{userId} - body takes nothing (none)
* Create (POST) a user => http://localhost:3001/api/users - the body takes "username" and "email"
* Update (PUT) a user => http://localhost:3001/api/user/{userId} - the body takes "username" and "email"
* Delete (DELETE) a user => http://localhost:3001/api/user/{userId} - body takes nothing (none)
* Get (GET) all thoughts => http://localhost:3001/api/thoughts - body takes nothing (none)
* Get (GET) one unique thought => http://localhost:3001/api/thoughts/{thoughtId} - body takes nothing (none)
* Create (POST) a thought => http://localhost:3001/api/thoughts/{userId} - body takes ?username" and "thoughtText"
* Update (PUT) a thought => http://localhost:3001/api/thoughts/{userId}/{thoughtId} - body takes "username" and "thoughtText"
* Delete (DELETE) a thought => http://localhost:3001/api/thoughts/{userId}/{thoughtId} - body takes nothing (none)
* Add (POST) a friend => http://localhost:3001/api/users/{userId}/friends - body takes "userId"
* Delete (DELETE) a friend => http://localhost:3001/api/users/{userId}/friends/{friendId} - body takes nothing (none)
* Add (PUT) a reaction => http://localhost:3001/api/thoughts/{thoughtId}/reactions/ - body takes "reactionBody" and "username"
* Delete (DELETE) a reaction => http://localhost:3001/api/thoughts/{thoughtId}/reactions/{reactionId} - body takes nothing (none)

## Walkthrough
https://drive.google.com/file/d/1Unp4TxD4YFbyitJZLl3-aT6Ndrhi_x3u/preview

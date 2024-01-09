# Social-Network-API-Project

## Your Task

The goal of this project is to establish a Mongoose-based backend for a social network API. This API highlights Mongoose's capabilities while users can freely express their thoughts and share reactions. The API exhibits functionality by handling GET, POST, PUT, and DELETE routes for users, thoughts, reactions, and friend actions.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./assets/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./assets/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./assets/18-nosql-homework-demo-03.gif)

In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./assets/18-nosql-homework-demo-04.gif)

In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

## Installation

The server.js contributes the following:

-Defines the use of the routes relative to the app and the setup of the port. Express is also used for the app

The connection.js file contributes the following:

-Establishes a mongoose connection to the database. 

The package.json/package-lock.js contributes the following:

-Details on the dependencies for the project (express and mongoose).

The seeds files contribute the following:

-The data for the relavant categories, i.e. email for user and thoughtText for thoughts.

The format file contributed the following:

-Format for the timestamp.

The models files contribute the following:

-The addition of parameters for the data in each of the respective js files (user, thought, reaction). See the below as an example from the user.js file.

    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Your email was invalid.Please enter a valid email address",]
    },

The routes files contribute the following:

-Applies the direction for the functions from the controller files (get, put, post, delete).

## Usage

To jumpstart the application and setting up the code, install the seeds by running "npm run seed" in the command-line. After that, to start the application, you need to enter npm start in the commandline and continue to Insomnia.

Please click the following link to view a step by step tutorial of the social network API in Insomnia.

[Demo](https://drive.google.com/file/d/1QNEb58oa16sX5FcyP2N1X6ay49AhPkVo/view)

## Credits

Scott McAnally (Calendy Tutor) assisted with resolving issues with the thought data (added .json file for the thoughts) and also provided assistance with the routes.

Erik Oerke helped with resolving issues with the thought/reaction routes.

## License

MIT License

Copyright (c) 2023 aubreymlj96

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
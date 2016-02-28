#TastyBook

This is a simple Angular webapp created for the purposes of learning Angular

## Note

You can now see a live demo of this webapp at 

[nlilley.io:8001](nlilley.io:8001)

##Build:

You require webpack to build this application.  webpack-dev-server is also convenient for hosting the app.
If it is not already installed, run:

> npm i -g webpack

> npm i -g webpack-dev-server

Next you need to install all of the projects dependencies.  This can be done with:

> npm i

With all of the dependencies resolved, you can build the application with:

> webpack

To simply serve the application run:

> webpack-dev-server

You should now be able to view the app at [localhost:8080](localhost:8080)

To serve the website in full, the server.js script can be used.  Firstly build the project with webpack, 
then move the built app.js into the assets folder where it can be served.  This can be done with

> mv build/bundle.js assets/bundle.js

Then Run

> node server.js

to open up an express server on port 8001.
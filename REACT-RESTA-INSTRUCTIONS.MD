Install Node and npm
create React Project 
Install JSON fake API server 
test both are working fine 

project points
Make A project structure
Routing 
Login and registration
API calls
Listing of restaurants
Make New restaurant
Update restaurant details
Delete restaurant
Search restaurants
style and design 
etc...

advance 
Google Map
redux 
upload photos 
gallery
login with facebook, google 

link and commands 
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs 
https://create-react-app.dev/docs/get...

npx create-react-app restaurant-app
cd restaurants-app
npm start

https://github.com/typicode/json-server



JSON Server
-----------
Get a full fake REST API with zero coding in less than 30 seconds (seriously)

link -https://github.com/typicode/json-server




# run your db server to see your API
$ json-server --watch db.json


########################### Routing ##################

#install React-router-dom package for the Routing
$ npm install react-router-dom

Install Routing Package 
Make Component
        RestauranstList
        RestaurantDetail
        RestaurantSearch
        RestaurantMake
        RestaurantUpdate
Make Link For All Component
Make Route For All Component


#################################### Adding bootstrap in React ############################
official docs for react-bootstrap

Install bootstrap and react-bootstrap
Add Navbar
Add Table Listing

#install bootstrap
$ npm install bootstrap

#install react bootstrap
$ npm install react-bootstrap

# install these two dependency together
$ npm install bootstrap react-bootstrap


################################# ADD Font Awsome Icon in React ##############################
official npm website
https://www.npmjs.com/package/@fortawesome/react-fontawesome

for FontAwesomeIcon for Search new icon
https://fontawesome.com/v4.7.0/icons/


#install package
$ npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

usage Now, a simple React component might look like this:

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 
const element = <FontAwesomeIcon icon={faCoffee} />
 
ReactDOM.render(element, document.body)


################### delete api ########
Delete Restaurant 
Test API with postman
Write Code for delete API
Test List


#################### search api ###################
Search API 
Test search API on postman
Make a text box for search
Call search API
Show Searched data in the list
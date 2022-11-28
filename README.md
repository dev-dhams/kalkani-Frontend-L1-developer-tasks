

# Frontend (Reactjs & jikan API) practical task 
> Task : Write a frontend application to search and list anime characters.

Technologies: React / VueJS / Angular
* Create a search page to show search results with fields shown in the wireframe below.
○ Show Max 15 results on the page
○ Show a warning message, if there is no result returned for a given
search query
○ By default, the page shows the top 15 characters if the user did not
search anything

### Note : API is not working. 
Try to open this link. it showing error. I hope this issue resolve whenever this project is opened for technical analysis.
`https://api.jikan.moe/v4/characters?page=0&limit=15&q=saki&order_by=favorites&sort=desc`

## Getting started / Installing

Please following steps to install dependencies and run this project.

```shell
git clone https://github.com/dev-dhams/kalkani-frontend-L1-developer-tasks.git
cd kalkani-frontend-L1-developer-tasks 
npm start
```

The first command will copy project from github, second command going to install dependencies (react.js) and third one going to start the development application.

## Developing

### Built With
* React : A JavaScript library for building user interfaces


### Prerequisites
Node.js properly configured.

## Api Reference
The APIs used in this project is `https://docs.api.jikan.moe/#operation/getCharactersSearch`.

Examples:
To get the top 15 characters the API request would look like below
Method: GET
      URL: `https://api.jikan.moe/v4/characters?page=0&limit=15&q=&order_by=favorit
      es&sort=desc`
To search “saki” the API request looks like below
Method: GET
URL: `https://api.jikan.moe/v4/characters?page=0&limit=15&q=saki&order_by=fav
orites&sort=desc`

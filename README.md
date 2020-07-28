# React Google Map App

An example of Google Map App using React. An api server uses python flask.

## Application Installation Instructions:

    git clone git@github.com:kay1759/google_map_app.git
    cd google_map_app
	npm install
	** set your "Google Key" in frontend/src/js/constants/Config.js
    npm run build
    python3 db_setup.py

## Operating Instructions:

### Usage

    python3 manage.py

    connet with browzer
    http://<server name>:5000/


### Valid URL
    /index.html
    /ja/index.html

* / or /ja/ is invalid.
* index.html and /ja/index.html are static file.

## Tests
```
npm run test
```

## Discussion
* 'npm run build' command creates javascripts '0.js and 1.js'  on production mode.
  if you would like to check javascript file on development mode, you can use
  ```
  $(npm bin)/webpack --config frontend/config/webpack.app.config.js
  ```
  This command create flask/static/assets/app.js.
  And then update flaskr/static/index.html and flaskr/static/ja/index.html.

## Licence
[MIT]

## Author
[Katsuyoshi Yabe](https://github.com/kay1759)

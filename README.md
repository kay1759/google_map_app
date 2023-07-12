# React Google Map App

An example of Google Map App using React. An api server uses python flask.

## Application Installation Instructions:

    python -m venv env
    cd env
    source bin/activate
  
    git clone git@github.com:kay1759/google_map_app.git
    cd google_map_app
    pip install -r requirements.txt
	npm install
	** set your "Google Key" in frontend/src/js/constants/Config.ts
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

## Licence
[MIT]

## Author
[Katsuyoshi Yabe](https://github.com/kay1759)

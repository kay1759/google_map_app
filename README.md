# React Google Map App

An example of Google Map App using React. An api server uses python FastAPI.

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
    
    docker-compose up -d
    python3 db_setup.py

## Operating Instructions:

### Usage

    uvicorn main:app (--reload)

    connet with browzer
    http://<server name>:8000/ or
    http://<server name>:8000/ja/


### Valid URL
    /
    /ja/

* /index.html and /ja/index.html are valid.
* /index.html and /ja/index.html are static file.

## Tests
```
pytest
npm run test
```
## Discussion
* The command that stop database-docker is as below:
  ```
  docker-compose down
  ```
* The docker container maps the mysql port to locathost:3307

* if you would like to change database setting, you have tp update
  ```
  ./docker-compose.yml
  ./database.toml
  ```
  
## Licence
[MIT]

## Author
[Katsuyoshi Yabe](https://github.com/kay1759)

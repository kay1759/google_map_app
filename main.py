from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

import db

app = FastAPI()

@app.get('/api/{locale}/locations')
def api(locale: str):
    if locale != 'ja':
        locale = 'en'
    conn = db.get_connection()
    cur = conn.cursor()
    loc_types = get_types(cur, locale)
    locations = get_locations(cur, locale)
    return {"categories": list(loc_types), "resources": list(locations)}


def get_types(cur, locale):
    cur.execute("select l.id, ld.title from loc_types l inner join loc_type_descriptions ld on ld.loc_type_id = l.id inner join languages lang on lang.id = ld.lang_id where lang.locale = %s;", (locale,))
    return get_result(cur.fetchall())


def get_locations(cur, locale):
    cur.execute("select l.id, l.loc_type_id, l.latitude, l.longitude, l.image, ld.title, ld.address from locations l inner join location_descriptions ld on ld.location_id = l.id inner join languages lang on lang.id = ld.lang_id where lang.locale = %s;", (locale,))
    return get_result(cur.fetchall())


def get_result(result):
    mapped_result = map(dict, result)
    return (list(mapped_result))

@app.on_event("shutdown")
def shutdonw_session():
    db.close_connection()


app.mount("/", StaticFiles(directory="static", html=True), name="static")


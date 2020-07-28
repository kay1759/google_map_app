from flask import Flask,jsonify

from .db import get_db, close_connection

app = Flask(__name__, static_url_path='')

@app.route('/api/<locale>/locations')
def api(locale):
    if locale != 'ja':
        locale = 'en'
    con = get_db()
    cur = con.cursor()
    loc_types = get_types(cur, locale)
    locations = get_locations(cur, locale)
    data = {"categories": list(loc_types), "resources": list(locations)}

    return jsonify(data)



def get_types(cur, locale):
    cur.execute("select l.id, ld.title from loc_types l inner join loc_type_descriptions ld on ld.loc_type_id = l.id inner join languages lang on lang.id = ld.lang_id where lang.locale = ?;", (locale,))
    return get_result(cur.fetchall())

def get_locations(cur, locale):
    cur.execute("select l.id, l.loc_type_id, l.latitude, l.longitude, l.image, ld.title, ld.address from locations l inner join location_descriptions ld on ld.location_id = l.id inner join languages lang on lang.id = ld.lang_id where lang.locale = ?;", (locale,))
    return get_result(cur.fetchall())

def get_result(result):
    mapped_result = map(dict, result)
    return (list(mapped_result))

@app.teardown_appcontext
def teardown(exception):
    close_connection(exception)

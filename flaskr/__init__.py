from flask import Flask
from flask_graphql import GraphQLView
from graphene import ObjectType, String, Int, Float, ID, Field, List, Schema

from .db import get_db, close_connection

class Location(ObjectType):
    id = Int()
    title = String()
    image = String()
    address = String()
    loc_type_id = Int()
    latitude = Float()
    longitude = Float()

    def resolve_id(parent, info):
        return parent.id

    def resolve_title(parent, info):
        return parent.title

    def resolve_image(parent, info):
        return parent.image

    def resolve_address(parent, info):
        return parent.address

    def resolve_loc_type_id(parent, info):
        return parent.loc_type_id

    def resolve_latitude(parent, info):
        return parent.latitude

    def resolve_longitude(parent, info):
        return parent.longitude



class Category(ObjectType):
    id = Int()
    title = String()

    def resolve_id(parent, info):
        return parent.id

    def resolve_title(parent, info):
        return parent.title



class Query(ObjectType):
    categories = Field(List(Category), locale=String(default_value="en"))
    resources = Field(List(Location), locale=String(default_value="en"))

    def resolve_categories(self, info, locale):
        con = get_db()
        cur = con.cursor()
        return map(
            lambda elem: Category(id=elem["id"], title=elem["title"]),
            get_types(cur, locale))

    def resolve_resources(self, info, locale):
        con = get_db()
        cur = con.cursor()
        return map(
            lambda elem: Location(id=elem["id"], title=elem["title"], image=elem["image"], address=elem["address"], loc_type_id=elem["loc_type_id"], latitude=elem["latitude"], longitude=elem["longitude"]),
            get_locations(cur, locale))
 


app = Flask(__name__, static_url_path='')

schema = Schema(query=Query)
app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True)
)



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

import os
import pymysql
from flask import g
import toml

with open(os.path.join(os.path.dirname(__file__), 'database.toml')) as f:
    obj = toml.load(f)

def get_connection():
    conn = getattr(g, '_database', None)
    if conn is None:
        cursorClass = pymysql.cursors.DictCursor

        conn = pymysql.connect(host=obj['host'],
                               port=obj['port'],
                               user=obj['user'],
                               password=obj['password'],
                               db=obj['db'],
                               charset=obj['charset'],
                               cursorclass=cursorClass)

    return conn

def close_connection(exception):
    conn = getattr(g, '_database', None)
    if conn is not None:
        conn.close()

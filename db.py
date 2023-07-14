import os
import pymysql
import toml

with open(os.path.join(os.path.dirname(__file__), 'database.toml')) as f:
    obj = toml.load(f)

def get_connection():

    cursorClass = pymysql.cursors.DictCursor

    conn = pymysql.connect(host=obj['host'],
                           port=obj['port'],
                           user=obj['user'],
                           password=obj['password'],
                           db=obj['db'],
                           charset=obj['charset'],
                           cursorclass=cursorClass)

    return conn

def close_connection():
    conn.close()

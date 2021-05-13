from flask import Flask, jsonify, make_response
import MySQLdb
import os
from flask_cors import CORS
#current_dir = os.system('pwd')
#print(current_dir)
#list_of_files = os.system('ls -l')
#print(list_of_files)
app = Flask(__name__)
cors = CORS(app)
@app.route('/')
def index():
    return "<h1>Hello you!</h1>"
ufile = open('user.txt','r')
#user = ufile.read()[:-1] # pēdējais simbols ir rindas beigas pazīme, mums to nevajag
user = ufile.read() # root'\n'
'''
for i in range(len(user)):
    print(user[i],ord(user[i]))
'''    
user = user[:-1]
'''
for i in range(len(user)):
    print(user[i],ord(user[i]))
'''
ufile.close()
pfile = open('password.txt','r')
password = pfile.read()[:-1] # pēdējais simbols ir rindas beigas pazīme, mums to nevajag
pfile.close()
@app.route("/select")
def select():
    db = MySQLdb.connect(host = "localhost",
                         user = user,
                         password = password,
                         db = "world3",
                         port = 3307)
    cur = db.cursor()
    query = "SELECT * FROM world3.artists WHERE artistid=1"
    cur.execute(query)
    json_data = cur.fetchall()
    print("json_data (select):")
    print(json_data)
    return jsonify(data=json_data)
@app.route("/get_invoices", methods=['GET'])
def get_invoices():
    db = MySQLdb.connect(host = "localhost",
                         user = "root",
                         password = "48100184",
                         db = "world3",
                         port = 3307)
    cur = db.cursor()
    proc = "get_invoices_by_empl_no_arg"
    cur.callproc(proc,[])
    columns=[x[0] for x in cur.description]
    data = cur.fetchall()
    json_data = []
    for result in data:
        json_data.append(dict(zip(columns,result)))
    print("json_data (proc):")
    print(json_data)
    #response = {'message': 'OK', 'data': json_data}
    response = {'data': json_data}
    #data_set = {"position": 1, "employee": 'Name Surname', "customer": 'Customer Name', "invoiceNr": '1', "invoiceDate": "2020-01-01 15:40:45", "invoiceTotal": 1.99}
    #json_dump = json.dumps(data_set)
    #print(json_dump)    
    return make_response(jsonify(response), 200)
    #return data_set
if __name__ == '__main__':
    app.run(port=5000)

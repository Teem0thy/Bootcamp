from flask import Flask, jsonify
import MySQLdb
app = Flask(__name__)
@app.route('/')
def index():
    return "<h1>Hello you!</h1>"
ufile = open('./user.txt','r')
user = ufile.read()[:-1] # pēdējais simbols ir rindas beigas pazīme, mums to nevajag
ufile.close()
pfile = open('./password.txt','r')
password = pfile.read()[:-1] # pēdējais simbols ir rindas beigas pazīme, mums to nevajag
pfile.close()
@app.route("/temp")
def temp():
    db = MySQLdb.connect(host = "172.30.128.1",
                         user = user,
                         password = password,
                         db = "world3",
                         port = 3307)
    cur = db.cursor()
    query = "SELECT * FROM world3.artists WHERE artistid=1"
    cur.execute(query)
    return jsonify(data=cur.fetchall())
if __name__ == '__main__':
    app.run(port=5000)

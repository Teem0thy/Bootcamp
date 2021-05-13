from flask import Flask, send_from_directory
# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='/')
# web-adrese, kura tiks izmantota statiskās lapas izsaukšanai
# piemēram, 127.0.0.1:5000/static/index.html
@app.route('/static/<path:path>')
def send_js(path):
    # vieta lokāla failu sistēmā - ./ - nozīmē, ka index.html fails tiks meklēts turpat, kur ir app.py fails
    return send_from_directory('./', path)
if __name__ == "__main__":
    # noklusētais ports ir 5000
    app.run()
    # app.run(port=5000)

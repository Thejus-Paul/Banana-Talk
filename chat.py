# Importing flask and socketio
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

# Initializing Flask and assigning it to 'app'
app = Flask(__name__)

# Configuring the Flask server with a secret key for encryption
app.config[ 'SECRET_KEY' ] = 'adsflkjqwruweirzxcvzxcv'

# Binding the Flask server with SocketIO
socketio = SocketIO( app )

# Routing to the server's root address
@app.route( '/' )
def hello():
    # Rendering the 'init.html'
    return render_template( 'init.html' )

# Routing to the '/chat'
@app.route('/chat')
def chat():
    # Rendering the 'banana_talk.html'
    return render_template('banana_talk.html')

# Starting the bi-directional communication.
@socketio.on( 'my event' )
def handle_my_custom_event( json ):# 'json' is an object consisting of username and message
    socketio.emit( 'my response', json) # Sending the username and message to all clients

if __name__ == '__main__':
  socketio.run(app, host='0.0.0.0',port="80",debug=True) # Starting the Flask app by using SocketIO

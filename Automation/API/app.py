from flask import Flask, jsonify, request, Response, json
from settings import *
from DeviceModel import *
import jwt
import datetime
from UserModel import User
from functools import wraps

devices = Device.get_all_devices()

app.config['SECRET_KEY'] = 'meow'


@app.route('/login', methods= ['POST'])
def get_token():
    request_data = request.get_json()
    username = str(request_data['username'])
    password = str(request_data['password'])

    match = User.username_password_match(username,password)
    if match:
        expiration_date = datetime.datetime.utcnow() + datetime.timedelta(seconds=100)
        token = jwt.encode({'exp':expiration_date}, app.config['SECRET_KEY'],algorithm='HS256')
        return token
    else:
        return Response('',401, mimetype='application/json')
def token_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = request.args.get('token')
        try:
            jwt.decode(token, app.config['SECRET_KEY'])
            return f(*args,**kwargs)
        except:
            return jsonify({'error':'Need a valid token to view this page'}),401
    return wrapper

# GET /devices
@app.route('/devices')
def get_device():
    token = request.args.get('token')
    try:
        jwt.decode(token, app.config['SECRET_KEY'])
    except:
        return jsonify({'error': 'Need a valid token to view this page'}), 401
    return jsonify({'devices': devices})

# GET /device/<identifier>
@app.route('/devices/<int:identifier>')
def get_device_by_identifier(identifier):
    return_value = Device.get_device(identifier)
    return jsonify(return_value)


# POST /devices
@app.route('/devices', methods=['POST'])
@token_required
def add_device():
    request_data = request.get_json()
    if request_data is not None:
        Device.add_device(request_data['identifier'],request_data['name'],request_data['device_type'])
        response =  Response("",201, mimetype='application/json')
        response.headers['Location'] = "/devices/" + str(request_data['identifier'])
        return response
    else:
        invalidDeviceObjectErrorMsg = {
            "error":"Invalid device object passed in request",
            "helpString": "Data passed in similar to this {'identifier': 'deviceId''name': 'device_name,'device_type': 'device_type'}"
        }
        response = Response(json.dumps(invalidDeviceObjectErrorMsg), status=400,mimetype='application/json')
        return response
#PUT
@app.route('/devices/<int:identifier>', methods=['PUT'])
@token_required
def replace_device(identifier):
   request_data = request.get_json()
   Device.replace_device(request_data['identifier'],request_data['name'],request_data['device_type'])
   response = Response("", status=204)
   return response
#PATCH
@app.route('/devices/<int:identifier>', methods=['PATCH'])
@token_required
def update_device(identifier):
    request_data = request.get_json()
    updated_device = {}
    if ("name" in request_data):
       Device.update_name(identifier,request_data['name'])
    if ("device_type" in request_data):
        Device.update_device_type(identifier,request_data['device_type'])
    for device in devices:
        if device["identifier"] == identifier:
            device.update(updated_device)
    response = Response("",status=204)
    response.headers['Location'] = "/devices/" + str(identifier)
    return response

#DELETE
@app.route('/devices/<int:identifier>', methods=['DELETE'])
@token_required
def delete_device(identifier):
    if (Device.delete_device(identifier)):
        response = Response("",status=204)
        return response
    invalidDeviceObjectErrorMsg = {
        "error": "Device with the identifier number provided was not found, so therefore unable to delete"
    }
    response = Response("invalidDeviceObjectErrorMsg",status=404, mimetype='application/json')
    return response


if __name__ == "__main__":
    app.run(port=5000, debug=True)

"""Main module."""
from flask import Flask, jsonify, request, Response, json
import datetime

app = Flask(__name__)
devices = [
        {
            "device_type": "switch",
            "identifier": 1,
             "name": "Light_Bulb",
            "state": "OFF",
            "LED1": 11
        },
        {

             "device_type": "tv",
             "identifier": 2,
             "name": "Living Room TV",
            "state": "OFF",
            "LED1": 13
        },
        {
            "device_type": "fan",
            "identifier": 3,
            "name": "Fan",
            "state": "OFF",
            "LED1": 15
        },
        {
            "device_type": "motor",
            "identifier": 4,
            "name": "Door",
            "state": "OFF",
            "LED1": 16
        },
        {
            "device_type": "charger",
            "identifier": 5,
            "name": "Mobile phone",
            "state": "OFF",
            "LED5": 18
        }]

# GET /devices
@app.route('/devices')
def get_device():
    return jsonify({'devices': devices})

# GET /device/<identifier>
@app.route('/devices/<int:identifier>')
def get_device_by_identifier(identifier):
    return_value = {}
    for device in devices:
        if device["identifier"] == identifier:
            return_value = {
                "name": device["name"],
                "device_type": device["device_type"],
                "state": device["state"]
            }
    return jsonify(return_value)

# POST /devices
@app.route('/devices', methods=['POST'])
def add_device():
    request_data = request.get_json()
    if request_data is not None:
        new_device = {
            "device_type": request_data["device_type"],
            "identifier": request_data["identifier"],
            "name": request_data["name"],
            "state": request_data["state"]
        }
        devices.insert(0,new_device)
        response = Response("", 201, mimetype='application/json')
        response.headers["Location"] = "/devices/" + str(new_device["identifier"])
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
def replace_device(identifier):
   request_data = request.get_json()
   new_device = {
       "device_type": request_data["device_type"],
       "identifier": identifier,
       "name": request_data["name"],
       "state": request_data["state"]
   }
   i = 0
   for device in devices:
       currentIdentifier = device["identifier"]
       if currentIdentifier== identifier:
           devices[i] = new_device
       i +=1
   response = Response("", status=204)
   return response
#PATCH
@app.route('/devices/<int:identifier>', methods=['PATCH'])

def update_device(identifier):
    request_data = request.get_json()
    updated_device = {}
    if ("name" in request_data):
       updated_device["name"] = request_data["name"]
    if ("device_type" in request_data):
        updated_device["device_type"] = request_data["device_type"]
    if ("state" in request_data):
       updated_device["state"] = request_data["state"]

    for device in devices:
        if device["identifier"] == identifier:
            device.update(updated_device)
    response = Response("",status=204)
    response.headers['Location'] = "/devices/" + str(identifier)
    return response

#DELETE
@app.route('/devices/<int:identifier>', methods=['DELETE'])
def delete_device(identifier):
    i = 0;
    for device in devices:
        if device["identifier"] == identifier:
            devices.pop(i)
            response = Response("", status=204)
            return response
        i+=1
    invalidDeviceObjectErrorMsg = {
        "error": "Device with the identifier number provided was not found, so therefore unable to delete"
    }
    response = Response(json.dumps(invalidDeviceObjectErrorMsg,status=404, mimetype='application/json'))
    return response


if __name__ == "__main__":
  #app.run(port=5000, debug=True)
  app.run()

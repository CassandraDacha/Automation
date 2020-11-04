from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import json
from settings import app

db = SQLAlchemy(app)

class Device(db.Model):
    __tablename__ = 'devices'
    id = db.Column(db.Integer, primary_key=True)
    identifier = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    device_type = db.Column(db.String(80), nullable=False)

    def json(self):
        return {'identifier': self.identifier, 'name': self.name, 'device_type': self.device_type, }

    def add_device(_identifier,_name, _devicetype):
        new_device = Device(identifier = _identifier, name = _name, device_type=_devicetype)
        db.session.add(new_device)
        db.session.commit()

    def get_all_devices():
        return [Device.json(device) for device in Device.query.all()]
    def get_device(_identifier):
        return Device.json(Device.query.filter_by(identifier=_identifier).first())
    def delete_device(_identifier):
        is_successful = Device.query.filter_by(identifier=_identifier).delete()
        db.session.commit()
        return bool(is_successful)
    def update_name(_identifier,_name):
        device_to_update = Device.query.filter_by(identifier=_identifier).first()
        device_to_update.name = _name
        db.session.commit()
    def update_device_type(_identifier,_type):
        device_to_update = Device.query.filter_by(identifier=_identifier).first()
        device_to_update.device_type = _type
        db.session.commit()
    def replace_device(_identifier,_name, _devicetype):
        device_to_replace = Device.query.filter_by(identifier=_identifier).first()
        device_to_replace.identifier = _identifier
        device_to_replace.name = _name
        device_to_replace.device_type = _devicetype
        db.session.commit()
    def __repr__(self):
        device_object = {
            'identifier': self.identifier,
            'name': self.name,
            'device_type': self.device_type
        }
        return json.dumps(device_object)
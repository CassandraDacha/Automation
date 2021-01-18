==============================
Patient Ward Automation System
==============================


.. image:: https://img.shields.io/pypi/v/Patient-Ward-Automation.svg
        :target: https://pypi.org/project/Patient-Ward-Automation/

.. image:: https://img.shields.io/travis/CassandraDacha/Automation.svg
        :target: https://travis-ci.com/CassandraDacha/Automation

.. image:: https://readthedocs.org/projects/wardautomation/badge/?version=main
        :target: https://wardautomation.readthedocs.io/en/latest/?badge=main
        :alt: Documentation Status
.. image:: https://pyup.io/repos/github/CassandraDacha/Automation/shield.svg
     :target: https://pyup.io/account/repos/github/CassandraDacha/Automation/
     :alt: Updates
     
* Github repo: Automation
* Free software: MIT license
* Documentation: https://wardautomation.readthedocs.io.

Patient ward automation system. This automation system  will allow patients to be able to control
the temperature, lighting, TV settings and the door of the ward they are in using a user-friendly
web application on their phone.
The hardware used is a combination of Raspberry Pi ,a Relay Module, a light bulb, A motor to represent the door and a fan.


Features
--------

The following features were used for this project. I have attached the links to the specific devices

* RPI Zero       https://za.rs-online.com/web/p/raspberry-pi/1812039/
* Relay Module   https://za.rs-online.com/web/p/power-motor-robotics-development-tools/1845099//
* Light Bulb     Any light bulb
* Axial fan      https://za.rs-online.com/web/p/axial-fans/6688808/
* DC motor       https://za.rs-online.com/web/p/dc-motors/2389715/

Installation
-------------
Read the installation process from the Documentation link above.

.. image:: https://github.com/CassandraDacha/Automation/blob/master/Demo_image.png
    :width: 400px
    :align: center
    :height: 400px
    :alt: Circuit Diagram
Once you have all these devices, you can connect them using the diagram above.
After completing the connections, you need to download the requirements.txt file from  the Automation folder and install the requirements using the following command.

   $ pip3 install -r requirements.txt

Note that this command is dependant on the python version. The Python version used in this project was Python 3.8.5.

For the react web app download all the files to your computer
In your terminal, cd into the directory you just created and install all dependencies by using the following command

   $ npm install

To look at the code, just open up the project in your favorite code editor!

Testing
--------
To test the API use the following command.

   $ python3 Automation.py
   
To test the react web app use the following command.

   $ npm start
   
  Video Demonstration
  https://uctcloud-my.sharepoint.com/:v:/g/personal/dchcas001_myuct_ac_za/EaVf2bP-15pAoqdlKCTMAiUBHkA-79wKIWnbDDZdl7czfg?e=DtdMRl


Credits
-------

This package was created with Cookiecutter_ and the `audreyr/cookiecutter-pypackage`_ project template.

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _`audreyr/cookiecutter-pypackage`: https://github.com/audreyr/cookiecutter-pypackage

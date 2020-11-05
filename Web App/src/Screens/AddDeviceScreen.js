import React from 'react'
import Header from '../Components/Common/Header'
import DeviceForm from '../Components/DeviceForm'

export default function AddDeviceScreen() {
    return(
        <div>

            <Header headerTitle="Add Device" backIcon to="/HomeScreen"/>
        <DeviceForm />
        </div>
    )
}
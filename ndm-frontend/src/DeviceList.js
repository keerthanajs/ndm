import React, { useEffect, useState } from "react";
import axios from "axios";

const DeviceList = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/devices")
            .then(response => setDevices(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Device List</h1>
            <ul>
                {devices.map(device => (
                    <li key={device.deviceId}>
                        {device.deviceName} ({device.deviceName}) - {device.deviceType} - {device.model} - {device.serialNumber} - {device.location} - {device.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeviceList;

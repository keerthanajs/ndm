import React, { useState } from "react";
import axios from "axios";

const DeviceForm = ({ fetchDevices }) => {
    const [device, setDevice] = useState({
        deviceId: "123",
        deviceName: "",
        deviceType: "",
        model:"",
        serialnumber: "",
        location: "",
        status: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDevice({ ...device, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/devices", device)
            .then(() => fetchDevices())
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="deviceName" placeholder="Device Name" value={device.deviceName} onChange={handleChange} />
            <input type="text" name="deviceType" placeholder="Device Type" value={device.deviceType} onChange={handleChange} />
            <input type="text" name="model" placeholder="Model" value={device.model} onChange={handleChange} />
            <input type="text" name="serialNumber" placeholder="Serial Number" value={device.serialnumber} onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" value={device.location} onChange={handleChange} />
            <input type="text" name="status" placeholder="Status" value={device.status} onChange={handleChange} />
            <button type="submit">Add Device</button>
        </form>
    );
};

export default DeviceForm;

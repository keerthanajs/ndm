import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeviceList = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/devices")
            .then(response => setDevices(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2 className="mb-4">Device List</h2>
            <table className="table table-striped table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Model</th>
                        <th>SerialNumber</th>
                        <th>location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device =>(
                        <tr key={device.deviceId}>
                            <td>{device.deviceId}</td>
                            <td>{device.deviceName}</td>
                            <td>{device.deviceType}</td>
                            <td>{device.model}</td>
                            <td>{device.serialNumber}</td>
                            <td>{device.location}</td>
                            <td>{device.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <ul className="list-group">
                {devices.map(device => (
                    <li key={device.deviceId} className="list-group-item">
                        <strong>{device.deviceName}</strong> ({device.deviceType}) - Model: {device.model} - Serial Number: {device.serialNumber} - Location: {device.location} - {device.status}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default DeviceList;

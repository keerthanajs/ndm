import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeviceList = () => {
    const [devices, setDevices] = useState([]);
    const [newDevice, setNewDevice] = useState({
        deviceName: "",
        deviceType: "",
        model:"",
        serialNumber: "",
        location: "",
        status: ""
    });

    // Track if a device is being edited
    const [editingDevice, setEditingDevice] = useState(null); 

    useEffect(() => {
        fetchDevices();
    }, []);

    const fetchDevices = () => {
        axios.get("http://localhost:8080/api/devices")
            .then(response => setDevices(response.data))
            .catch(error => console.log(error));
    };

    const handleChange = (e) => {
        setNewDevice({ ...newDevice, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingDevice) {
            axios.put(`http://localhost:8080/api/devices/${editingDevice}`, newDevice)
                .then(() => {
                    fetchDevices();
                    handleCancelEdit();
                })
                .catch(error => console.error('Error updating device:', error));
        } else {
            axios.post("http://localhost:8080/api/devices", newDevice)
                .then(response => setDevices([...devices, response.data]))
                .catch(error => console.log(error));
        }
    };

    const handleEdit = (device) => {
        setEditingDevice(device.deviceId);
        setNewDevice({
            deviceName: device.deviceName,
            deviceType: device.deviceType,
            model: device.model,
            serialNumber: device.serialNumber,
            location: device.location,
            status: device.status
        });
    };

    const handleCancelEdit = () => {
        setEditingDevice(null);
        setNewDevice({
            deviceName: '',
            deviceType: '',
            model: '',
            serialNumber: '',
            location: '',
            status: ''
        });
    };

    const handleDelete = (deviceId) => {
        axios.delete(`http://localhost:8080/api/devices/${deviceId}`)
            .then(() => setDevices(devices.filter(device => device.deviceId !== deviceId)))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h2 className="mb-4">{editingDevice ? "Edit Device" : "Add Device"}</h2>

            {/* Add/Edit device form */}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <input type="text" name="deviceName" placeholder="Device Name" value={newDevice.deviceName} onChange={handleChange} className="form-control" required/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3">
                            <input type="text" name="deviceType" placeholder="Device Type" value={newDevice.deviceType} onChange={handleChange} className="form-control" required/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3">
                            <input type="text" name="model" placeholder="Model" value={newDevice.model} onChange={handleChange} className="form-control" required/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3">
                            <input type="text" name="serialNumber" placeholder="Serial Number" value={newDevice.serialNumber} onChange={handleChange} className="form-control" required/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3">
                            <input type="text" name="location" placeholder="Location" value={newDevice.location} onChange={handleChange} className="form-control" required/>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3">
                            <input type="text" name="status" placeholder="Status" value={newDevice.status} onChange={handleChange} className="form-control" required/>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    {editingDevice ? "Update Device" : "Add Device"}
                </button>
                {editingDevice && (
                    <button type="button" className="btn btn-secondary ml-2" onClick={handleCancelEdit}>
                        Cancel
                    </button>
                )}
            </form>

            {/* Device list table */}
            <table className="table table-striped table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Model</th>
                        <th>Serial Number</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device => (
                        <tr key={device.deviceId}>
                            <td>{device.deviceId}</td>
                            <td>{device.deviceName}</td>
                            <td>{device.deviceType}</td>
                            <td>{device.model}</td>
                            <td>{device.serialNumber}</td>
                            <td>{device.location}</td>
                            <td>{device.status}</td>
                            <td>
                                <button className="btn btn-primary btn-sm mr-2" onClick={() => handleEdit(device)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(device.deviceId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeviceList;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DeviceList = () => {
//     const [devices, setDevices] = useState([]);
//     const [newDevice, setNewDevice] = useState({
//         deviceName: "",
//         deviceType: "",
//         model:"",
//         serialnumber: "",
//         location: "",
//         status: ""
//     });

//     // to track if the device is bring edited
//     const [editingDevice, setEditingDevice] = useState(null); 

//     useEffect(() => {
//         axios.get("http://localhost:8080/api/devices")
//             .then(response => setDevices(response.data))
//             .catch(error => console.log(error));
//     }, []);

//     const handleChange = (e) => {
//         setNewDevice({ ...newDevice, [e.target.name]: e.target.value});
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:8080/api/devices", newDevice)
//             .then(response => setDevices([...devices, response.data]))
//             .catch(error => console.log(error));
//     };

//     const handleEdit = (device) => {
//         setEditingDevice(device.deviceId);
//         setUpdateDevice({
//             deviceName: device.deviceName,
//             deviceType: device.deviceType,
//             model: device.model,
//             serialNumber: device.serialNumber,
//             location: device.location,
//             status: device.status
//         });
//     };

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         if(editingDevice !== null){
//             axios.put(`http://localhost:8080/api/devices/${editingDevice}`, newDevice)
//                 .then(() => {
//                     fetchDevices();
//                     setEditingDevice(null);
//                     setNewDevice({
//                         deviceName: '',
//                         deviceType: '',
//                         model: '',
//                         serialNumber: '',
//                         location: '',
//                         status: ''
//                     });
//                 })
//                 .catch(error => console.error('Error updating device:', error));
//         }
//     }

//     const handleCancelEdit = () => {
//         setEditingDevice(null);
//         setNewDevice({
//             deviceName: '',
//             deviceType: '',
//             model: '',
//             serialNumber: '',
//             location: '',
//             status: ''
//         });
//     };

//     const handleDelete = (deviceId) => {
//         axios.delete(`http://localhost:8080/api/devices/${deviceId}`)
//             .then(() => setDevices(devices.filter(device => device.deviceId !== deviceId)))
//             .catch(error => console.log(error));
//     };

//     return (
//         <div>
//             <h2 className="mb-4">Device List</h2>
//             {/* Add device */}
//             <form onSubmit={handleSubmit} className="mb-4">
//                 <div className="form-group">
//                     <input type="text" name="deviceName" placeholder="Device Name" value={newDevice.deviceName} onChange={handleChange} className="form-control mb-2" required />
//                     <input type="text" name="deviceType" placeholder="Device Type" value={newDevice.deviceType} onChange={handleChange} className="form-control mb-2" required />
//                     <input type="text" name="model" placeholder="Model" value={newDevice.model} onChange={handleChange} className="form-control mb-2" required />
//                     <input type="text" name="serialNumber" placeholder="Serial Number" value={newDevice.serialNumber} onChange={handleChange} className="form-control mb-2" required />
//                     <input type="text" name="location" placeholder="Location" value={newDevice.location} onChange={handleChange} className="form-control mb-2" required />
//                     <input type="text" name="status" placeholder="Status" value={newDevice.status} onChange={handleChange} className="form-control mb-2" required />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Add Device</button>
//             </form>

//             {/* device table */}
//             <table className="table table-striped table-bordered table-hover table-sm">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Type</th>
//                         <th>Model</th>
//                         <th>SerialNumber</th>
//                         <th>location</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {devices.map(device =>(
//                         <tr key={device.deviceId}>
//                             <td>{device.deviceId}</td>
//                             <td>{device.deviceName}</td>
//                             <td>{device.deviceType}</td>
//                             <td>{device.model}</td>
//                             <td>{device.serialNumber}</td>
//                             <td>{device.location}</td>
//                             <td>{device.status}</td>
//                             <td>
//                                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(device.deviceId)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* <ul className="list-group">
//                 {devices.map(device => (
//                     <li key={device.deviceId} className="list-group-item">
//                         <strong>{device.deviceName}</strong> ({device.deviceType}) - Model: {device.model} - Serial Number: {device.serialNumber} - Location: {device.location} - {device.status}
//                     </li>
//                 ))}
//             </ul> */}
//         </div>
//     );
// };

// export default DeviceList;

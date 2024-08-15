import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useEffect, useState} from 'react';
import DeviceList from './DeviceList';
import axios from "axios";

const App = () => {
    const [devices, setDevices] = useState([]);

    const fetchDevices = () => {
        axios.get("http://localhost:8080/api/devices")
            .then(response => setDevices(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchDevices();
    }, []);

    return (
        <div>
            <h1>Device Management System</h1>
            <DeviceList devices={devices} />
        </div>
    );
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

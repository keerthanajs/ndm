package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Device;
import com.example.demo.service.DeviceService;

@RestController
@RequestMapping("/api/devices")
public class DeviceController {
    @Autowired
    private DeviceService deviceService;

    @GetMapping
    public List<Device> getAllDevices() {
        return deviceService.getAllDevices();
    }

    @GetMapping("/{id}")
    public Device getDeviceById(@PathVariable Long id) {
        return deviceService.getDeviceById(id);
    }

    @PostMapping
    public Device createDevice(@RequestBody Device device) {
        return deviceService.saveDevice(device);
    }

    @DeleteMapping("/{id}")
    public void deleteDevice(@PathVariable Long id) {
        deviceService.deleteDevice(id);
    }
}
//@RestController
//@RequestMapping("/api/devices")
//public class DeviceController {
//	@Autowired
//	private DeviceService deviceService;
//	
//	@PostMapping
//	public ResponseEntity<Device> saveDevice(@RequestBody Device device){
//		return new ResponseEntity<Device>(deviceService.saveDevice(device), HttpStatus.CREATED);
//	}
//	
//	@GetMapping
//    public List<Device> getAllEmployee(){
//        return deviceService.getAllDevice();
//    }
//
//    //Get by Id Rest Api
//    @GetMapping("{id}")
//    // localhost:8080/api/employees/1
//    public ResponseEntity<Device> getEmployeeById(@PathVariable("id") long id){
//        return new ResponseEntity<Device>(deviceService.getDeviceById(id),HttpStatus.OK);
//    }
//
//    //Update Rest Api
//    @PutMapping("{id}")
//    public ResponseEntity<Device> updateEmployee(@PathVariable("id") long id,
//                                                   @RequestBody Device device){
//        return new ResponseEntity<Device>(deviceService.updateDevice(device,id),HttpStatus.OK);
//    }
//
//    //Delete Rest Api
//    @DeleteMapping("{id}")
//    public ResponseEntity<String> deleteEmployee(@PathVariable("id") long id){
//        //delete employee from db
//        deviceService.deleteDevice(id);
//        return new ResponseEntity<String>("device deleted Successfully.",HttpStatus.OK);
//    }
//}

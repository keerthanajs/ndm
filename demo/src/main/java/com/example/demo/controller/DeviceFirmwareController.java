package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.DeviceFirmware;
import com.example.demo.service.DeviceFirmwareService;

@RestController
@RequestMapping("/api/firmware")
public class DeviceFirmwareController {
    @Autowired
    private DeviceFirmwareService deviceFirmwareService;

    @GetMapping("/device/{deviceId}")
    public List<DeviceFirmware> getCurrentFirmwareByDeviceId(@PathVariable String deviceId) {
        return deviceFirmwareService.getCurrentFirmwareByDeviceId(deviceId);
    }

    @PostMapping
    public DeviceFirmware createFirmware(@RequestBody DeviceFirmware firmware) {
        return deviceFirmwareService.saveFirmware(firmware);
    }
}

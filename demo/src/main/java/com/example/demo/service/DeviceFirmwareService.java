package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.DeviceFirmware;
import com.example.demo.repository.DeviceFirmwareRepository;

@Service
public class DeviceFirmwareService {
    @Autowired
    private DeviceFirmwareRepository deviceFirmwareRepository;

    public List<DeviceFirmware> getCurrentFirmwareByDeviceId(String deviceId) {
        return deviceFirmwareRepository.findByDeviceIdAndIsCurrentTrue(deviceId);
    }

    public DeviceFirmware saveFirmware(DeviceFirmware firmware) {
        return deviceFirmwareRepository.save(firmware);
    }
}
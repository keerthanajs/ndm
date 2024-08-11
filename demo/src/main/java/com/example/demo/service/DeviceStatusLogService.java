package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.DeviceStatusLog;
import com.example.demo.repository.DeviceStatusLogRepository;

@Service
public class DeviceStatusLogService {
    @Autowired
    private DeviceStatusLogRepository deviceStatusLogRepository;

    public List<DeviceStatusLog> getStatusLogsByDeviceId(String deviceId) {
        return deviceStatusLogRepository.findByDeviceId(deviceId);
    }

    public DeviceStatusLog saveStatusLog(DeviceStatusLog log) {
        return deviceStatusLogRepository.save(log);
    }
}
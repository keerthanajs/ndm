package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.DeviceFirmware;

@Repository
public interface DeviceFirmwareRepository extends JpaRepository<DeviceFirmware, Long> {
	@Query("select df from DeviceFirmware df where df.device.deviceId = :deviceId")
    List<DeviceFirmware> findByDeviceIdAndIsCurrentTrue(@Param("deviceId") String deviceId);
}
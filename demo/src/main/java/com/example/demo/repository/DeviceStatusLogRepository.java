package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.DeviceStatusLog;

@Repository
public interface DeviceStatusLogRepository extends JpaRepository<DeviceStatusLog, Long> {
	@Query("select ds from DeviceStatusLog ds where ds.device.deviceId = :deviceId")
    List<DeviceStatusLog> findByDeviceId(String deviceId);
	
	@Query("select ds from DeviceStatusLog ds where ds.device.deviceId = :deviceId and ds.logTimestamp = "
			+ "(select max(logTimestamp) from DeviceStatusLog ds2 where ds2.device.deviceId = :deviceId)")
	DeviceStatusLog findCurrentStatus(@Param("deviceId") String deviceId);
}
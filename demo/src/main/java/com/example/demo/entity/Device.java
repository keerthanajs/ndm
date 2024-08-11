package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name = "device")
public class Device {
	@Id
	@EqualsAndHashCode.Include
	private String deviceId;
	
    private String deviceName;
    private String deviceType;
    private String model;
    private String serialNumber;
    private String location;
    private String status;
	
}

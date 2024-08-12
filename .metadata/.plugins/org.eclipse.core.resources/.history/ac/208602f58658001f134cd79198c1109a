package com.example.demo.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name="device_firmware")
public class DeviceFirmware {
    @Id
    @EqualsAndHashCode.Include
    private String firmwareId;
    private String firmwareVersion;
    private Date releaseDate;
    private boolean isCurrent;

    @ManyToOne
    private Device device;

}
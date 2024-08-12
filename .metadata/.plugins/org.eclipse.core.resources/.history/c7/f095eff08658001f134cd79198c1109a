package com.example.demo.entity;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name="device_status_log")
public class DeviceStatusLog {
    @Id
    @EqualsAndHashCode.Include
    private String logId;
    private String status;
    private String message;
    private Timestamp logTimestamp;

    @ManyToOne
    private Device device;

}
package com.rk.oms.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@ComponentScan("com.rk.oms")
public class OfficeManagementSystemAppConfig {

	public static void main(String[] args) {
		SpringApplication.run(OfficeManagementSystemAppConfig.class, args);
	}
}

package com.rk.oms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@ComponentScan("com.rk.oms")
// @EnableJpaRepositories("com.rk.oms.dao.repositories")
// @EnableAutoConfiguration(exclude = { OfficeManagementSystemAppConfig.class })
public class OfficeManagementSystemAppConfig {

	public static void main(String[] args) {
		SpringApplication.run(OfficeManagementSystemAppConfig.class, args);
	}
	
}

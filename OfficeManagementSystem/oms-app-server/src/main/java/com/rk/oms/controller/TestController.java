package com.rk.oms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rk.oms.service.EmployeeService;

@RestController
@RequestMapping(path = "/oms", method = RequestMethod.GET)
public class TestController {

	@Autowired
	EmployeeService employeeService;

	@RequestMapping("/test")
	public String getEmployees() {
		return "OMS! Office Management System - Angular SpringBoot App";
	}

}

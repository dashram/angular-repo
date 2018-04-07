package com.rk.oms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rk.oms.model.Employee;
import com.rk.oms.service.EmployeeService;

@RestController
@RequestMapping(path ="/employee", method = RequestMethod.GET)
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;

	@RequestMapping("/")
	public List<Employee> getEmployees() {
		return employeeService.getEmployees();
	}

}

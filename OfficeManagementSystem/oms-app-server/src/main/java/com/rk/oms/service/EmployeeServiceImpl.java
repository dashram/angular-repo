package com.rk.oms.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.rk.oms.model.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Override
	public List<Employee> getEmployees() {
		
		List<Employee> list = new ArrayList<Employee>();
		
		list.add(new Employee("Sam", "Dash"));
		list.add(new Employee("Xavi", "D"));
		
		return list;
	}

}

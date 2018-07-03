package com.rk.oms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rk.oms.model.User;
import com.rk.oms.service.UserService;

@RestController
@RequestMapping(path = "/oms")
public class UserController {

	@Autowired
	UserService userService;

	@RequestMapping(path = "/users", method = RequestMethod.GET)
	public List<User> getUsers() {
		return userService.getUsers();
	}

	@RequestMapping(path = "/users/{id}", method = RequestMethod.GET)
	public User getUser(@PathVariable("id") Long userId) {
		return userService.getUser(userId);
	}
	
	@RequestMapping(path = "/users/find", method = RequestMethod.POST)
	public User findUser(@RequestBody User user) {
		return userService.findUser(user);
	}

	@RequestMapping(path = "/users", method = RequestMethod.POST)
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}

	@RequestMapping(path = "/users/{id}", method = RequestMethod.PUT)
	public User updateUser(@PathVariable("id") Long userId, @RequestBody User user) {
		return userService.updateUser(userId, user);
	}

	@RequestMapping(path = "/users/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("id") Long userId) {
		userService.deleteUser(userId);
	}

}

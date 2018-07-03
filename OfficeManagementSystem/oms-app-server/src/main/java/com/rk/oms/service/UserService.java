package com.rk.oms.service;

import java.util.List;

import com.rk.oms.model.User;

public interface UserService {
	List<User> getUsers();

	User getUser(Long userId);

	User createUser(User user);

	User updateUser(Long userId, User user);

	int deleteUser(Long userId);
	
	User findUser(User user);

	List<User> findUsers(String userNameStr);

}

package com.rk.oms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.oms.dao.repositories.UserRepository;
import com.rk.oms.model.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUser(Long userId) {
		Optional<User> user = userRepository.findById(userId);
		return user.get();
	}

	@Override
	public User createUser(User user) {
		return userRepository.save(user);

	}

	@Override
	public User updateUser(Long userId, User user) {
		if (userRepository.existsById(userId)) {
			user.setUserId(userId);
			return userRepository.save(user);
		} else {
			return null;
		}

	}

	@Override
	public int deleteUser(Long userId) {
		if (userRepository.existsById(userId)) {
			userRepository.deleteById(userId);
			return 1;
		} else {
			return 0;
		}
	}

	@Override
	public List<User> findUsers(String userNameStr) {
		return null;
	}

	@Override
	public User findUser(User user) {
		return userRepository.findByUserNameAndPassword( user.getUserName(), user.getPassword());
	}

}

package com.rk.oms.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rk.oms.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByUserNameAndPassword(String userName, String password);

}

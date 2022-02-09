package com.ani.integration.service;

import com.ani.integration.domain.AppUser;
import com.ani.integration.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AppUserServiceImpl implements  AppUserService{

    @Autowired
    private AppUserRepository repository;

    @Override
    public Boolean checkUserCredentials(Long userId, String password) {
        AppUser user = repository.findByUserIdAndPassword(userId, password);
        return user != null;
    }
}

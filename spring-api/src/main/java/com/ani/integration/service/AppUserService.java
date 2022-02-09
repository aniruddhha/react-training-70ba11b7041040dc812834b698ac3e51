package com.ani.integration.service;

import com.ani.integration.dto.AppUserDto;

public interface AppUserService {

    Boolean checkUserCredentials(Long userId, String password);
}

package com.ani.integration.service;

import com.ani.integration.dto.AppResponse;
import com.ani.integration.dto.AppUserDto;

public interface AppUserService {

    public Integer registerUser(AppUserDto dto);
}

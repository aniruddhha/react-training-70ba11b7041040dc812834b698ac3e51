package com.ani.integration.service;

import com.ani.integration.domain.AppCustomer;
import com.ani.integration.domain.AppUser;
import com.ani.integration.dto.AppCustomerDto;
import com.ani.integration.dto.AppUserDto;
import com.ani.integration.repository.AppCustomerRepository;
import com.ani.integration.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AppCustomerServiceImpl implements AppCustomerService{

    @Autowired
    private AppUserRepository userRepository;

    @Autowired
    private AppCustomerRepository customerRepository;

    @Override
    public Integer registerCustomer(AppCustomerDto dto) {

        final AppUserDto userDto = dto.getUser();
        final AppUser user = new AppUser();
        user.setUserId(userDto.getUserId());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setMobile(userDto.getMobile());
        user.setPassword(userDto.getPassword());
        user.setAddress(userDto.getAddress());

        final AppUser savedUser = userRepository.save(user);

        final AppCustomer customer = new AppCustomer();
        customer.setGender(dto.getGender());
        customer.setUser(savedUser);

        final AppCustomer savedCustomer = customerRepository.save(customer);

        return savedCustomer != null ? 1 : 0;
    }
}

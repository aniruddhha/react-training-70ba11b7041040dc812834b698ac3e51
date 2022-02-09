package com.ani.integration.controller;

import com.ani.integration.dto.AppCustomerDto;
import com.ani.integration.dto.AppResponse;
import com.ani.integration.service.AppCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping("/customer")
@RestController
public class AppCustomerController {

    @Autowired
    private AppCustomerService service;

    @PostMapping
    public ResponseEntity<AppResponse<Integer>> registerCustomer(@RequestBody AppCustomerDto dto) {

        final Integer sts = service.registerCustomer(dto);
        final AppResponse<Integer> response = AppResponse.<Integer>builder()
                .sts("success")
                .msg("user saved successfully")
                .bdy(sts)
                .build();

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}

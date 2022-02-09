package com.ani.integration.controller;

import com.ani.integration.dto.AppResponse;
import com.ani.integration.dto.LoginDto;
import com.ani.integration.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequestMapping("/user")
@RestController
public class AppUserController {

    @Autowired
    private AppUserService service;

    @PostMapping(value = "/login")
    public ResponseEntity<AppResponse<Boolean>> checkUserCredentials(@RequestBody LoginDto dto) {
       final Boolean bdy = service.checkUserCredentials(dto.getUserId(), dto.getPassword());

       final AppResponse<Boolean> response = AppResponse.<Boolean>builder()
               .sts("success")
               .msg("checked for user credentials")
               .bdy(bdy)
               .build();

       return ResponseEntity.ok(response);
    }
}

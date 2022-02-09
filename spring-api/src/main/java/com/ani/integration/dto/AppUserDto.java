package com.ani.integration.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class AppUserDto {
    private Long userId;
    private String firstName;
    private String lastName;
    private String mobile;
    private String address;
    private String password;
}

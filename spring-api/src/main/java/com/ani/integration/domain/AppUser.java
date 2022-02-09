package com.ani.integration.domain;

import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    private String firstName;
    private String lastName;
    private String mobile;
    private String address;
    private String password;

    @OneToOne(mappedBy = "user")
    private AppCustomer customer;

    @OneToOne(mappedBy = "user")
    private AppVendor vendor;
}

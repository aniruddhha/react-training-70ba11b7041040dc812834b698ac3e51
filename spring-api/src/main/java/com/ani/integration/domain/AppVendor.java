package com.ani.integration.domain;

import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class AppVendor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long vendorId;

    private String category; // vendor
    private Double latitude; // vendor
    private Double longitude; // vendor

    @OneToOne
    @JoinColumn(name="user_id", referencedColumnName = "userId")
    private AppUser user;
}

package com.ani.integration.domain;

import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class AppCustomer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long customerId;

    private Integer gender;

    @OneToOne
    @JoinColumn(name="user_id", referencedColumnName = "userId")
    private AppUser user;
}

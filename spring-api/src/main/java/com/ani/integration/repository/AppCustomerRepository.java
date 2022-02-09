package com.ani.integration.repository;

import com.ani.integration.domain.AppCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppCustomerRepository extends JpaRepository<AppCustomer, Long> {
}

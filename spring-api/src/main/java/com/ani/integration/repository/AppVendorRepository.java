package com.ani.integration.repository;

import com.ani.integration.domain.AppVendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppVendorRepository extends JpaRepository<AppVendor, Long> {
}

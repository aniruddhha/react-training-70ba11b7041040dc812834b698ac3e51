package com.ani.integration.repository;

import com.ani.integration.domain.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {

    AppUser findByUserIdAndPassword(Long userId, String password);
}

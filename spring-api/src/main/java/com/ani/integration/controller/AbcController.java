package com.ani.integration.controller;

import com.ani.integration.dto.AbcDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@CrossOrigin
@RequestMapping("/abc")
@RestController
public class AbcController {

    @GetMapping
    public ResponseEntity<AbcDto> get() {
      AbcDto dto = AbcDto.builder()
              .id(123L)
              .nm("abc")
              .isOkay(true)
              .dt(LocalDate.now())
              .build();

      return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<AbcDto> post(@RequestBody AbcDto dto) {
        dto.setId(LocalDate.now().toEpochDay());
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }
}

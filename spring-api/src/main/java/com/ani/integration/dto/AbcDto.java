package com.ani.integration.dto;

import lombok.*;

import java.time.LocalDate;

@Builder
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AbcDto {
    private Long id;
    private String nm;
    private Boolean isOkay;
    private LocalDate dt;
}

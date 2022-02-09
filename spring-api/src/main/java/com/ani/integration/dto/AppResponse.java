package com.ani.integration.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class AppResponse<T> {
    private String sts;
    private String msg;
    private T bdy;
}

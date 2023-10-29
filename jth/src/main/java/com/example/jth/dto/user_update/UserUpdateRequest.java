package com.example.jth.dto.user_update;

import com.example.jth.util.regex.RegexConstantUtil;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Getter
public class UserUpdateRequest {
    @NotNull
    private Long id;

    @Pattern(regexp = RegexConstantUtil.NAME_REGEX, message = "잘못된 이름 형식입니다.")
    @NotBlank
    private String name;

    @Pattern(regexp = RegexConstantUtil.USER_ID_REGEX, message = "잘못된 아이디 형식입니다.")
    @NotBlank
    private String userId;

    @Pattern(regexp = RegexConstantUtil.PASSWORD_REGEX, message = "잘못된 비밀번호 형식입니다.")
    @NotBlank
    private String password;

    @Pattern(regexp = RegexConstantUtil.PHONE_NUMBER_REGEX, message = "잘못된 핸드폰 번호 형식입니다.")
    @NotBlank
    private String phoneNumber;
}

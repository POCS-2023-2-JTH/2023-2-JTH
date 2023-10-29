package com.example.jth.controller;

import com.example.jth.dto.login.LoginRequest;
import com.example.jth.dto.login.LoginResponse;
import com.example.jth.service.LoginService;
import io.swagger.annotations.ApiOperation;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;

    @ApiOperation(value = "로그인 api", notes = "로그인")
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest,
                                               HttpServletRequest request){
        LoginResponse response = loginService.login(loginRequest);

        HttpSession session = request.getSession();
        session.setAttribute("LOGIN_MEMBER", response.getUserId());

        return ResponseEntity.ok(response);
    }
}

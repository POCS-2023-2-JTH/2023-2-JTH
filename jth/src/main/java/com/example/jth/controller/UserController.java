package com.example.jth.controller;

import com.example.jth.dto.join.JoinRequest;
import com.example.jth.dto.join.JoinResponse;
import com.example.jth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/join")
    public ResponseEntity<JoinResponse> join(@RequestBody @Valid JoinRequest joinRequest){
        JoinResponse response = userService.join(joinRequest);
        URI uri = URI.create("/user/detail/" + response.getId());
        return ResponseEntity.created(uri).body(response);
    }
}

package com.example.jth.controller;

import com.example.jth.dto.join.JoinRequest;
import com.example.jth.dto.join.JoinResponse;
import com.example.jth.dto.user_detail.UserDetailResponse;
import com.example.jth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/join")
    public ResponseEntity<JoinResponse> join(@RequestBody @Valid JoinRequest joinRequest) {
        JoinResponse response = userService.join(joinRequest);
        URI uri = URI.create("/user/detail/" + response.getId());
        return ResponseEntity.created(uri).body(response);
    }

    @GetMapping("/user/detail/{id}")
    public ResponseEntity<UserDetailResponse> getUserDetail(@PathVariable Long id) {
        UserDetailResponse userDetail = userService.getUserDetail(id);
        return ResponseEntity.ok(userDetail);
    }
}

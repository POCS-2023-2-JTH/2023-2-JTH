package com.example.jth.controller;

import com.example.jth.dto.join.JoinRequest;
import com.example.jth.dto.join.JoinResponse;
import com.example.jth.dto.user_detail.UserDetailResponse;
import com.example.jth.dto.user_leave.UserLeaveRequest;
import com.example.jth.dto.user_update.UserUpdateRequest;
import com.example.jth.dto.user_update.UserUpdateResponse;
import com.example.jth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
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
    public ResponseEntity<UserDetailResponse> getUserDetail(@PathVariable @NotNull Long id) {
        UserDetailResponse response = userService.getUserDetail(id);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/detail/delete")
    public ResponseEntity<String> userLeave(@RequestBody @Valid UserLeaveRequest request){
        userService.userLeave(request);
        return ResponseEntity.accepted().body("member successfully leaved");
    }

    @PostMapping("/user/detail/update")
    public ResponseEntity<UserUpdateResponse> updateUserDetail(@RequestBody @Valid UserUpdateRequest request){
        UserUpdateResponse response = userService.updateUserDetail(request);
        return ResponseEntity.accepted().body(response);
    }
}

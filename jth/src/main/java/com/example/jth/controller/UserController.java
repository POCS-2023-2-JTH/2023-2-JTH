package com.example.jth.controller;

import com.example.jth.dto.join.JoinRequest;
import com.example.jth.dto.join.JoinResponse;
import com.example.jth.dto.user_detail.UserDetailResponse;
import com.example.jth.dto.user_leave.UserLeaveRequest;
import com.example.jth.dto.user_update.UserUpdateRequest;
import com.example.jth.dto.user_update.UserUpdateResponse;
import com.example.jth.service.UserService;
import io.swagger.annotations.ApiOperation;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @ApiOperation(value = "회원가입 api", notes = "새로운 회원 데이터 저장")
    @PostMapping("/join")
    public ResponseEntity<JoinResponse> join(@RequestBody @Valid JoinRequest joinRequest) {
        JoinResponse response = userService.join(joinRequest);
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "회원 상세 정보 api", notes = "회원 상세 정보 조회")
    @GetMapping("/user/detail/{id}")
    public ResponseEntity<UserDetailResponse> getUserDetail(@PathVariable @NotNull Long id) {
        UserDetailResponse response = userService.getUserDetail(id);
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "회원 탈퇴 api", notes = "회원 탈퇴(회원 데이터 삭제)")
    @PostMapping("/user/detail/delete")
    public ResponseEntity<String> userLeave(@RequestBody @Valid UserLeaveRequest request){
        userService.userLeave(request);
        return ResponseEntity.accepted().body("member successfully leaved");
    }

    @ApiOperation(value = "회원 정보 수정 api", notes = "회원 정보 수정")
    @PostMapping("/user/detail/update")
    public ResponseEntity<UserUpdateResponse> updateUserDetail(@RequestBody @Valid UserUpdateRequest request){
        UserUpdateResponse response = userService.updateUserDetail(request);
        return ResponseEntity.accepted().body(response);
    }
}

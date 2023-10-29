package com.example.jth.service;

import com.example.jth.domain.user.User;
import com.example.jth.dto.login.LoginRequest;
import com.example.jth.dto.login.LoginResponse;
import com.example.jth.exception.ErrorCode;
import com.example.jth.exception.login.PasswordNotEqualException;
import com.example.jth.exception.user.UserNotFoundException;
import com.example.jth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class LoginService {
    private final UserRepository userRepository;

    public LoginResponse login(LoginRequest request){
        String userId = request.getUserId();
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new UserNotFoundException("존재하지 않는 회원입니다.", ErrorCode.USER_NOT_FOUND));

        String password = request.getPassword();
        if(!user.getPassword().equals(password))
            throw new PasswordNotEqualException("비밀번호가 일치하지 않습니다.", ErrorCode.PASSWORD_NOT_EQUAL);

        return new LoginResponse(user.getId());
    }
}

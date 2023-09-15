package com.example.jth.service;

import com.example.jth.domain.user.Gender;
import com.example.jth.domain.user.User;
import com.example.jth.dto.join.JoinRequest;
import com.example.jth.dto.join.JoinResponse;
import com.example.jth.dto.user_detail.UserDetailResponse;
import com.example.jth.exception.user.DuplicateJoinException;
import com.example.jth.exception.ErrorCode;
import com.example.jth.exception.user.UserNotFoundException;
import com.example.jth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public JoinResponse join(JoinRequest joinRequest) {
        String userId = joinRequest.getUserId();
        String name = joinRequest.getName();
        String password = joinRequest.getPassword();
        Gender gender = joinRequest.getGender();
        String phoneNumber = joinRequest.getPhoneNumber();

        Optional<User> foundUser = userRepository.findByUserId(userId);
        if (foundUser.isPresent())
            throw new DuplicateJoinException("이미 가입한 회원입니다.", ErrorCode.JOIN_DUPLICATION);

        User user = new User(userId, name, password, gender, phoneNumber);
        Long id = userRepository.save(user).getId();
        return new JoinResponse(id);
    }

    public UserDetailResponse getUserDetail(Long id){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("존재하지 않는 회원입니다.", ErrorCode.USER_NOT_FOUND));

        return UserDetailResponse.from(user);
    }

}

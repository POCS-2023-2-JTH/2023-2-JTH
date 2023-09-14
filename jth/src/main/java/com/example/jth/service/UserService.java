package com.example.jth.service;

import com.example.jth.domain.user.Gender;
import com.example.jth.domain.user.User;
import com.example.jth.dto.join.JoinRequest;
import com.example.jth.dto.join.JoinResponse;
import com.example.jth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public JoinResponse join(JoinRequest joinRequest){
        String userId = joinRequest.getUserId();
        String name = joinRequest.getName();
        String password = joinRequest.getPassword();
        Gender gender = joinRequest.getGender();
        String phoneNumber = joinRequest.getPhoneNumber();

        User user = new User(userId, name, password, gender, phoneNumber);
        Long id = userRepository.save(user).getId();
        return new JoinResponse(id);
    }

}

package com.example.jth.interceptor;

import com.example.jth.exception.ErrorCode;
import com.example.jth.exception.login.AuthException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Slf4j
@Component
public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String requestURI = request.getRequestURI();

        log.info("인증 체크 인터셉터 실행 {}", requestURI);
        HttpSession session = request.getSession();

        if(session==null || session.getAttribute("LOGIN_MEMBER")==null){
            log.info("미인증 사용자 요청");
            throw new AuthException("인증되지 않은 사용자입니다.", ErrorCode.UNAUTHORIZED);
        }

        return true;
    }
}

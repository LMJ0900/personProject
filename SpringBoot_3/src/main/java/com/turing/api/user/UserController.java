package com.turing.api.user;


import com.turing.api.enums.Messenger;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService service;
    private final UserRepository repo;

    @PostMapping("/api/login")
    public Map<String, ?> login1 (@RequestBody Map<?,?> paramap){
        String username = (String)paramap.get("username");
        System.out.println("리퀘스트" + username);
        Map<String,String> response = new HashMap<>();
        response.put("로그인 성공","아이디 : "+ username);

        return response;
    }
    @PostMapping(path="/api/users")
    public Map<String, ?> join(@RequestBody Map<?,?> paramap){
        Map<String,User> response = new HashMap<>();
        String strHeight = String.valueOf(paramap.get("height"));
        String strWeight = String.valueOf(paramap.get("weight"));
        String username = (String)paramap.get("username");
        String password = (String)paramap.get("password");
        String name = (String)paramap.get("name");
        String phoneNumber = (String)paramap.get("phoneNumber");
        String address = (String)paramap.get("address");
        String job = (String)paramap.get("job");
        String height = (String)paramap.get("height");
        String weight = (String)paramap.get("weight");
        User user = User.builder()
                .username((String) paramap.get("username"))
                .password((String) paramap.get("password"))
                .name((String) paramap.get("name"))
                .phoneNumber((String) paramap.get("phoneNumber"))
                .job((String) paramap.get("job"))
                .height(Double.parseDouble(strHeight))
                .weight(Double.parseDouble(strWeight))
                .build();
        System.out.println("입력 받은정보 ID : " + username + "\n" +"입력 받은정보 ID : " + username + "\n" +"입력 받은정보 password : " + password + "\n" + "입력 받은정보 name : " + name + "\n"
                +  "입력 받은정보 phoneNumber : " + phoneNumber + "\n" +"입력 받은정보 address : " + address + "\n" +  "입력 받은정보 job : " + job + "\n" + "입력 받은정보 height : " + height + "\n"+"입력 받은정보 job : " + weight);
        repo.save(User.builder()
                .username((String) paramap.get("username"))
                .password((String) paramap.get("password"))
                .name((String) paramap.get("name"))
                .phoneNumber((String) paramap.get("phoneNumber"))
                .job((String) paramap.get("job"))
                .height(Double.parseDouble(strHeight))
                .weight(Double.parseDouble(strWeight))
                .build());

        response.put( "회원가입 성공"  ,user);
        Map<String,Messenger> map = new HashMap<>();
        map.put("result",Messenger.SUCCESS);
        return map;
    }


    public Map<String, ?> login(@RequestBody Map<?,?> paramap) throws SQLException {
        Map<String,String> response = new HashMap<>();
        return response;
    }

    public Map<String, ?> findUserBYId(@RequestBody Map<?,?> paramap) {
        Map<String,String> response = new HashMap<>();
        return response;
    }

    public Map<String, ?> addUsers() {
        Map<String,String> response = new HashMap<>();
        return response;
    }


    public Map<String, ?> updatePassword(@RequestBody Map<?,?> paramap) {
        Map<String,String> response = new HashMap<>();
        return response;
    }
    public Map<String, ?> deleteUser(@RequestBody Map<?,?> paramap) {
        Map<String,String> response = new HashMap<>();

        return response;
    }

    public Map<String, ?> getUserList() {
        Map<String,String> response = new HashMap<>();

        return response;
    }

    public Map<String, ?> findUserByName(@RequestBody Map<?,?> paramap) {
        Map<String,String> response = new HashMap<>();
        return response;

    }


    public Map<String, ?> findUserByJob(@RequestBody Map<?,?> paramap) {
        Map<String,String> response = new HashMap<>();
        return response;
    }
    public Map<String, ?> countUser() {
        Map<String,String> response = new HashMap<>();
        return response;
    }

    public Map<String, ?> getOne(@RequestBody Map<?,?> paramap) throws SQLException {
        Map<String,String> response = new HashMap<>();
        return response;
    }
    public Map<String, ?> findUsers() throws SQLException {
        Map<String,String> response = new HashMap<>();

        return response;
    }
    public Map<String, ?> getUser(@RequestBody Map<?,?> paramap) throws SQLException {
        Map<String,String> response = new HashMap<>();

        return response;
    }

    public Map<String, ?> touchTable() throws SQLException {
        Map<String,String> response = new HashMap<>();
        return response;
    }

    public Map<String, ?> removeTable() throws SQLException {
        Map<String,String> response = new HashMap<>();
        return response;
    }



}

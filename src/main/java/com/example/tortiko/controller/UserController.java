package com.example.tortiko.controller;

import com.example.tortiko.model.User;
import com.example.tortiko.model.UserDTO;
import com.example.tortiko.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.Random;
import java.util.UUID;

@Controller
public class UserController {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "api/users/create-user", method = RequestMethod.POST)
    public String createUser(@RequestBody UserDTO user) {
        User newUser = new User();
        newUser.setUserId(UUID.randomUUID().toString());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(newUser);
        return "redirect:/api/users/{userId}";
    }

    @DeleteMapping("api/users/{userId}")
    public void deleteUser(@PathVariable("userId") User user) {
        userRepository.delete(user);
    }
    @RequestMapping(value = "/username", method = RequestMethod.GET)
    @ResponseBody
    public String currentUserName(Authentication authentication)throws UsernameNotFoundException {
        try {
            String loggedUser = authentication.getName();
            return loggedUser;
        }
        catch(NullPointerException e) {
            return "";
        }
    }

}






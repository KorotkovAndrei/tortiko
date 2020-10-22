package com.example.tortiko.controller;

import com.example.tortiko.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.websocket.server.PathParam;

@Controller
public class MvcController {
    private final ProductRepository productRepository;
    @Autowired
    public MvcController(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    @RequestMapping("/shop/{id}")
    public String getProduct(@PathVariable("id") Long id, Model model) {
        model.addAttribute("product", productRepository.getOne(id));

        return "product";
    }
}

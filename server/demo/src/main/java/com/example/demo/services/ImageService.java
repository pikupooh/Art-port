package com.example.demo.services;

import com.example.demo.entities.Image;
import com.example.demo.repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    ImageRepository imageRepository;


    public List<Image> getAllimages(){

        return imageRepository.findAll();
    }

    public Image getimage(String id) {

        Optional<Image> image = imageRepository.findById(id);

        return image.get();
    }

    public Image createimage(Image image){

        imageRepository.save(image);
        return image;
    }

    public void deleteAllimages(){

        imageRepository.deleteAll();
    }

    public Image deleteimage(String id){

        Optional<Image> image = imageRepository.findById(id);
        if(!image.isPresent())
            return null;
        imageRepository.deleteById(id);
        return image.get();
    }

    public Image updateimage(Image image, String id){

        Optional<Image> image1 = imageRepository.findById(id);
        if(!image1.isPresent())
            return null;

        image.setId(id);
        imageRepository.save(image);

        return image;
    }
    
}

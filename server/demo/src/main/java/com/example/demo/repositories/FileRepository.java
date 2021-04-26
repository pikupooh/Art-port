package com.example.demo.repositories;

import com.example.demo.services.ImageService;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

@Repository
public class FileRepository {

    String BASE_DIR = new File("static\\images").getAbsolutePath();

    public String save(byte[] content, String fileName, String username) throws Exception{

        String newName = new Date().getTime() + "-" + username + "-" + fileName;
        Path newFile = Paths.get(BASE_DIR + "\\" + newName);

        System.out.println(newFile);
        Files.createDirectories(newFile.getParent());
        Files.write(newFile, content);

        return newName;

    }

    public FileSystemResource findFile(String fileName){

        try{
            String location = BASE_DIR + "\\" + fileName;
            return new FileSystemResource(Paths.get(location));
        }
        catch (Exception e){
            throw new RuntimeException();
        }
    }
}

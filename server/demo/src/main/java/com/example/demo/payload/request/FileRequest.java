package com.example.demo.payload.request;

import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.Arrays;

public class FileRequest {

    @NotBlank
    private MultipartFile[] files;

    public FileRequest() {
    }

    public MultipartFile[] getMultipartFiles() {
        return files;
    }

    public void setMultipartFiles(MultipartFile[] multipartFiles) {
        this.files = multipartFiles;
    }

    @Override
    public String toString() {
        return "FileRequest{" +
                "multipartFiles=" + Arrays.toString(files) +
                '}';
    }
}

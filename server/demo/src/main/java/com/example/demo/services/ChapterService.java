package com.example.demo.services;

import com.example.demo.entities.Chapter;
import com.example.demo.entities.User;
import com.example.demo.repositories.ChapterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChapterService {

    @Autowired
    ChapterRepository chapterRepository;

    @Autowired
    CommentService commentService;

    @Autowired
    ImageService imageService;

    public List<Chapter> getAll(){

        return chapterRepository.findAll();
    }

    public Chapter getChapter(String id) {

        Optional<Chapter> chapter = chapterRepository.findById(id);
        return chapter.orElse(null);
    }

    public Chapter createChapter(Chapter chapter, User user){
        chapterRepository.save(chapter);
        return chapter;
    }

    public void deleteAllChapters(){

        chapterRepository.deleteAll();
    }

    public Chapter deleteChapter(String id){

        Optional<Chapter> chapter = chapterRepository.findById(id);
        if(!chapter.isPresent())
            return null;

        Chapter chapter1 = chapter.get();

        chapter1.getComments().forEach((comment) ->{
            commentService.deleteComment(comment.getId());
        });

        chapter1.getImages().forEach((image) ->{
            imageService.deleteimage(image.getId());
        });

        chapterRepository.deleteById(id);
        return chapter1;
    }

    public Chapter updateChapter(Chapter chapter, String id){

        Optional<Chapter> chapter1 = chapterRepository.findById(id);
        if(!chapter1.isPresent())
            return null;

        Chapter newChapter = chapter1.get();
        newChapter.setName(chapter.getName());
        newChapter.setNo(chapter.getNo());
        chapterRepository.save(newChapter);

        return newChapter;
    }

    public void save(Chapter chapter){

        chapterRepository.save(chapter);
    }
}

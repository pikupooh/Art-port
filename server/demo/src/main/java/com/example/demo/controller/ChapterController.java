
package com.example.demo.controller;

import com.example.demo.entities.Chapter;
import com.example.demo.entities.Manga;
import com.example.demo.entities.User;
import com.example.demo.services.ChapterService;
import com.example.demo.services.MangaService;
import com.example.demo.services.ProfileService;
import com.example.demo.services.UserService;
import com.mongodb.client.result.DeleteResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ChapterController {

	@Autowired
	MongoTemplate mongoTemplate;
	
    @Autowired
    ChapterService chapterService;

    @Autowired
    ProfileService profileService;

    @Autowired
    UserService userService;
    
    @Autowired
    MangaService mangaService;
    
    @GetMapping("/chapter")
    public List<Chapter> getAllPosts() {

        return chapterService.getAll();
    }

    @GetMapping("/chapter/{id}")
    public Chapter getChapter(@PathVariable String id) {

        return chapterService.getChapter(id);
    }


    @PostMapping("/mangas/{mangaId}/chapter")
    public ResponseEntity<?> createChapter(@PathVariable String mangaId, @RequestBody Chapter chapter, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        Manga manga = mangaService.getManga(mangaId);
        if (manga == null)
            return new ResponseEntity<String>("Manga not present.", HttpStatus.NOT_FOUND);
        
        if (!user.getId().equals(manga.getUserDTO().getUserId()))
            return new ResponseEntity<String>("Owner Invalid", HttpStatus.BAD_REQUEST);
        
        chapter.setMangaId(mangaId);
        chapter.setNo(manga.getChapters().size()+1);
        Chapter chapter1 = chapterService.createChapter(chapter, user);
        manga.addChapter(chapter1);
        mangaService.save(manga);
        return ResponseEntity.ok(chapter1);
    }
  
    @DeleteMapping("users/{userId}/chapters/{chapterId}")
    public ResponseEntity<?> deletePost(@PathVariable String userId, @PathVariable String chapterId, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);
        
        Chapter chap = chapterService.getChapter(chapterId);
        
        if(chap == null)
            return new ResponseEntity<String>("Chapter not present.", HttpStatus.NOT_FOUND);
        
        if(!isChapterUsers(chap, user))
        	return new ResponseEntity<String>("Chapter owner invalid.", HttpStatus.BAD_REQUEST);
        Chapter chapter = chapterService.deleteChapter(chapterId);
        if (chapter == null)
            return new ResponseEntity<String>("Chapterdoes not exist.", HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(chapter);
    }
    
    @DeleteMapping("mangas/{mangaId}")
    public ResponseEntity<?> deleteLastChapter(@PathVariable String mangaId, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        Query query = new Query(Criteria.where("id").is(mangaId));
        query.fields().include("userDTO");
        
        Manga m = mongoTemplate.findOne(query, Manga.class);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if (!user.getId().equals(m.getUserDTO().getUserId()))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);
        
        query = new Query(Criteria.where("mangaId").is(mangaId));
        query.with(Sort.by(Sort.Direction.DESC, "no"));
        query.limit(1);
        DeleteResult chap = mongoTemplate.remove(query, Chapter.class);
        
        System.out.println(chap);
        return ResponseEntity.ok(chap);
    }

    @PutMapping("/users/{id}/chapter/{chapterId}")
    public ResponseEntity<?> updatePost(@RequestBody Chapter chapter, @PathVariable String id, @PathVariable String chapterId, Principal principal){

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if(!user.getId().equals(id))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);
        Chapter chap = chapterService.getChapter(chapterId);
        
        if(chap == null)
            return new ResponseEntity<String>("Chapter not present.", HttpStatus.NOT_FOUND);
        
        if(!isChapterUsers(chap, user))
        	return new ResponseEntity<String>("Chapter owner invalid.", HttpStatus.BAD_REQUEST);
        Chapter chapter1 = chapterService.updateChapter(chapter, chapterId);

        if(chapter1 == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(chapter1);
    }

    private boolean isChapterUsers(Chapter chapter, User user) {
    	Manga manga = mangaService.getManga(chapter.getMangaId());
    	if(manga == null)
    		return false;
    	if(manga.getUserDTO().getUsername() == user.getUsername())
    		return true;
    	return false;
    }
    /*
    @DeleteMapping("/users/{id}/chapter")
    public ResponseEntity<?> deleteAllPosts(@PathVariable String id, Principal principal){

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.UNAUTHORIZED);
        if(!user.getId().equals(id))
            return new ResponseEntity<String>("User invalid.", HttpStatus.UNAUTHORIZED);

        chapterService.deleteAllPosts();
        return ResponseEntity.ok("All chapters deleted.");
    }
    */


}

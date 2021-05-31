
package com.example.demo.controller;

import com.example.demo.entities.Manga;
import com.example.demo.entities.Profile;
import com.example.demo.entities.Rating;
import com.example.demo.entities.Type;
import com.example.demo.entities.User;
import com.example.demo.services.MangaService;
import com.example.demo.services.ProfileService;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MangaController {
    
    @Autowired
    MangaService mangaService;
    
    @Autowired
    UserService userService;
    
    @Autowired
    ProfileService profileService;

    @GetMapping("/comic")
    public List<Manga> getAllComics() {

        return mangaService.getAllComic();
    }

    @GetMapping("/manga")
    public List<Manga> getAllManga() {

        return mangaService.getAllManga();
    }
    
    @GetMapping("/manga/{mangaId}")
    public Manga getManga(@PathVariable String mangaId) {

        return mangaService.getManga(mangaId);
    }

    @PostMapping("/users/{userId}/manga")
    public ResponseEntity<?> createManga(@PathVariable String userId, @RequestBody Manga manga, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);
        manga.setType(Type.valueOf("MANGA"));
        Manga manga1 = mangaService.createManga(manga, user);
        profileService.addManga(userId, manga);

        return ResponseEntity.ok(manga1);
    }
    
    @PostMapping("/users/{userId}/comic")
    public ResponseEntity<?> createComic(@PathVariable String userId, @RequestBody Manga manga, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);
        manga.setType(Type.valueOf("COMIC"));
        Manga manga1 = mangaService.createManga(manga, user);
        profileService.addComic(userId, manga);

        return ResponseEntity.ok(manga1);
    }
    @DeleteMapping("users/{userId}/manga/{mangaId}")
    public ResponseEntity<?> deleteManga(@PathVariable String userId, @PathVariable String mangaId, Principal principal) {

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if (user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if (!user.getId().equals(userId))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        Manga manga = mangaService.deleteManga(mangaId);
        if (manga == null)
            return new ResponseEntity<String>("Manga does not exist.", HttpStatus.NOT_FOUND);
        if(manga.getType() == Type.valueOf("MANGA"))
        	profileService.removeManga(userId, manga);
        else
        	profileService.removeComic(userId, manga);
        return ResponseEntity.ok(manga);
    }

    @PutMapping("/users/{id}/manga/{mangaId}")
    public ResponseEntity<?> updateManga(@RequestBody Manga manga, @PathVariable String id, @PathVariable String mangaId, Principal principal){

        String name = principal.getName();
        User user = userService.getUserByName(name);
        if(user == null)
            return new ResponseEntity<String>("User not present.", HttpStatus.NOT_FOUND);
        if(!user.getId().equals(id))
            return new ResponseEntity<String>("User invalid.", HttpStatus.BAD_REQUEST);

        Manga manga1 = mangaService.updateManga(manga, mangaId);

        if(manga1 == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(manga1);
    }

    @PutMapping("/manga/{mangaId}/rating")
    public ResponseEntity<?> addRating(@RequestBody Rating rating, @PathVariable String mangaId, Principal principal){

        if(!mangaId.equals(rating.getMangaId()))
        	return new ResponseEntity<String>("Error rating id", HttpStatus.NOT_FOUND);
        if(!mangaService.findManga(mangaId))
            return new ResponseEntity<String>("Manga not found", HttpStatus.NOT_FOUND);

        User user = userService.getUserByName(principal.getName());
        
        if(user == null)
        	return new ResponseEntity<String>("User not found", HttpStatus.NOT_FOUND);

        double currRating  = profileService.addRating(mangaId, rating.getRating(), user.getId());

        if(currRating == -2)
            return new ResponseEntity<String>("Profile not found", HttpStatus.NOT_FOUND);

        if(currRating != -1) {
        	mangaService.updateRating(rating.getRating(), currRating, mangaId);
        }
        else {
        	mangaService.updateRating(rating.getRating(), 0, mangaId);
        }

        return ResponseEntity.ok("Rating added.");

    }
    
}

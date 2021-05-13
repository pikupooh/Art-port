package com.example.demo.services;

import com.example.demo.entities.Manga;
import com.example.demo.entities.Type;
import com.example.demo.entities.User;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.repositories.MangaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class MangaService {

    @Autowired
    MangaRepository mangaRepository;

    @Autowired
    CommentService commentService;

    @Autowired
    ImageService imageService;
    
    @Autowired
    ChapterService chapterService;

    public List<Manga> getAll(){

        return mangaRepository.findAll();
    }

    public List<Manga> getAllComic(){

        return mangaRepository.findMangaByType(Type.valueOf("COMIC"));
    }

    public List<Manga> getAllManga(){

        return mangaRepository.findMangaByType(Type.valueOf("MANGA"));
    }

    public Manga getManga(String id) {

        Optional<Manga> manga = mangaRepository.findById(id);
        return manga.orElse(null);
    }

    public Manga createManga(Manga manga, User user){

        UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getProfilePhoto());

        manga.setType(manga.getType());
        manga.setUploadDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
        manga.setUserDTO(userDTO);
        mangaRepository.save(manga);
        return manga;
    }

    public void deleteAllMangas(){

        mangaRepository.deleteAll();
    }

    public Manga deleteManga(String id){

        Optional<Manga> manga = mangaRepository.findById(id);
        if(!manga.isPresent())
            return null;

        Manga manga1 = manga.get();

        manga1.getComments().forEach((comment) ->{
            commentService.deleteComment(comment.getId());
        });
        if(manga1.getCoverPhoto() != null)
        	imageService.deleteimage(manga1.getCoverPhoto().getId());
        
        manga1.getChapters().forEach((chapter) ->{
            chapterService.deleteChapter(chapter.getId());
        });

        mangaRepository.deleteById(id);
        return manga1;
    }

    public Manga updateManga(Manga manga, String id){

        Optional<Manga> manga1 = mangaRepository.findById(id);
        if(!manga1.isPresent())
            return null;

        Manga newManga = manga1.get();
        newManga.setUploadDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));
        newManga.setTitle(manga.getTitle());
        newManga.setAbout(manga.getAbout());
        mangaRepository.save(newManga);

        return newManga;
    }
    
    public Manga updateRating(int rating, int currRating, String id) {
    	Optional<Manga> manga1 = mangaRepository.findById(id);
        if(!manga1.isPresent())
            return null;

        Manga newManga = manga1.get();
        newManga.setRating(newManga.getRating()+rating-currRating);
        if(currRating == 0)
        	newManga.setRatingCount(newManga.getRatingCount()+1);
        mangaRepository.save(newManga);

        return newManga;
    }
    
    public List<Manga> getMangaByCategory(String[] category) {
    	return mangaRepository.findMangaByCategory(category);
    }
    
    public int getMangaRating(String id) {
    	Optional<Manga> manga1 = mangaRepository.findById(id);
        if(!manga1.isPresent())
            return 0;
        Manga manga = manga1.get();
        int currRating = manga.getRating();
        int ratingCount = manga.getRatingCount();
        if(ratingCount == 0)
        	return 0;
        return currRating/ratingCount;
    }

    public void save(Manga manga){

        mangaRepository.save(manga);
    }
}

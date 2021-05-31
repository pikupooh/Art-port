package com.example.demo.services;

import com.example.demo.entities.*;
import com.example.demo.payload.response.UserDTO;
import com.example.demo.repositories.MangaRepository;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
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

    @Autowired
    MongoTemplate mongoTemplate;

    public List<Manga> getAll(){

        return mangaRepository.findAll(Sort.by(Sort.Direction.DESC, "uploadDate"));
    }

    public List<Manga> getAllComic(){

        return mangaRepository.findMangaByType(Type.valueOf("COMIC"), Sort.by(Sort.Direction.DESC, "rating"));
    }

    public List<Manga> getAllManga(){

        return mangaRepository.findMangaByType(Type.valueOf("MANGA"), Sort.by(Sort.Direction.DESC, "rating"));
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
    public Manga updateMangaComment(Manga manga){
        return mangaRepository.save(manga);
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
    
    public void updateRating(double rating, double currRating, String id) {


        Manga manga = mangaRepository.findRatingById(id);

        manga.setRating(manga.getRating()+rating-currRating);
        if(currRating == 0)
        	manga.setRatingCount(manga.getRatingCount()+1);

        Query query = Query.query(Criteria.where("id").is(id));
        Update update = new Update();
        update.set("rating", manga.getRating());
        update.set("ratingCount", manga.getRatingCount());

        mongoTemplate.updateFirst(query, update, Manga.class);

    }
    
    public List<Manga> getMangaByCategory(String[] category) {
    	return mangaRepository.findMangaByCategory(category);
    }
    
    public List<Manga> getComicByCategory(String[] category) {
    	return mangaRepository.findComicByCategory(category);
    }
    
    public double getMangaRating(String id) {
    	Optional<Manga> manga1 = mangaRepository.findById(id);
        if(!manga1.isPresent())
            return 0;
        Manga manga = manga1.get();
        double currRating = manga.getRating();
        int ratingCount = manga.getRatingCount();
        if(ratingCount == 0)
        	return 0;
        return currRating/ratingCount;
    }

    public void save(Manga manga){

        mangaRepository.save(manga);
    }

    public boolean findManga(String id){

        return mangaRepository.existsById(id);
    }
}

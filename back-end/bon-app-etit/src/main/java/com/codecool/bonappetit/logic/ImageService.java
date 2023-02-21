package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.persistence.entity.Image;

import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class ImageService {
    ImageRepository imageRepository;
    RecipeService recipeService;


    @Autowired
    public ImageService(ImageRepository imageRepository, RecipeService recipeService) {
        this.imageRepository = imageRepository;
        this.recipeService = recipeService;
    }

    public Image saveImage (MultipartFile file){
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        System.out.println("filename = " + filename);
        try {
            if(filename.contains("..")){
                throw new Exception("Filename contains invalid path sequence " + filename);
            }
            Recipe recipe = recipeService.findByImageName(filename);
            Image image = new Image(filename, file.getContentType(), file.getBytes(), recipe);
            /*recipe.setImage(image);*/
            System.out.println("image = " + image);
            return imageRepository.save(image);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.persistence.entity.Image;

import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;
    private final RecipeService recipeService;

    public Recipe saveImage (MultipartFile file, long recipeId){
        Recipe recipe = recipeService.findById(recipeId);
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            if(filename.contains("..")){
                throw new Exception("Filename contains invalid path sequence " + filename);
            }
            Image image = new Image(filename, file.getContentType(), file.getBytes());
            recipe.setImage(image);
            imageRepository.save(image);
            recipe.setImage(image);
            recipeService.updatePicture(recipe);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return null;
    }
}

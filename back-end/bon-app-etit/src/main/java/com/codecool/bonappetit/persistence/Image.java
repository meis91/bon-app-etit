package com.codecool.bonappetit.persistence;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;
@Builder
@Getter
@Setter
public class Image {
    private MultipartFile image;
}

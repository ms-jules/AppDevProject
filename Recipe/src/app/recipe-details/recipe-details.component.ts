import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RecipeDetailsModule } from './recipe-details.modules.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const recipeId = params.get('id');
      this.recipe = this.recipeService.getRecipeById(recipeId);
    });
  }

  getYouTubeVideoId(videoUrl: string): string {
    const videoId = videoUrl.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    } else {
      return videoId;
    }
  }

  getYouTubeVideoUrl(videoUrl: string): SafeResourceUrl {
    const videoId = this.getYouTubeVideoId(videoUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  openYouTubeVideo(videoUrl: string) {
    const videoId = this.getYouTubeVideoId(videoUrl);
    const safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    window.open(safeUrl.toString(), '_blank');
  }
}

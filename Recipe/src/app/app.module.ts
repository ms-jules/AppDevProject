import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { RecipeService } from './services/recipe.service';
import { NgChartsModule } from 'ng2-charts';
import { RecipeGraphModule } from './recipe-graph/recipe-graph.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        RecipeGraphModule,
        BrowserModule,
        MatPaginatorModule,
        NgChartsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },RecipeService],
    bootstrap: [AppComponent]
})
export class AppModule {}

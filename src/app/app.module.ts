import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { FirstFormComponent } from './home/first-form/first-form.component';
import { FooterComponent } from './home/footer/footer.component';
import { GridListComponent } from './home/first-form/grid-list/grid-list.component';
import { RespostaComponent } from './home/resposta/resposta.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';

import { FirstFormDatasService } from './home/first-form/first-form-datas.service';
import { SnackbarService } from './shared/snackbar/snackbar.service';
import { HomeProsseguirGuard } from './guards/home-prosseguir.guard';
import { FirstFormService } from './home/first-form/first-form.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    FirstFormComponent,
    FooterComponent,
    GridListComponent,
    RespostaComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [
    FirstFormDatasService,
    HomeProsseguirGuard,
    SnackbarService,
    FirstFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

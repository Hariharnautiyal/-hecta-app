import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodeComponent } from './deals/code/code.component';
import { WelcomeComponent } from './deals/welcome/welcome.component';
import { FilesComponent } from './deals/files/files.component';
import { DealsComponent } from './deals/deals.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DealsModule } from './deals/deals.module';
import { CsComponent } from './cs/cs.component';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider'
@NgModule({
  declarations: [
    AppComponent,
    CsComponent,
    CodeComponent,
    WelcomeComponent,
    FilesComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    DealsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

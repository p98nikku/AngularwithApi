import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ObservablelistComponent } from './observablelist/observablelist.component';
import { AsynclistComponent } from './asynclist/asynclist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';

const Operations : Routes = [
  {
    path : 'update/:id',
    component :UpdateComponent
  },
  {
    path : 'delete/:id',
    component : DeleteComponent
  },
  {
    path : 'showProduct/:id',
    component : DisplayproductComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ObservablelistComponent,
    AsynclistComponent,
    HomeComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    DisplayproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    RouterModule.forChild(Operations)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

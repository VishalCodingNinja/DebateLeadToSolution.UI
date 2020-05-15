import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupForMaterialComponent } from './form-group-for-material/form-group-for-material.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponentForMaterialComponent } from './navigation-component-for-material/navigation-component-for-material.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardForMaterialComponent } from './dashboard-for-material/dashboard-for-material.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeForMaterialComponent } from './tree-for-material/tree-for-material.component';
import { MatTreeModule } from '@angular/material/tree';
import { DraganddropForAngularComponent } from './draganddrop-for-angular/draganddrop-for-angular.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HealthComponent } from './navigation-component-for-material/health/health.component';
import { EducationComponent } from './navigation-component-for-material/education/education.component';
import { WomenEmpowermentComponent } from './navigation-component-for-material/women-empowerment/women-empowerment.component';
import { InEqualityComponent } from './navigation-component-for-material/in-equality/in-equality.component';
import { CurrentProblemsComponent } from './navigation-component-for-material/current-problems/current-problems.component';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    FormGroupForMaterialComponent,
    NavigationComponentForMaterialComponent,
    DashboardForMaterialComponent,
    TreeForMaterialComponent,
    DraganddropForAngularComponent,
    HealthComponent,
    EducationComponent,
    WomenEmpowermentComponent,
    InEqualityComponent,
    CurrentProblemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

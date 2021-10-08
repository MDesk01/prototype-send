import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './navigation/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HomeComponent } from './views/home/home.component';
import { PagAlunoComponent } from './views/pag-aluno/pag-aluno.component';
import { PagInternaComponent } from './views/pag-interna/pag-interna.component';
import { VizualizacaoComponent } from './processos/vizualizacao/vizualizacao.component';
import { AdicaoComponent } from './processos/adicao/adicao.component';
import { ExclusaoComponent } from './processos/exclusao/exclusao.component';
import { EdicaoComponent } from './processos/edicao/edicao.component';
import { VizualizacaoAlunoComponent } from './processos/vizualizacao-aluno/vizualizacao-aluno.component';
import { VizualizacaoColaboradorComponent } from './processos/vizualizacao-colaborador/vizualizacao-colaborador.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidenavComponent,
    HomeComponent,
    PagAlunoComponent,
    PagInternaComponent,
    VizualizacaoComponent,
    AdicaoComponent,
    ExclusaoComponent,
    EdicaoComponent,
    VizualizacaoAlunoComponent,
    VizualizacaoColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
MatBadgeModule,
MatBottomSheetModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatCheckboxModule,
MatChipsModule,
MatDatepickerModule,
MatNativeDateModule,
MatDialogModule,
MatDividerModule,
MatExpansionModule,
MatFormFieldModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatPaginatorModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRadioModule,
MatRippleModule,
MatSelectModule,
MatSidenavModule,
MatSlideToggleModule,
MatSliderModule,
MatSnackBarModule,
MatSortModule,
MatStepperModule,
MatTableModule,
MatTabsModule,
MatToolbarModule,
FormsModule,
HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

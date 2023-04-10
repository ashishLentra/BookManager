import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  // {path: '', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: '', component: BookListComponent},
  {path: 'allbooks', component: AllbooksComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'update-book/:id', component: UpdateBookComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

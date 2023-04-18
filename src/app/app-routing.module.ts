import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewComponent } from './view/view.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { BooksForSaleComponent } from './books-for-sale/books-for-sale.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'allbooks', component: AllbooksComponent, canActivate:[AuthguardGuard]},
  {path: 'add-book/:id', component: AddBookComponent, canActivate:[AuthguardGuard]},
  {path: 'book-list/:id', component: BookListComponent, canActivate:[AuthguardGuard]},
  {path: 'book-list', component: BookListComponent, canActivate:[AuthguardGuard]},
  {path: 'update-book/:id', component: UpdateBookComponent, canActivate:[AuthguardGuard]},
  {path:'view/:id', component: ViewComponent, canActivate:[AuthguardGuard]},
  {path:'booksForSale', component:BooksForSaleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

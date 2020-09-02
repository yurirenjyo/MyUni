import { UserService } from './user.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { NgModule, Component, enableProdMode } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Router, CanActivate } from '@angular/router';
import { environment } from './../environments/environment';


import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProfessorsComponent } from './professors/professors.component';
import { StudentsComponent } from './students/students.component';
import { MajorsComponent } from './majors/majors.component';
import { BookSuppliesComponent } from './book-supplies/book-supplies.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProfessorsComponent,
    StudentsComponent,
    MajorsComponent,
    BookSuppliesComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    HomeComponent,
    ShoppingCartComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'professors', component: ProfessorsComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'majors', component: MajorsComponent },
      { path: 'book-supplies', component: BookSuppliesComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },    
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]  },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]  },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard]  },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard]  },
      

    ]),
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { TwoComponent } from "./components/two/two.component";
import { FormsModule } from "@angular/forms";
import { SommeComponent } from "./components/somme/somme.component";
import { FilsComponent } from "./components/fils/fils.component";
import { PereComponent } from "./components/pere/pere.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { LoggerService } from "./services/logger.service";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HelloComponent } from './components/hello/hello.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TwoComponent,
    SommeComponent,
    FilsComponent,
    PereComponent,
    HighlightDirective,
    NavbarComponent,
    HelloComponent,
    NF404Component,
    TestFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

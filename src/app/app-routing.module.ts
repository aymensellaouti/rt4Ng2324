import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./components/first/first.component";
import { PereComponent } from "./components/pere/pere.component";
import { SecondComponent } from "./components/second/second.component";
import { HelloComponent } from "./components/hello/hello.component";
import { SommeComponent } from "./components/somme/somme.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { TestFormComponent } from "./components/test-form/test-form.component";

// cv/add => cv/add , cv , ''

const routes: Routes = [
  { path: "", component: SecondComponent },
  { path: "first", component: FirstComponent },
  { path: "pere", component: PereComponent },
  { path: "form", component: TestFormComponent },
  { path: ":id", component: SommeComponent },
  { path: "hello/:name", component: HelloComponent },
  { path: "**", component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

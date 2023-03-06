
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { pipe } from "rxjs";

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from "./components/pipes/pipes.component";

const routes: Routes = [
    {path:'', component: FirstComponentComponent},
    {path:'list',component: ListRenderComponent},
    {path:'pipes', component: PipesComponent}
]

// É um decorator, que inclui nossas rotas nesta classe aqui
@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
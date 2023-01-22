import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./core/guards/login.guard";
import { LayoutAuthComponent } from "./layouts/layout-auth/layout-auth.component";
import { LayoutComponent } from "./layouts/layout/layout.component";

const routes: Routes = [
    {
        path: "login",
        component: LayoutAuthComponent,
        children: [
            {
                path: "",
                loadChildren: () => import("./modules/authentication/authentication.module").then((m) => m.AuthenticationModule)
            }
        ]
    },
    {
        path: "",
        canActivate: [LoginGuard],
        component: LayoutComponent,
        children: [
            {
                path: "",
                canActivate: [LoginGuard],
                loadChildren: () => import("./modules/crud/crud.module").then((m) => m.CrudModule)
            }
        ]
    },
    {   path: "**", redirectTo: "login"  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


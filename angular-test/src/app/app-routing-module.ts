import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutAuthComponent } from "./layouts/layout-auth/layout-auth.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutAuthComponent,
        children: [
            {
                path: "",
                loadChildren: () => import("./modules/authentication/authentication.module").then((m) => m.AuthenticationModule)
            }
        ]
    },
    {   path: "**", redirectTo: ""  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


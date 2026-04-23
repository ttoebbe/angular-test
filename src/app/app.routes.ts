import { Routes } from '@angular/router';
import { CompA } from './comp-a/comp-a';
import { CompB } from './comp-b/comp-b';
import { WrapperHome } from './wrapper-home/wrapper-home';


export const routes: Routes = [
    {
        path:"",
        component: CompA
    },
    {
        path: "home",
        component: WrapperHome
    },
    {
        path: "compb/:myParam",
        component: CompB
    }, 
    {
        path: "compc",
        redirectTo: ""
    },
    {
        path: "**",
        redirectTo: ""
    }

];

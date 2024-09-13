import { Routes } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { versions } from "./versions";

export const routes: Routes = [];
const CURRENT_VERSION = versions[0];

routes.push({path: '', redirectTo: CURRENT_VERSION.path, pathMatch: "full"});
versions.forEach(version => routes.push({path: version.path, title: version.title, component: MainComponent}));

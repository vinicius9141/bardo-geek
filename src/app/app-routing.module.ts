import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './pages/creator/creator.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: 'creator',
    component: CreatorComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    FilterPipe
  ],
  exports: [ FilterPipe ],
  imports: []
})
export class PipesModule { }

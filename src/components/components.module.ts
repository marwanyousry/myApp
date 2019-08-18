import { NgModule } from '@angular/core';
import { MyComponetComponent } from './my-componet/my-componet';
import { MyComponent } from './my/my';
@NgModule({
	declarations: [MyComponetComponent,
    MyComponent],
	imports: [],
	exports: [MyComponetComponent,
    MyComponent]
})
export class ComponentsModule {}

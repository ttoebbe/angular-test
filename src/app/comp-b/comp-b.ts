import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.scss',
})
export class CompB {
  myParamVar: string |null;
private route = inject(ActivatedRoute);
constructor() {
  this.myParamVar = this.route.snapshot.paramMap.get('myParam');
}
}

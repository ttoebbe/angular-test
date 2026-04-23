import { Component } from '@angular/core';
import { CompA } from '../comp-a/comp-a';
import { CompB } from '../comp-b/comp-b';

@Component({
  selector: 'app-wrapper-home',
  imports: [CompB, CompA],
  templateUrl: './wrapper-home.html',
  styleUrl: './wrapper-home.scss',
})
export class WrapperHome {}

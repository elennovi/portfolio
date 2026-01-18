import { Component } from '@angular/core';
import { Link } from '../core/link/link';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Link, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}

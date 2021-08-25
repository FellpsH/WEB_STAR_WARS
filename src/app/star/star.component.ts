import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/People';
import { StarService } from '../services/star.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  constructor(private starService: StarService) {}

  ngOnInit(): void {
    console.log('Start');
    this.starService.getPeople(1).subscribe((result: Pessoa) => {
      console.log('result', result);
    });
    console.log('end');
  }
}

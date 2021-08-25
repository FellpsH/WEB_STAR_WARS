import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { People } from '../models/People';
import { Reponse } from '../models/Reponse';
import { StarService } from '../services/star.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  peoples: Reponse<People[]> | null;

  constructor(private starService: StarService, private httpClient: HttpClient) {
    this.peoples = null;
  }

  ngOnInit(): void {
    this.starService.getPeoples().subscribe((response: Reponse<People[]>) => {
      this.peoples = response;
    });
  }

  public loadPeoples(url: string) : void {
    this.httpClient.get<Reponse<People[]>>(url).subscribe((response: Reponse<People[]>) => {
      this.peoples = response;
    });
  }
}

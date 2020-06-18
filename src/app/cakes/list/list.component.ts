import { Component, OnInit } from '@angular/core';
import { CakesService } from '../cakes.service';
import { Cake } from '../cake';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public cakes: Array<Cake>;

  constructor(public cakesService: CakesService) { }

  ngOnInit(): void {
    this.cakesService.getAll().subscribe(data => {
      this.cakes = data;
    });
  }

}

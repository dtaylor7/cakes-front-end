import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakesService } from '../cakes.service';
import { Cake } from '../cake';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public cake: Cake;

  constructor(private actRoute: ActivatedRoute, private cakesService: CakesService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params.id;

    this.cakesService.get(id).subscribe(data => {
      this.cake = data;
    });
  }

}

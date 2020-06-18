import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CakesService } from '../cakes.service';
import { Cake } from '../cake';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  cake: any;

  constructor(private formBuilder: FormBuilder, private router: Router, public cakesService: CakesService) { }

  ngOnInit(): void {
    this.cake = this.formBuilder.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      comment: [''],
      yumFactor: ['', Validators.required],
    })
  }

  save() {
    if (this.cake.valid) {
      this.cakesService.create({ ...this.cake.value, yumFactor: +this.cake.value.yumFactor }).subscribe(res => {
        this.router.navigateByUrl('');
      });
    } else {
      alert('hmmm somthing wronge with that cake?');
    }
  }

}

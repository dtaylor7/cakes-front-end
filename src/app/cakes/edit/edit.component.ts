import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CakesService } from '../cakes.service';
import { Cake } from '../cake';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public form: any;
  public cake: Cake;

  constructor(private actRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, public cakesService: CakesService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params.id;

    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      comment: [''],
      yumFactor: ['', Validators.required],
    });

    this.cakesService.get(id).subscribe(data => {
      this.form.patchValue(data);
    });
  }

  save() {
    if (this.form.valid) {
      this.cakesService.update(this.form.value).subscribe(res => {
        this.router.navigateByUrl(this.form.value);
      });
    } else {
      alert('hmmm somthing wronge with that cake?');
    }
  }
}

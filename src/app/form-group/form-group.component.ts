import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  exform: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'secondAddress': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'zip': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}'), Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    console.log(this.exform.value);
    this.exform.reset();
  }

  get name() {
    return this.exform.get('name')
  }
  get lastName() {
    return this.exform.get('lastName')
  }
  get address() {
    return this.exform.get('address')
  }
  get secondAddress() {
    return this.exform.get('secondAddress')
  }
  get city() {
    return this.exform.get('city')
  }
  get zip() {
    return this.exform.get('zip')
  }
  get phone() {
    return this.exform.get('phone')
  }
  get email() {
    return this.exform.get('email')
  }

}

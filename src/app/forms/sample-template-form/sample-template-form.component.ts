import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-template-form',
  templateUrl: './sample-template-form.component.html',
  styleUrls: ['./sample-template-form.component.css']
})
export class SampleTemplateFormComponent implements OnInit {

  username_info: string = 'John Doe';

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(formData) {
    console.log(formData);
 }

}

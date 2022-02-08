import { Component, OnInit } from '@angular/core';

import { FormTemplateInterface } from "./form-template.interface";

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})

export class FormTemplateComponent implements OnInit {
  form!: FormTemplateInterface;

  ngOnInit() {
    this.form = {
    type: 'text',
    options: {
        title: 'Good day!',
        value: '100%'
      }
    }
  }
}

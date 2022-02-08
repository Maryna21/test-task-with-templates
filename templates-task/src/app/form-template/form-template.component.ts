import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormTemplateInterface} from "./form-template.interface";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OptionConfig, TypeConfig} from "./form-template.config";


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

    console.log(this.form)
  }

}

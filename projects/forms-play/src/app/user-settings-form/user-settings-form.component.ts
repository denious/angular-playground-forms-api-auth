import { Component, OnInit } from '@angular/core';
import { UserSettingsModel } from './user-settings.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  userSettingsModel: UserSettingsModel;

  constructor() {
    this.userSettingsModel = {
      txtName: null,
      chkNews: true,
      radSex: null,
      selBecause: null,
      txtAboutMe: null
    };
  }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    debugger;
  }

}

import { Component } from '@angular/core';

@Component({
  templateUrl: './users.component.html'
})
export class UsersComponent {

  title = 'Users';
  apiRoute: string = 'users';

  columns: Array<{}> = [
    {
      key: 'id',
      name: 'Id'
    },
    {
      key: 'display_name',
      name: 'Display Name'
    },
    {
      key: 'current_employer',
      name: 'Current Employer'
    },
    {
      key: 'current_position',
      name: 'Current Position'
    },
  ];

  editProperties: Array<any> = [
    {
      key: 'display_name',
      label: 'Display Name',
      type: 'text',
      required: true,
    },
    {
      key: 'first_name',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      key: 'last_name',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      key: 'current_employer',
      label: 'Current Employer',
      type: 'text',
      required: false,
    },
    {
      key: 'current_position',
      label: 'Current Position',
      type: 'text',
      required: false,
    },
    {
      key: 'user_photo',
      label: 'Thumbnail',
      type: 'image',
      required: false,
    },
    {
      key: 'disciplines',
      label: 'Discipline',
      type: 'disciplines',
      required: false,
    },
  ]

  filters = [
    {
      type: 'textbox',
      key: 'display_name',
      label: 'Name',
    },
    {
      type: 'textbox',
      key: 'current_employer',
      label: 'Current employer',
    },
    {
      type: 'textbox',
      key: 'current_position',
      label: 'Current Position',
    },
    {
      type: 'disciplines',
      key: 'disciplines',
      label: 'Disciplines',
    },
  ];
}

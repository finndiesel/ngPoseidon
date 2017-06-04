import { Component } from '@angular/core';

@Component({
  selector: 'groups',
  templateUrl: './groups.component.html'
})
export class GroupsComponent {

  title = 'Groups';
  apiRoute: string = 'groups';

  columns: Array<{}> = [
    {
      key: 'id',
      name: 'Id'
    },
    {
      key: 'name',
      name: 'Name'
    },
    {
      key: 'description',
      name: 'Description'
    },
    {
      key: 'pinned',
      name: 'Pinned'
    },
  ];

  editProperties: Array<any> = [
    {
      key: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      key: 'description',
      label: 'Description',
      type: 'wizwig',
      required: false,
    },
    {
      key: 'slug',
      label: 'Slug',
      type: 'text',
      required: false,
    },
    {
      key: 'discipline',
      label: 'Discipline',
      type: 'disciplines',
      required: false,
    },
    {
      key: 'pinned',
      label: 'Pinned',
      type: 'checkbox',
      required: false,
    },
    {
      key: 'image',
      label: 'Image',
      type: 'text',
      required: false,
    },
  ]

  filters = [
    {
      key: 'group_name',
      label: 'Name',
      type: 'textbox',
    },
  ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent {

  title = 'Articles';
  apiRoute: string = 'user_articles';

  columns: Array<{}> = [
    {
      key: 'id',
      name: 'Id'
    },
    {
      key: 'user_id',
      name: 'User Id'
    },
    {
      key: 'headline',
      name: 'Headline'
    },
    {
      key: 'status',
      name: 'Status'
    },
    {
      key: 'featured',
      name: 'Featured'
    },
    {
      key: 'pinned',
      name: 'Pinned'
    },
  ];

  editProperties: Array<any> = [
    {
      key: 'user_id',
      label: 'User Id',
      type: 'text',
      required: true,
    },
    {
      key: 'headline',
      label: 'Headline',
      type: 'text',
      required: true,
    },
    {
      key: 'body',
      label: 'Body',
      type: 'wizwig',
      required: true,
    },
    {
      key: 'published_at',
      label: 'Published At',
      type: 'date',
      required: false,
    },
    {
      key: 'status',
      label: 'Status',
      type: 'options',
      options: [
        {key: 'draft', value: 'Draft'},
        {key: 'published', value: 'Published' }
      ],
      required: true,
    },
    {
      key: 'featured',
      label: 'Featured',
      type: 'checkbox',
      required: false,
    },
    {
      key: 'pinned',
      label: 'Pinned',
      type: 'checkbox',
      required: false,
    },
  ]

  filters = [
    {
      type: 'textbox',
      key: 'headline',
      label: 'Headline',
    },
    {
      type: 'select',
      key: 'status',
      label: 'Status',
      options: [
        {
          key: 'published',
          value: 'Published'
        },
        {
          key: 'draft',
          value: 'Draft'
        },
      ]
    },
    {
      type: 'checkbox',
      key: 'pinned',
      label: 'Pinned',
    },
    {
      type: 'checkbox',
      key: 'featured',
      label: 'Featured',
    },
  ];

}

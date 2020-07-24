
export default     {
    name: 'portfolios',
    title: 'Portfolios',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'visibility',
        title: 'Visibility',
        type: 'boolean'
      },
      {
        name: 'logos',
        title: 'Logos',
        type: 'array',
        of: [ {
          type: 'reference',
          to: [{type: 'logo'}]
          }
        ],
        validation: Rule => Rule.required()
      },
      {
        name: 'title',
        title: 'Title',
        type: 'localeString'
      },

      {
        name: 'subTitle',
        title: 'Subtitle',
        type: 'localeString'
      },

      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [ {
          type: 'reference',
          to: [{type: 'portfolioContent'}]
          }
        ],
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        validation: Rule => Rule.required()
      }
    ]

  }

export default     {

    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },

      // Author content EN
      {
        name: 'authorContentEn',
        title: 'Author Content EN',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                title: 'Image Position',
                name: 'position',
                type: 'string',
                options: {
                  list: [
                    {title: 'Center', value: 'center'},
                    {title: 'Left', value: 'left'},
                    {title: 'Right', value: 'right'}
                  ],
                  layout: 'radio',
                  isHighlighted: true
                }
              },
              {
                type: 'text',
                name: 'alt',
                title: 'Description',
                options: {
                  isHighlighted: true
                }
              }
            ],
            options: {
              hotspot: true
            }
          }
        ]
      },

      // Author content FR
      {
        name: 'authorContentFr',
        title: 'Author Content FR',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                title: 'Image Position',
                name: 'position',
                type: 'string',
                options: {
                  list: [
                    {title: 'Center', value: 'center'},
                    {title: 'Left', value: 'left'},
                    {title: 'Right', value: 'right'}
                  ],
                  layout: 'radio',
                  isHighlighted: true
                }
              },
              {
                type: 'text',
                name: 'alt',
                title: 'Description',
                options: {
                  isHighlighted: true
                }
              }
            ],
            options: {
              hotspot: true
            }
          }
        ]
      }

    ]
  }
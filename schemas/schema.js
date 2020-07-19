// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import localeString from './localeString';
import supportedLanguages from './languages';

const buildAuthorContentForLanguage = () => {

  const arrayOfBlock = supportedLanguages.map(language => ({
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [
      {
        type: 'block'
      },
    ]

  }))

  arrayOfBlock.map(blk => console.log(blk))
  return arrayOfBlock;
}

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    
    // LOCALISATION Object
    localeString,

    // **** LOGOS document
    {
      name: 'logo',
      title: 'Logo',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'logoImage',
          title: 'Logo Image',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },

    // **** AUTHOR INTRO document
    {

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
    },

    // **** SECTION DESCRIPTION 
    {

      name: 'descriptionSection',
      title: 'Section Description',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'localeString'
        }
      ]
    },

    // **** PORTFOLIOS
    {
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
          name: 'logo',
          title: 'Logo',
          type: 'reference',
          to: [
            { type: 'logo'}
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

  ])
})

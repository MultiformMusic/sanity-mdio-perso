
export default {

    name: 'portfolioContent',
    type: 'document',
    title: 'Portfolio Content',
    fields: [
        {
            name: 'portfolioContent',
            title: 'Portfolio Content',
            type: 'string'
        },
        // Porfolio content EN
        {
            name: 'portfolioContentEn',
            title: 'Porfolio Content EN',
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

        // Portfolio content FR
        {
            name: 'portfolioContentFr',
            title: 'Portfolio Content FR',
            type: 'array',
            of: [
            {
                type: 'block',
                styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H1', value: 'h1'},
                    {title: 'H2', value: 'h2'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                    {title: 'H5', value: 'h5'},
                    {title: 'H6', value: 'h6'},
                    {title: 'Quote', value: 'blockquote'},
                    { title: 'Hidden', value: 'blockComment' }
                  ]
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
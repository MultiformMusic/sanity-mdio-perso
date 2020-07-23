
// Logos sélectionnables pour les Porfolios

export default {
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
  }
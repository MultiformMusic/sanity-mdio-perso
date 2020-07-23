
export default {
    name: 'musics',
    title: 'Musics',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Music Name',
        type: 'string'
      },
      {
        name: 'visibility',
        title: 'Visibility',
        type: 'boolean'
      },
      {
        name: 'linkList',
        title: 'Music Link List',
        type: 'string'
      },
      {
        name: 'linkBlock',
        title: 'Music Link Block',
        type: 'string'
      },
      {        
        name: 'pistNumber',
        title: 'Pist Number',
        type: 'number'
      }
    ]
  }
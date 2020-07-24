// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import localeString from './localeString';
import supportedLanguages from './languages';
import logos from './logos';
import author from './author';
import sectionDescription from './section-description';
import portfolios from './portfolios';
import musics from './musics';
import portfolioContent from './portfolio-content';

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

  //arrayOfBlock.map(blk => console.log(blk))
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
    logos,

    // **** AUTHOR INTRO document
    author,

    // **** SECTION DESCRIPTION 
    sectionDescription,

    // **** PORTFOLIOS
    portfolios,

    // ***** PORTFOLIO CONTENT
    portfolioContent,

    // ***** MUSICS
    musics

  ])
})

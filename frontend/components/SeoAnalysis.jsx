// import React from 'react';
// import {Text, FormLayout,TextField }  from "@shopify/polaris";

// export default function SeoAnalysis() {
//   const seoScore = 60;

//   const getScoreLabel = (score) => {
//     if (score > 80) {
//       return ' EXCELLENT';
//     } else if (score > 60) {
//       return 'GOOD';
//     } else if (score > 40) {
//       return ' OK';
//     } else {
//       return ' BAD';
//     }
//   };

//   const label = `Blog Post Score is ${getScoreLabel(seoScore)}`;

//   return (
//     <>
//       <p>{label}</p>
//       <br/>
     
//       <FormLayout>
//           <TextField label= <Text  fontWeight='bold'>Readability:</Text> />
//       </FormLayout>
//       <br/>

//       <FormLayout>
//           <TextField label= "words" />
//       </FormLayout>
    
//     </>
//   );
// }

import React from 'react';
import {Text, FormLayout,TextField }  from "@shopify/polaris";
import { TextAlignmentRightMajor } from '@shopify/polaris-icons';

export default function SeoAnalysis() {
  const seoScore = 60;

  const getScoreLabel = (score) => {
    if (score > 80) {
      return ' EXCELLENT';
    } else if (score > 60) {
      return 'GOOD';
    } else if (score > 40) {
      return ' OK';
    } else {
      return ' BAD';
    }
  };

  const label = `Blog Post Score is ${getScoreLabel(seoScore)}`;

  return (
    <>
      <p>{label}</p>
      <br/>
     
      <FormLayout>
          <TextField label= <Text  fontWeight='bold'>Readability:</Text> />
      </FormLayout>
      <br/>

      {/* <FormLayout>
          <TextField label= "words" />
      </FormLayout> */}

      <FormLayout>
      <FormLayout.Group condensed>
        <TextField label="Words" onChange={() => {}} autoComplete="off" />
        <TextField label="Headings" onChange={() => {}} autoComplete="off" />
        <TextField label="Paragraphs" onChange={() => {}} autoComplete="off" />
        <TextField label="Images" onChange={() => {}} autoComplete="off" />
        <TextField label="videos" onChange={() => {}} autoComplete="off" />
        <TextField label="Total Links" onChange={() => {}} autoComplete="off" />
      </FormLayout.Group>
    </FormLayout>
    
    </>
  );
}
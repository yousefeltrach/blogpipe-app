// import { Card, Page, Text, Select, Pagination, InlineStack } from "@shopify/polaris";
// import TopicsIndexTable from "./components/TopicsIndexTable";
// import { api } from "./api";
// import { useState, useCallback, useEffect } from "react";
// import { useFindMany } from "@gadgetinc/react";

// export default function Topics(){

//      /**
//      * CHANGE NUM_RECORDS TO MODIFY THE NUMBER OF RECORDS FETCHED AT A SINGLE TIME
//      */
//      const NUM_RECORDS = 10;
//      // Add state for rows per page
//      const [rowsPerPage, setRowsPerPage] = useState(NUM_RECORDS); 
 
//      // React state to manage table data and settings, as well as pagination cursor
//      const [Topics, setTopics] = useState([]);
//      const [cursor, setCursor] = useState({ first: rowsPerPage });
 
//      /**
//       * CHANGE shopifyShop TO YOUR GADGET MODEL'S API IDENTIFIER TO FETCH DIFFERENT DATA
//       */
//      const [{ data, fetching, error }] = useFindMany(api.blogPipeTopics, {
//          ...cursor,
//          select: {
//              id: true,
//              title: true,
//              keywords: true
//          }
//      });
 
     
//      // Update the cursor when rowsPerPage changes
//      useEffect(() => {
//          setCursor({ first: rowsPerPage });
//      }, [rowsPerPage]);
 
//      const handleRowsPerPageChange = useCallback((value) => {
//          setRowsPerPage(parseInt(value));
//      }, []);
 
//      useEffect(() => {
//          if (data) {
//              // transform the data to match the structure of "trials"
//              let transformedData = data.map(d => ({
//                  id: d.id,
//                  title: d.title,
//                  keywords: d.keywords
//              }));
 
//              // filter transformed data to only include trials with category "TRY_BEFORE_YOU_BUY"
//              // transformedData = transformedData.filter(d => d.sellingPlans.includes('TRY_BEFORE_YOU_BUY'));
 
//              // set transformed data to trials
//              setTopics(transformedData);
//              console.log(transformedData);
//          }
//      }, [data]);
 
//      // update the pagination functions to use Polaris's Pagination component
//      const handleNextPage = useCallback(() => {
//          // use first + after to page forwards
//          setCursor({ first: rowsPerPage, after: data.endCursor });
//      }, [data]);
 
//      const handlePreviousPage = useCallback(() => {
//          // use last + before to page backwards
//          setCursor({ last: rowsPerPage, before: data.startCursor });
//      }, [data]);
 
//      // display any request errors
//      if (error) {
//          return (
//              <Page title="Error">
//                  <Text variant="bodyMd" as="p">
//                      Error: {error.toString()}
//                  </Text>
//              </Page>
//          );
//      }

//     return(
//         <Page

//         fullWidth
//         title="Topics"
//         primaryAction={
//             {
//                 content: "Generate new topic",
//                 // onAction: showGenerateArticleModal()
//             }
//         }
       
//     >
//         {data && (
//             <topicsIndexTable topics={topics} isLoading={fetching} />
//         )}
//         {data && topics.length > 0 && (
//             <>
//                 <br />
//                 <InlineStack align="end" blockAlign="end">
//                     <Select
//                         label="page:"
//                         labelInline
//                         options={['10', '20', '50', '100']}
//                         value={String(rowsPerPage)}
//                         onChange={handleRowsPerPageChange}
//                     />
//                     <Pagination
//                         hasPrevious={data?.hasPreviousPage}
//                         onPrevious={handlePreviousPage}
//                         hasNext={data?.hasNextPage}
//                         onNext={handleNextPage}
//                     />
//                 </InlineStack>
//             </>
//         )}
//     </Page>
//     )
// }

import React, { useState, useCallback, useEffect } from "react";
import { Card, Page, Text, Select, Pagination, InlineStack } from "@shopify/polaris";
import TopicsIndexTable from "./components/TopicsIndexTable";
import { api } from "./api";
import { useFindMany } from "@gadgetinc/react";

export default function Topics() {
  const NUM_RECORDS = 10;
  const [rowsPerPage, setRowsPerPage] = useState(NUM_RECORDS);
  const [topics, setTopics] = useState([]);
  const [cursor, setCursor] = useState({ first: rowsPerPage });

  const [{ data, fetching, error }] = useFindMany(api.blogPipeTopics, {
    ...cursor,
    select: {
      id: true,
      title: true,
      keywords: true,
    },
  });

  useEffect(() => {
    setCursor({ first: rowsPerPage });
  }, [rowsPerPage]);

  const handleRowsPerPageChange = useCallback((value) => {
    setRowsPerPage(parseInt(value));
  }, []);

  useEffect(() => {
    if (data) {
      let transformedData = data.map((d) => ({
        id: d.id,
        title: d.title,
        keywords: d.keywords,
      }));
      setTopics(transformedData);
    }
  }, [data]);

  const handleNextPage = useCallback(() => {
    setCursor({ first: rowsPerPage, after: data.endCursor });
  }, [data]);

  const handlePreviousPage = useCallback(() => {
    setCursor({ last: rowsPerPage, before: data.startCursor });
  }, [data]);

  if (error) {
    return (
      <Page title="Error">
        <Text variant="bodyMd" as="p">
          Error: {error.toString()}
        </Text>
      </Page>
    );
  }

  return (
    <Page
      fullWidth
      title="Topics"
    //   primaryAction={{
    //     content: "Generate new topic",
       
    //   }}
    >
      {data && <TopicsIndexTable topics={topics} isLoading={fetching} />} {/* Corrected component name */}
      {data && topics.length > 0 && (
        <>
          <br />
          <InlineStack align="end" blockAlign="end">
            <Select
              label="Topics per page::"
              labelInline
              options={['5' ,'10', '20', '30', '40' , '50']}
              value={String(rowsPerPage)}
              onChange={handleRowsPerPageChange}
            />
             <text style={{ width: "20px" }}></text>
            <Pagination
              hasPrevious={data?.hasPreviousPage}
              onPrevious={handlePreviousPage}
              hasNext={data?.hasNextPage}
              onNext={handleNextPage}
            />
          </InlineStack>
        </>
      )}
    </Page>
  );
}

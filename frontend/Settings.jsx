import React from 'react';
import { Page, Text, useBreakpoints, Divider, BlockStack, InlineGrid, Box, Card, TextField } from "@shopify/polaris";


export default function Settings() {
  const { smUp } = useBreakpoints();

  return (
    <Page fullWidth title="Settings">
      
      {/* <Divider />

      <BlockStack gap={4}>
        <InlineGrid columns={{ xs: '1fr', md: '2fr 5fr' }} gap={4}>
          <Box as="section" paddingInlineStart={{ xs: 4, sm: 0 }} paddingInlineEnd={{ xs: 4, sm: 0 }}>
            <BlockStack gap={4}>
              <Text as="h3" variant="headingMd">
                InterJambs
              </Text>
              <Text as="p" variant="bodyMd">
                Interjambs are the rounded protruding bits of your puzzle piece
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <BlockStack gap={4}>
              <TextField label="Interjamb style" />
              <TextField label="Interjamb ratio" />
            </BlockStack>
          </Card>
        </InlineGrid>
        {smUp ? <Divider /> : null}
        <InlineGrid columns={{ xs: '1fr', md: '2fr 5fr' }} gap={4}>
          <Box as="section" paddingInlineStart={{ xs: 4, sm: 0 }} paddingInlineEnd={{ xs: 4, sm: 0 }}>
            <BlockStack gap={4}>
              <Text as="h3" variant="headingMd">
                Dimensions
              </Text>
              <Text as="p" variant="bodyMd">
                Interjambs are the rounded protruding bits of your puzzle piece
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <BlockStack gap={4}>
              <TextField label="Horizontal dimension" />
              <TextField label="Vertical dimension" />
            </BlockStack>
          </Card>
        </InlineGrid>
      </BlockStack> */}
     
    </Page>
  );
}



 {/* <Text as="h1" fontWeight="bold" variant="heading3xl">This should follow pattern settings - check shopify polaris documentation</Text> */}
// import { Page } from "@shopify/polaris";
// import { useParams } from 'react-router-dom';



// export default function EditAd(){

//     const { id } = useParams();
//     console.log("Extracted id from the blog article:" +id);

//     // const or let - useState etc.
//     // Get data.
//     // hooks (useEffect) and functions.

//     return(
//         <Page fullWidth
//             title="Edit ad"
//         >

//         </Page>
//     )
// }

import { useParams } from 'react-router-dom';
import React, { useState, useCallback, useEffect } from "react";
import { 
    Page,
    Badge,
    LegacyCard,
    LegacyStack,
    
    InlineStack,
    TextField,
    Card,
    FormLayout,
    Select,
    Link,
    Icon,
    Banner,
    Button,
    Layout,
 } from "@shopify/polaris";
 import { CalendarMinor, ExternalMinor } from "@shopify/polaris-icons";
import  Editor from '../../components/Editor'
import CustomDatePicker from '../../components/CustomDatePicker';

export default function EditAd(){

    const { id } = useParams();
    console.log("Extracted id from the blog article:" +id);

    // const or let - useState etc.
    // Get data.
    // hooks (useEffect) and functions.

    const fontSize = "24px";
    const marginTop = "18px";
    const marginBottom = "20px";
  
    const [value, setValue] = useState("3/4 inch Leather pet collar");
    const [content, setContent] = useState(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia totam laboriosam, cumque ex volupt."
    );
  
    const handleChange = useCallback((newValue) => setValue(newValue), []);
    const handleAdContent = useCallback((newValue) => setContent(newValue), []);
  
    //status select
    const [selected, setSelected] = useState("today");
    const handleSelectChange = useCallback((value) => setSelected(value), []);
    const options = [
      { label: "Active", value: "active" },
      { label: "Unactive", value: "unactive" },
    ];
  
    //placement select
    const [placement, setPlacement] = useState("Bottom-right");
    const handlePlacementChange = useCallback((value) => setPlacement(value), []);
    const placements = [
      { label: "Top-right", value: "topRight" },
      { label: "Top-left", value: "TopLeft" },
      { label: "Bottom-right", value: "bottomRight" },
      { label: "Bottom-left", value: "bottomLeft" },
    ];

    return(
        <Page fullWidth
        backAction={{ content: "Products", url: "#" }}
        title="Edit ad"
        titleMetadata={<Badge status="success">Active</Badge>}
        compactTitle
        primaryAction={{ content: "Save" }}
        actionGroups={[
          {
            title: "More actions",
            actions: [
              {
                content: "Share on Facebook",
                accessibilityLabel: "Individual action label",
                onAction: () => alert("Share on Facebook action"),
              },
            ],
          },
        ]}
      >
        <LegacyStack distribution="fillEvenly">
          <LegacyCard sectioned title="Cost" actions={[{ content: "Report" }]}>
            <p style={{ fontSize }}>
              <b>$218.45</b>
            </p>
          </LegacyCard>
          <LegacyCard
            sectioned
            title="Impressions"
            actions={[{ content: "Report" }]}
          >
            <p style={{ fontSize }}>
              <b>264</b>
            </p>
          </LegacyCard>
          <LegacyCard sectioned title="Clicks" actions={[{ content: "Report" }]}>
            <p style={{ fontSize }}>
              <b>147</b>
            </p>
          </LegacyCard>
          <LegacyCard
            sectioned
            title="Conversions"
            actions={[{ content: "Report" }]}
          >
            <p style={{ fontSize }}>
              <b>29</b>
            </p>
          </LegacyCard>
        </LegacyStack>
        <div style={{ marginTop }}>
          <InlineStack columns={{ xs: 1, md: "2fr 1fr" }} gap={4}>
            <Card>
              <InlineStack gap="3" label="twoThirds">
                <TextField
                  label={<span style={{ fontWeight: "bold" }}>Title</span>}
                  value={value}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <Editor />
              </InlineStack>
            </Card>
  
            <InlineStack gap="5" label="oneThird">
              <Card>
                <Select
                  label={<span style={{ fontWeight: "bold" }}>Status</span>}
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </Card>
              <Card>
                <b>Link</b>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #cccccc",
                    paddingBottom: "5px ",
                    marginBottom: "10px",
                  }}
                >
                  <Link url="https://help.shopify.com/manual" external>
                    https://admin.shopify.com/store/blog...
                  </Link>
                  <Icon source={ExternalMinor} color="base" />
                </div>
  
                <b>Last update</b>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #cccccc",
                    paddingBottom: "5px ",
                    marginBottom: "10px",
                  }}
                >
                  <p>2023‐09‐16 10:18:10−07:00 UTC−07:00</p>
                </div>
                <Select
                  label={<span style={{ fontWeight: "bold" }}>Placement</span>}
                  options={placements}
                  onChange={handlePlacementChange}
                  value={placement}
                />
              </Card>
              <Card>
                <b>Start date</b>
                <CustomDatePicker />
                <b>End date</b>
                <CustomDatePicker />
              </Card>
            </InlineStack>
          </InlineStack>
        </div>
        <Layout.Section>
          <InlineStack align="end">
            <Button destructive>Delete</Button>
          </InlineStack>
        </Layout.Section>
      </Page>
        
    );
}
import {
    InlineStack,
    Modal,
    TextField,
    Select,
    Button,
  } from "@shopify/polaris";
  import React from "react";
  import { useState, useCallback } from "react";
  import KeywordInputTags from "./KeywordInputTags";
  import { useNavigate } from "react-router-dom";
  import { Provider, ResourcePicker } from "@shopify/app-bridge-react";
  
  export default function AdModal({ isOpen, toggleModal }) {
    //select product
    const navigate = useNavigate();
    const [isResourcePickerOpen, setIsResourcePickerOpen] = useState(false);
  
    const handleOpenResourcePicker = () => {
      setIsResourcePickerOpen(true);
    };
  
    const handleResourcePickerClose = () => {
      setIsResourcePickerOpen(false);
    };
  
    //modal hook
    const pageActions = [
      {
        content: "New advertisement",
        onAction: toggleModal,
      },
    ];
  
    //Tone Select
    const [selected, setSelected] = useState("Casual"); // Default selection set to 'Casual'
    const handleSelectChange = useCallback((value) => setSelected(value), []);
    const options = [
      { label: "Casual", value: "Casual" },
      { label: "Friendly", value: "Friendly" },
      { label: "Positive", value: "Positive" },
      { label: "Uplifting", value: "Uplifting" },
      { label: "Encouraging", value: "Encouraging" },
      { label: "Amusing, fun, or witty", value: "Amusing, fun, or witty" },
      { label: "Inspiring", value: "Inspiring" },
      { label: "Humble", value: "Humble" },
      { label: "Helpful", value: "Helpful" },
      { label: "Straightforward or Direct", value: "Straightforward or Direct" },
      { label: "Confident", value: "Confident" },
    ];
  
    //Style select
    const [selectedStyle, setSelectedStyle] = useState("");
  
    const handleStyleChange = useCallback((value) => setSelectedStyle(value), []);
    const styleOptions = [
      { label: "Descriptive", value: "Descriptive" },
      { label: "Expository", value: "Expository" },
      { label: "Creative", value: "Creative" },
      { label: "Persuasive", value: "Persuasive" },
      { label: "Concise", value: "Concise" },
      { label: "Informal", value: "Informal" },
      { label: "Formal", value: "Formal" },
      { label: "Humorous", value: "Humorous" },
      { label: "Emotional", value: "Emotional" },
      { label: "Sensational", value: "Sensational" },
      { label: "Storytelling", value: "Storytelling" },
      { label: "Educational", value: "Educational" },
      { label: "Inspirational", value: "Inspirational" },
      { label: "Direct", value: "Direct" },
      { label: "Comparative", value: "Comparative" },
    ];
    return (
      <Modal
        open={isOpen}
        onClose={toggleModal}
        title="Generate new ad"
        primaryAction={{
          content: "Generate",
          onAction: toggleModal,
        }}
      >
        <Modal.Section>
          <InlineStack gap="3">
            <InlineStack columns={["twoThirds", "twoThirds"]} gap={4}>
              <TextField
                label={<span style={{ fontWeight: "bold" }}>Ad name</span>}
                autoComplete="off"
              />
              <TextField
                label={
                  <span style={{ fontWeight: "bold" }}>Target audience</span>
                }
                autoComplete="off"
              />
            </InlineStack>
            <InlineStack gap={1}>
              <b>Product</b>
              <Button onClick={handleOpenResourcePicker} fullWidth>
                Select Product
              </Button>
              {isResourcePickerOpen && (
                <ResourcePicker
                  resourceType="Product"
                  open={isResourcePickerOpen}
                  onCancel={handleResourcePickerClose}
                  onSelection={() => {
                    handleResourcePickerClose();
                  }}
                />
              )}
            </InlineStack>
            <InlineStack gap={4}>
              <KeywordInputTags />
            </InlineStack>
  
            <InlineStack columns={["twoThirds", "twoThirds"]} gap={4}>
              <Select
                label={<span style={{ fontWeight: "bold" }}>Tone</span>}
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
              <Select
                label={<span style={{ fontWeight: "bold" }}>Style</span>}
                options={styleOptions}
                onChange={handleStyleChange}
                value={selectedStyle}
              />
            </InlineStack>
          </InlineStack>
        </Modal.Section>
      </Modal>
    );
  }
  
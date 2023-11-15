import React, { useState } from "react";
import {
  Button,
  InlineStack,
 
  LegacyStack,
  Tag,
  TextField,
  
} from "@shopify/polaris";

export default  function KeywordInputTags() {
  const [tags, setTags] = useState([
  
  ]);
  const [newTag, setNewTag] = useState("");

  const handleTagInputChange = (value) => {
    setNewTag(value);
  };

  const handleTagInputKeyPress = (event) => {
    if (event.key === "Enter" && newTag.trim() !== "") {
      addNewTag();
    }
  };

  const removeTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const addNewTag = () => {
    if (newTag.trim() !== "") {
      setTags((prevTags) => [...prevTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const tagMarkup = tags.map((tag) => (
    <Tag key={tag} onRemove={() => removeTag(tag)}>
      {tag}
    </Tag>
  ));

  return (
    <LegacyStack vertical spacing="extraTight">
      <InlineStack columns={['twoThirds', 'oneThird']} gap={3}>
        <TextField
          label={<span style={{ fontWeight: "bold" }}>Keywords</span>}
          onChange={handleTagInputChange}
          onKeyPress={handleTagInputKeyPress}
          autoComplete="off"
          value={newTag}
        />
        <InlineStack align="end"><Button primary onClick={addNewTag} >
          Add
        </Button></InlineStack>
        
      </InlineStack>
      <LegacyStack spacing="tight">{tagMarkup}</LegacyStack>
    </LegacyStack>
  );
}



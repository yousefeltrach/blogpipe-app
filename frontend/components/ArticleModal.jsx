import React, { useState, useCallback, useMemo } from 'react';
import {
  Combobox,
  Listbox,
  Tag,
  Page,
  Layout,
  Button,

  InlineStack,
  TextContainer,
  Select,
  Text,
  TextField
} from '@shopify/polaris';
import KeywordInputTags from './KeywordInputTags';

export default function ArticleModal() {
  // Topics Combobox
  const topicsOptions = useMemo(
    () => [
      { value: 'technology', label: 'Technology' },
      { value: 'sports', label: 'Sports' },
      { value: 'fashion', label: 'Fashion' },
      // Add more topics here
    ],
    []
  );

  const [selectedTopic, setSelectedTopic] = useState(undefined);
  const [inputTopic, setInputTopic] = useState('');

  const updateTopicText = useCallback((value) => {
    setInputTopic(value);
  }, []);

  const updateTopicSelection = useCallback((selected) => {
    setSelectedTopic(selected);
    updateTopicText('');
  }, [updateTopicText]);

  // Article Type Options
  const articleTypeOptions = [
    { label: 'Neutral', value: 'Neutral' },
    { label: 'How-To', value: 'How-To' },
    { label: 'Listicle', value: 'Listicle' },
    { label: 'Curated', value: 'Curated' },
    { label: 'Fun', value: 'Fun' },
    { label: 'What', value: 'What' },
    { label: 'Why', value: 'Why' },
    { label: 'Feature', value: 'Feature' },
    { label: 'FAQ', value: 'FAQ' },
    { label: 'Comparison', value: 'Comparison' },
  ];

  // Tone Options
  const toneOptions = [
    { label: 'Neutral', value: 'Neutral' },
    { label: 'Informal', value: 'Informal' },
    { label: 'Casual', value: 'Casual' },
    { label: 'Friendly', value: 'Friendly' },
    { label: 'Positive', value: 'Positive' },
    { label: 'Uplifting', value: 'Uplifting' },
    { label: 'Encouraging', value: 'Encouraging' },
    { label: 'Amusing', value: 'Amusing' },
    { label: 'Inspiring', value: 'Inspiring' },
    { label: 'Humble', value: 'Humble' },
    { label: 'Helpful', value: 'Helpful' },
    { label: 'Straightforward', value: 'Straightforward' },
    { label: 'Confident', value: 'Confident' },
    { label: 'Assertive', value: 'Assertive' },
    { label: 'Formal', value: 'Formal' },
    { label: 'Authoritative', value: 'Authoritative' },
    { label: 'Bold', value: 'Bold' },
  ];

  const [selectedArticleType, setSelectedArticleType] = useState('Neutral');
  const [selectedTone, setSelectedTone] = useState('Neutral');

  const handleSelectArticleTypeChange = useCallback(
    (value) => setSelectedArticleType(value),
    []
  );

  const handleSelectToneChange = useCallback(
    (value) => setSelectedTone(value),
    []
  );

  return (
    <Page>
      <InlineStack >

        <Combobox
          activator={
            <Combobox.TextField
              label=<Text fontWeight='bold'> Topics </Text>
              onChange={updateTopicText}
              value={inputTopic}
              placeholder="Topic"
              autoComplete="off"
            />
          }
        >
          {topicsOptions.length > 0 ? (
            <Listbox onSelect={updateTopicSelection}>
              {topicsOptions.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  selected={selectedTopic === option.value}
                  accessibilityLabel={option.label}
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox>
          ) : null}
        </Combobox>

      </InlineStack>
      <KeywordInputTags />

      <InlineStack columns={2} gap="4">
        <Select
          label=<Text fontWeight='bold'> Article Type </Text>
          options={articleTypeOptions}
          onChange={handleSelectArticleTypeChange}
          value={selectedArticleType}
        />

        <Select
          label=<Text fontWeight='bold'> Tone </Text>
          options={toneOptions}
          onChange={handleSelectToneChange}
          value={selectedTone}
        />
      </InlineStack>
    </Page>
  );
}


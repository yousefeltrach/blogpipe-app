import React from 'react'
import {Banner} from '@shopify/polaris';

export default function ActionEmptyState() {
  return (
    <Banner
    title="Your shipping label is ready to print."
    tone="success"
    action={{content: 'Print label'}}
    onDismiss={() => {}}
  />
  )
}

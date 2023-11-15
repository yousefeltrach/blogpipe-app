import { EmptyState, Link, Text } from '@shopify/polaris';
import { useNavigate } from "@shopify/app-bridge-react";

import React from 'react';

export default function AdEmptyState() {

    const navigate = useNavigate();

    return (
        <EmptyState
            heading="Generate new ad"
            action={
                {
                    content: 'Create new ad',
                    // onAction: () => ShowGenerateModal()
                }
            }
            secondaryAction={{
                content: 'Learn more',
                url: '#',
            }}
            footerContent={
                <p>
                    If you need to understand how it works, check our documentation form
                    {' '}
                    <Link monochrome url="#">
                        help center
                    </Link>
                    .
                </p>
            }
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
            <Text as='p' fontWeight='medium' variant='bodyLg'>Generate ad to inject in a blog post.</Text>
        </EmptyState>
    );
}
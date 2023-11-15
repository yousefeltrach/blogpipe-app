import {
    IndexTable,
    useIndexResourceState,
    Text,
    Link,
    Card,
} from '@shopify/polaris';
import { DeleteMinor } from "@shopify/polaris-icons";

import React, { useState } from 'react';

import { useNavigate, useToast } from "@shopify/app-bridge-react";
import ArticleEmptyState from './ArticleEmptyState.jsx';

export default function ArticlesIndexTable({ articles, isLoading }) {

    const emptyStateMarkup = (
        <ArticleEmptyState />
    );

    const resourceName = {
        singular: 'article',
        plural: 'articles',
    };

    const toast = useToast();
    const navigate = useNavigate();

    const {
        selectedResources,
        allResourcesSelected,
        handleSelectionChange,
        clearSelection,
        removeSelectedResources,
    } = useIndexResourceState(articles);

    // derive selectedArticles state
    const selectedArticles = selectedResources.filter(resourceId =>
        articles.some(article => article.id === resourceId)
    );

    const handleArticlesUpdate = (responses, resourceIds) => {
        console.log("This handle bulk delete of articles to update the index table.");
        // let successCount = 0;
        // let failureCount = 0;

        // // Use `forEach` to iterate over each response and corresponding resourceId
        // responses.forEach((response, index) => {
        //     const resourceId = resourceIds[index];
        //     // Update your `articles` data based on the `response` and `resourceId`
        //     if (response?.success) {
        //         successCount += 1;
        //     } else if (response?.error) {
        //         failureCount += 1;
        //     }
        // });

        // // Show a single toast message based on the overall result
        // if (failureCount > 0) {
        //     toast.show(`Successfully updated products and variants for ${successCount} articles, but failed for ${failureCount} articles.`);
        // } else {
        //     toast.show(`Successfully updated products and variants for all ${successCount} articles.`);
        // }

        // clearSelection();
    }

    const handleBulkDelete = async (resourcesToDelete) => {
        console.log("This handle bulk delete action of articles.");

        // for (let resourceId of resourcesToDelete) {
        //     let response;
        //     let trialName = getTrialNameById(resourceId); // This function should be defined by you
        //     try {
        //         response = await api.trial.delete(String(resourceId));
        //         console.log({ "response": response });
        //         if (response?.error) {
        //             setTimeout(() => {
        //                 toast.show(`Failed to remove ${trialName}.`);
        //             }, 1000); // Delay of 1s.
        //         } else {
        //             setTimeout(() => {
        //                 toast.show(`${trialName} successfully removed.`);
        //             }, 1000); // Delay of 1s.
        //         }
        //     } catch (error) {
        //         console.error(response?.error);
        //         setTimeout(() => {
        //             toast.show(`Failed to remove ${trialName}.`);
        //         }, 1000); // Delay of 1s.
        //     }
        // }
    }

    const handleBulkUnPublishArticles = async (resourcesToUnPublish) => {
        console.log("This action is to unpublish articles.");
    }

    const handleBulkPublishArticles = async (resourcesToUnPublish) => {
        console.log("This action is to publish articles.");
    }

    const promotedBulkActions = [
        {
            content: 'Publish',
            onAction: () => {

                console.log('Selected resource IDs:', selectedArticles);
                // implement bulk delete
                handleBulkPublishArticles(selectedArticles);
            },
        }
    ];

    const bulkActions = [
        {
            content: `Delete ${selectedArticles.length} ${selectedArticles.length > 1 ? resourceName.plural : resourceName.singular}.`,
            destructive: true,
            icon: DeleteMinor,
            onAction: () => {

                console.log('Selected resource IDs:', selectedArticles);
                // implement bulk delete
                handleBulkDelete(selectedArticles);
            },
        },
        {
            content: `UnPublish ${selectedArticles.length} ${selectedArticles.length > 1 ? resourceName.plural : resourceName.singular}.`,
            destructive: true,
            icon: DeleteMinor,
            onAction: () => {

                console.log('Selected resource IDs:', selectedArticles);
                // implement bulk delete
                handleBulkUnPublishArticles(selectedArticles);
            },
        },
    ];

    console.log(articles);

    const rowMarkup = articles.map(
        (
            { id, title, status },
            index,
        ) => {
            return (
                <IndexTable.Row
                    id={id}
                    key={id}
                    selected={selectedResources.includes(id)}
                    position={index}
                >
                    <IndexTable.Cell>
                        <Link
                            dataPrimaryLink
                            onClick={() => navigate(`/articles/${id}`)}
                        >
                            <Text variant="bodyMd" fontWeight="bold" as="span" alignment='start'>
                                {id || 'missing value'}
                            </Text>
                        </Link>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {title || 'missing value'}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {status || 'missing value'}
                        </Text>
                    </IndexTable.Cell>
                </IndexTable.Row>
            );
        },
    );


    return (
        <>
            <IndexTable
                resourceName={resourceName}
                itemCount={articles.length}
                selectedItemsCount={
                    allResourcesSelected ? 'All' : selectedArticles.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                    {
                        title: 'ID',
                        alignment: 'start',
                        tooltipContent: "Unique identifier for the article."
                    },
                    {
                        title: 'Title',
                        alignment: 'start',
                        tooltipContent: "Title of the article."
                    },
                    {
                        title: 'Status',
                        alignment: 'start',
                        tooltipContent: "Status of the article."
                    },
                ]}
                bulkActions={bulkActions}
                promotedBulkActions={promotedBulkActions}
                emptyState={emptyStateMarkup}
                loading={isLoading}
            >
                {rowMarkup}
            </IndexTable>
        </>
    );
}
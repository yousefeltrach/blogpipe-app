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
import AdEmptyState from './AdEmptyState.jsx';

export default function AdsIndexTable({ ads, isLoading }) {

    const emptyStateMarkup = (
        <AdEmptyState />
    );

    const resourceName = {
        singular: 'ad',
        plural: 'ads',
    };

    const toast = useToast();
    const navigate = useNavigate();

    const {
        selectedResources,
        allResourcesSelected,
        handleSelectionChange,
        clearSelection,
        removeSelectedResources,
    } = useIndexResourceState(ads);

    // derive selectedAds state
    const selectedAds = selectedResources.filter(resourceId =>
        ads.some(ad => ad.id === resourceId)
    );

    const handleAdsUpdate = (responses, resourceIds) => {
        console.log("This handle bulk delete of ads to update the index table.");
        // let successCount = 0;
        // let failureCount = 0;

        // // Use `forEach` to iterate over each response and corresponding resourceId
        // responses.forEach((response, index) => {
        //     const resourceId = resourceIds[index];
        //     // Update your `ads` data based on the `response` and `resourceId`
        //     if (response?.success) {
        //         successCount += 1;
        //     } else if (response?.error) {
        //         failureCount += 1;
        //     }
        // });

        // // Show a single toast message based on the overall result
        // if (failureCount > 0) {
        //     toast.show(`Successfully updated products and variants for ${successCount} ads, but failed for ${failureCount} ads.`);
        // } else {
        //     toast.show(`Successfully updated products and variants for all ${successCount} ads.`);
        // }

        // clearSelection();
    }

    const handleBulkDelete = async (resourcesToDelete) => {
        console.log("This handle bulk delete action of ads.");

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

    const handleBulkUnPublishAds = async (resourcesToUnPublish) => {
        console.log("This action is to unpublish ads.");
    }

    const handleBulkPublishAds = async (resourcesToUnPublish) => {
        console.log("This action is to publish ads.");
    }

    const promotedBulkActions = [
        {
            content: 'Publish',
            onAction: () => {

                console.log('Selected resource IDs:', selectedAds);
                // implement bulk delete
                handleBulkPublishAds(selectedAds);
            },
        }
    ];

    const bulkActions = [
        {
            content: `Delete ${selectedAds.length} ${selectedAds.length > 1 ? resourceName.plural : resourceName.singular}.`,
            destructive: true,
            icon: DeleteMinor,
            onAction: () => {

                console.log('Selected resource IDs:', selectedAds);
                // implement bulk delete
                handleBulkDelete(selectedAds);
            },
        },
        {
            content: `UnPublish ${selectedAds.length} ${selectedAds.length > 1 ? resourceName.plural : resourceName.singular}.`,
            destructive: true,
            icon: DeleteMinor,
            onAction: () => {

                console.log('Selected resource IDs:', selectedAds);
                // implement bulk delete
                handleBulkUnPublishAds(selectedAds);
            },
        },
    ];

    console.log(ads);

    const rowMarkup = ads.map(
        (
            { id, adName, status,
                startDate,
                  endDate,
               impressions,
                   clicks,
               lastUpdate },
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
                            onClick={() => navigate(`/ads/${id}`)}
                        >
                            <Text variant="bodyMd" fontWeight="bold" as="span" alignment='start'>
                                {id || 'missing value'}
                            </Text>
                        </Link>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {adName || 'missing value'}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {status || 'missing value'}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {startDate || 'missing value'}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {endDate || 'missing value'}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {impressions|| 'missing value'}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {clicks || 'missing value'}
                        </Text>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                        <Text variant="bodyMd" fontWeight="regular" as="span" alignment='start'>
                            {lastUpdate || 'missing value'}
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
                itemCount={ads.length}
                selectedItemsCount={
                    allResourcesSelected ? 'All' : selectedAds.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                    {
                        title: 'ID',
                        alignment: 'start',
                        tooltipContent: "Unique identifier for ad."
                    },
                    {
                        title: 'adNam',
                        alignment: 'start',
                        tooltipContent: "Title of  ad."
                    },
                    {
                        title: 'status',
                        alignment: 'start',
                        tooltipContent: "Title of ad."
                    },
                    {
                        title: 'startDate',
                        alignment: 'start',
                        tooltipContent: "Title of ad."
                    },
                    {
                        title: 'endDate',
                        alignment: 'start',
                        tooltipContent: "Title of ad."
                    },
                    {
                        title: 'impressions',
                        alignment: 'start',
                        tooltipContent: "Title of ad."
                    },
                    {
                        title: 'clicks',
                        alignment: 'start',
                        tooltipContent: "Title of the ad."
                    },
                    {
                        title: 'lastUpdate',
                        alignment: 'start',
                        tooltipContent: "Title of the article."
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



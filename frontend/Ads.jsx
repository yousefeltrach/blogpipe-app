import { Card, Page, Text, Select, Modal,Pagination, InlineStack } from "@shopify/polaris";
import AdsIndexTable from "./components/AdsIndexTable";
import { api } from "./api";
import { useState, useCallback, useEffect } from "react";
import { useFindMany } from "@gadgetinc/react";
import AdModal from "./components/AdModal";


export default function Ads() {

    /**
    * CHANGE NUM_RECORDS TO MODIFY THE NUMBER OF RECORDS FETCHED AT A SINGLE TIME
    */
    const NUM_RECORDS = 10;
    // Add state for rows per page
    const [rowsPerPage, setRowsPerPage] = useState(NUM_RECORDS);


    // React state to manage table data and settings, as well as pagination cursor
    const [ads, setAds] = useState([]);
    const [cursor, setCursor] = useState({ first: rowsPerPage });

    /**
     * CHANGE shopifyShop TO YOUR GADGET MODEL'S API IDENTIFIER TO FETCH DIFFERENT DATA
     */
    const [{ data, fetching, error }] = useFindMany(api.blogPipeAds, {
        ...cursor,
        select: {
            id: true,
            adName: true,
            status: true,
            startDate: true,
            endDate: true,
            impressions: true,
            clicks: true,
            lastUpdate: true,

        }
    });

    // Update the cursor when rowsPerPage changes
    useEffect(() => {
        setCursor({ first: rowsPerPage });
    }, [rowsPerPage]);

    const handleRowsPerPageChange = useCallback((value) => {
        setRowsPerPage(parseInt(value));
    }, []);

    useEffect(() => {
        if (data) {
            // transform the data to match the structure of "trials"
            let transformedData = data.map(d => ({
                id: d.id,
                adName: d.adName,
                status: d.status,
                startDate: d.startDate,
                endDate: d.endDate,
                impressions: d.impressions,
                clicks: d.clicks,
                lastUpdate: d.lastUpdate,

            }));

            // filter transformed data to only include trials with category "TRY_BEFORE_YOU_BUY"
            // transformedData = transformedData.filter(d => d.sellingPlans.includes('TRY_BEFORE_YOU_BUY'));

            // set transformed data to trials
            setAds(transformedData);
            console.log(transformedData);
        }
    }, [data]);

    // update the pagination functions to use Polaris's Pagination component
    const handleNextPage = useCallback(() => {
        // use first + after to page forwards
        setCursor({ first: rowsPerPage, after: data.endCursor });
    }, [data]);

    const handlePreviousPage = useCallback(() => {
        // use last + before to page backwards
        setCursor({ last: rowsPerPage, before: data.startCursor });
    }, [data]);

    // display any request errors
    if (error) {
        return (
            <Page title="Error">
                <Text variant="bodyMd" as="p">
                    Error: {error.toString()}
                </Text>
            </Page>
        );
    }

    //modal toggle
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Page

            fullWidth
            title="Ads"
            primaryAction={
                {
                    content: "Generate new ad",
                    onAction: toggleModal,
                    // onAction: showGenerateAdModal()
                }
            }

        >
            {data && (
                <AdsIndexTable ads={ads} isLoading={fetching} />
            )}
            {data && ads.length > 0 && (
                <>
                    <br />
                    <InlineStack align="end" blockAlign="end">
                        <Select
                            label="Ads per page:"
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
            < AdModal isOpen={isModalOpen} toggleModal={toggleModal} />
        </Page>
    )
}
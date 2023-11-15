import {
    Page,
    Button,
    InlineStack,
    Box,
    Card,
    Layout,
    FormLayout,
    TextField,
} from "@shopify/polaris";
import { useParams } from 'react-router-dom';
import DeleteModal from "../../components/DeleteModal"
import Editor from '../../components/Editor';
import ArticleDatePicker from "../../components/ArticleDatePicker";
import SeoChart from "../../components/SeoChart";
import SeoAnalysis from "../../components/SeoAnalysis";


export default function EditArticle() {

    const { id } = useParams();
    console.log("Extracted id from the blog article:" + id);

    return (
        <Page fullWidth
            title="Edit blog post"
            backAction={{ content: "Articles", url: "/articles" }}
            // backAction={() => navigate("/Articles")}

            primaryAction={<Button variant="primary">Save</Button>}
            secondaryActions={[
                {
                    content: 'Discard',
                    // destructive: true,
                },
            ]}
        >
            <InlineStack columns={{ xs: 1, md: '2fr 1fr' }} gap="4">

                {/* ======== editor card =========== */}
                <InlineStack gap="2" >
                    <Card>
                        <Editor />
                        <Box appearance="bordered" borderRadius="base" minHeight="30rem" />

                        <Box />
                    </Card>
                </InlineStack>
                <InlineStack gap={{ xs: '4', md: '2' }}>

                    {/* ======== DATE PICKER =========== */}
                    <Card>
                        <ArticleDatePicker />
                    </Card>

                    {/* ======== seo card =========== */}

                    <Card>
                        <SeoChart />
                        <SeoAnalysis />
                    </Card>

                </InlineStack>

            </InlineStack>

            {/* Delete Button  */}

            <Layout.Section>
                <InlineStack align="end">
                    <DeleteModal />
                </InlineStack>
            </Layout.Section>
        </Page>
    )
}





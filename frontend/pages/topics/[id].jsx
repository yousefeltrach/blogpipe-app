import { Page } from "@shopify/polaris";
import { useParams } from 'react-router-dom';



export default function EditTopic(){

    const { id } = useParams();
    console.log("Extracted id from the topic:" +id);

    // const or let - useState etc.
    // Get data.
    // hooks (useEffect) and functions.

    return(
        <Page fullWidth
            title="Edit topic"
        >

        </Page>
    )
}
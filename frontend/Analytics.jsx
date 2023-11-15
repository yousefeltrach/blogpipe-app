import { Page,Text } from "@shopify/polaris";
import Statistics from './components/analytics/Statistics'
import FullScreen from "./components/FullScreen";
import DateRangePicker from "./components/analytics/DateRangePicker";

export default function Analytics(){
    return (
        <Page  fullWidth>
           
          <FullScreen/>
           <br/>
           <DateRangePicker/>
           <br/>
           <Statistics/>
           
       
        </Page>
  
    )
}



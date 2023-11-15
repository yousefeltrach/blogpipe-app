import React, { useState, useCallback } from 'react';
import { Page, Card, ButtonGroup, Button, Text,LegacyStack,Icon } from '@shopify/polaris';
import { LineChart, Line, XAxis, YAxis,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
     ChevronDownMinor,
     ChevronUpMinor,
     MinusMinor,
   } from "@shopify/polaris-icons";
import  PopOver  from './PoppOver';
import ViewReportButton from './ViewReportButton'
import Detail from '../onboarding/Detail';

const data = [
  { name: '12:00 AM', value: 0 },
  { name: '5:00 AM', value: 0 },
  { name: '10:00 AM', value: 0 },
  { name: '3:00 PM', value: 0 },
  { name: '8:00 PM', value: 0 },
  // Add more data points as needed
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: 'white', padding: '5px', border: '1px solid #ccc' }}>
        <p>{payload[0].payload.name}</p>
        <p>{`Value : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const buttonStyle = {
  background: 'transparent',
  border: 'none',
  boxShadow: 'none',
};

export default function Dashboard()  {
  const [selectedSection, setSelectedSection] = useState('session');
  const [dashboardVisible, setDashboardVisible] = useState(true);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  // Define a callback function to toggle the dashboard visibility
  const toggleDashboard = useCallback(() => {
    setDashboardVisible((prevVisible) => !prevVisible);
  }, []);

  const renderButton = (section, label) => (
    <Button
      fullWidth
      variant="tertiary"
      textAlign="start"
      onClick={() => handleSectionClick(section)}
    >
      <LegacyStack vertical spacing="extraTight">
        <Text
          variant="bodyLg"
          className="border-dashed border-2 border-sky-500"
          textDecorationLine="line"
        >
          {label}
        </Text>
        <LegacyStack spacing="none">
          <Text variant="headingMd">0</Text>
          <Icon source={MinusMinor} tone="base" />
        </LegacyStack>
      </LegacyStack>
    </Button>
  );
  return (
<Page>
<PopOver />
<br />

  <div style={{ background: "white" }}>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px', }}>
      {renderButton('session', 'Session')}
      {renderButton('totalSales', 'Total Sales')}
      {renderButton('totalOrders', 'Total Orders')}
      {renderButton('conversionRate', 'Conversion Rate')}

      <Button onClick={toggleDashboard} variant="tertiary" size="slim" icon={dashboardVisible ? ChevronUpMinor : ChevronDownMinor}>
        {dashboardVisible ? <ChevronUpMinor /> : <ChevronDownMinor />}
      </Button>
    </div>
    {dashboardVisible && (
      <>
        <LegacyStack alignment="center" distribution="trailing">
          <ViewReportButton />
        </LegacyStack>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              ticks={[0, 5, 10]}
              domain={[0, 'dataMax']}
              orientation="left"
            />
             <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} dot={false} strokeWidth={2}  />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" horizontal={false} vertical={false} />
          </LineChart>
        </ResponsiveContainer>
        
        <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem', padding:'20px' }}>
          <div style={{ marginRight: '10px' }} >
          <Button Button variant="plain"  onMouseOver={e => e.currentTarget.style.color = "#5c6ac4"} onMouseOut={e => e.currentTarget.style.color = "#212b36"}>
               <Text variation="strong">Nov 4, 2023</Text>
             </Button>
             </div> 
             <Button Button variant="plain"   onMouseOver={e => e.currentTarget.style.color = "#5c6ac4"} onMouseOut={e => e.currentTarget.style.color = "#212b36"}>
               <Text variation="strong">Nov 3, 2023</Text>
             </Button>
          </div>
      </>
    )}
    
  </div>
     <Detail/>
</Page>
);
};


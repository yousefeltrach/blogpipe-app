import {
  LegacyCard,
  LegacyStack,
  Button,
  Collapsible,
  TextContainer,
  InlineStack,
  Card,
  Text,
  Icon
} from '@shopify/polaris';
import {
  ChevronDownMinor,
  ChevronUpMinor,
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';
import Dashboardd from './Dashboardd';
import PoppOver from './PoppOver';
import Details from '../onboarding/Detail';


export default function CollapsibleDashboard() {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);

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

        </LegacyStack>
      </LegacyStack>
    </Button>
  );

  return (
    <div style={{ height: '200px' }} >
            <PoppOver/>
             <br/>
      <LegacyCard sectioned>
        <LegacyStack vertical>
          <InlineStack wrap={false}>
            {renderButton('session', 'Session')}
            {renderButton('totalSales', 'Total Sales')}
            {renderButton('totalOrders', 'Total Orders')}
            {renderButton('conversionRate', 'Conversion Rate')}

            <InlineStack align="end">
              <Button
                onClick={handleToggle}
                aria-expanded={open}
                aria-controls="basic-collapsible"
                size="slim"
                variant="plain"
                icon={open ? <ChevronUpMinor /> : <ChevronDownMinor />} // Use smaller icons
              >
                {open ? (
                  <ChevronUpMinor style={{ width: '20px', height: '20px' }} />
                ) : (
                  <ChevronDownMinor style={{ width: '20px', height: '20px' }} />
                )}
              </Button>
            </InlineStack>
          </InlineStack>
          <Collapsible
            open={open}
            id="basic-collapsible"
            transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
            expandOnPrint
          >
            <>
              <Dashboardd />
            </>
          </Collapsible>
        </LegacyStack>
      </LegacyCard>
      <br/>
      <Details/>
    </div>
  );
}
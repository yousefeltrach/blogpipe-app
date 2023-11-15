// import { useState } from 'react';
// import { Tooltip, Button, Collapsible, CalloutCard, BlockStack, Icon } from '@shopify/polaris';
// import { CircleTickMajor, CirclePlusMajor } from '@shopify/polaris-icons';

// export default function SetupGuide() {
//     // Set 'firstProduct' to be open by default.
//     const [openSection, setOpenSection] = useState('firstProduct');
//     // Initialize an object to track the "done" state for each section.
//     const [checkedSections, setCheckedSections] = useState({});

//     const handleToggle = (section) => {
//         setOpenSection(openSection === section ? null : section);
//     };

//     const handleIconClick = (section) => {
//         // Toggle the "done" state for the clicked section.
//         setCheckedSections((prev) => ({
//             ...prev,
//             [section]: !prev[section],
//         }));
//     };

//     const renderCalloutCard = (
//         title,
//         illustration,
//         primaryActionText,
//         secondaryActionText,
//         description
//     ) => (
//         <CalloutCard
//             title={title}
//             illustration={illustration}
//             primaryAction={{ content: primaryActionText }}
//             secondaryAction={{ content: secondaryActionText }}
//         >
//             <p>{description}</p>
//         </CalloutCard>
//     );

//     const renderTooltipIcon = (section) => (
//         <Tooltip content={checkedSections[section] ? 'Mark as not done' : 'Mark as done'}>
//             <Button onClick={() => handleIconClick(section)} variant="tertiary">
//                 <Icon source={checkedSections[section] ? CircleTickMajor : CirclePlusMajor} color="base" />
//             </Button>
//         </Tooltip>
//     );

//     return (
//         <div style={{ width: '57rem' }}>
//             <BlockStack alignment="stretch" spacing="loose">
//                 {/* Add your first product */}
//                 <Button
//                     icon={renderTooltipIcon('firstProduct')}
//                     onClick={() => handleToggle('firstProduct')}
//                     ariaExpanded={openSection === 'firstProduct'}
//                     ariaControls="first-product-collapsible"
//                     fullWidth
//                     textAlign="start"
//                     variant="tertiary"
//                 >
//                     Add your first product
//                 </Button>
//                 <Collapsible
//                     open={openSection === 'firstProduct'}
//                     id="first-product-collapsible"
//                 >
//                     {renderCalloutCard(
//                         'Add your first product',
//                         'illustrationURL1',
//                         'Customize product',
//                         'Learn more',
//                         'Upload your products and start selling.'
//                     )}
//                 </Collapsible>

//                 {/* Customize your online store */}
//                 <Button
//                     icon={renderTooltipIcon('customizeStore')}
//                     onClick={() => handleToggle('customizeStore')}
//                     ariaExpanded={openSection === 'customizeStore'}
//                     ariaControls="customize-store-collapsible"
//                     fullWidth
//                     textAlign="start"
//                     variant="tertiary"
//                 >
//                     Customize your online store
//                 </Button>
//                 <Collapsible
//                     open={openSection === 'customizeStore'}
//                     id="customize-store-collapsible"
//                 >
//                     {renderCalloutCard(
//                         'Customize your online store',
//                         'illustrationURL2',
//                         'Customize store',
//                         'Learn about customization',
//                         'Change the look and feel of your store.'
//                     )}
//                 </Collapsible>

//                 {/* Add a custom domain */}
//                 <Button
//                     icon={renderTooltipIcon('customDomain')}
//                     onClick={() => handleToggle('customDomain')}
//                     ariaExpanded={openSection === 'customDomain'}
//                     ariaControls="custom-domain-collapsible"
//                     fullWidth
//                     textAlign="start"
//                     variant="tertiary"
//                 >
//                     Add a custom domain
//                 </Button>
//                 <Collapsible
//                     open={openSection === 'customDomain'}
//                     id="custom-domain-collapsible"
//                 >
//                     {renderCalloutCard(
//                         'Add a custom domain',
//                         'illustrationURL3',
//                         'Set up domain',
//                         'Domain help',
//                         'Personalize your store URL with a custom domain.'
//                     )}
//                 </Collapsible>

//                 {/* Set up Shopify Payments */}
//                 <Button
//                     icon={renderTooltipIcon('shopifyPayments')}
//                     onClick={() => handleToggle('shopifyPayments')}
//                     ariaExpanded={openSection === 'shopifyPayments'}
//                     ariaControls="shopify-payments-collapsible"
//                     fullWidth
//                     textAlign="start"
//                     variant="tertiary"
//                 >
//                     Set up Shopify Payments
//                 </Button>
//                 <Collapsible
//                     open={openSection === 'shopifyPayments'}
//                     id="shopify-payments-collapsible"
//                 >
//                     {renderCalloutCard(
//                         'Set up Shopify Payments',
//                         'illustrationURL4',
//                         'Configure payments',
//                         'Payment information',
//                         'Set up your payment gateway to start accepting payments.'
//                     )}
//                 </Collapsible>
//             </BlockStack>
//         </div>
//     );
// }

import { useState } from 'react';
import { Tooltip, Button, Collapsible, CalloutCard, BlockStack, Icon } from '@shopify/polaris';
import { CircleTickMajor, CirclePlusMajor } from '@shopify/polaris-icons';

export default function SetupGuide({ updateProgress }) {
    const [openSection, setOpenSection] = useState('firstProduct');
    const [checkedSections, setCheckedSections] = useState({});

    const handleToggle = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleIconClick = (section) => {
        // Toggle the "done" state for the clicked section.
        setCheckedSections((prev) => {
            const newCheckedSections = {
                ...prev,
                [section]: !prev[section],
            };
            // Update the progress in the parent component.
            updateProgress(newCheckedSections);
            return newCheckedSections;
        });
    };

    const renderCalloutCard = (title, illustration, primaryActionText, secondaryActionText, description) => (
        <CalloutCard
            title={title}
            illustration={illustration}
            primaryAction={{ content: primaryActionText }}
            secondaryAction={{ content: secondaryActionText }}
        >
            <p>{description}</p>
        </CalloutCard>
    );

    const renderTooltipIcon = (section) => (
        <Tooltip content={checkedSections[section] ? 'Mark as not done' : 'Mark as done'}>
            <Button onClick={() => handleIconClick(section)} variant="tertiary">
                <Icon source={checkedSections[section] ? CircleTickMajor : CirclePlusMajor} color="base" />
            </Button>
        </Tooltip>
    );

    return (
        <div style={{ width: '54rem' }}>
            <BlockStack alignment="stretch" spacing="loose" >
                {/* Add your first product */}
                <Button
                    icon={renderTooltipIcon('firstProduct')}
                    onClick={() => handleToggle('firstProduct')}
                    ariaExpanded={openSection === 'firstProduct'}
                    ariaControls="first-product-collapsible"
                    fullWidth
                    textAlign="start"
                    plain
                >
                    Add your first product
                </Button>
                <Collapsible
                    open={openSection === 'firstProduct'}
                    id="first-product-collapsible"
                >
                    {renderCalloutCard(
                        'Add your first product',
                        'illustrationURL1', // Replace with actual URL
                        'Customize product',
                        'Learn more',
                        'Upload your products and start selling.'
                    )}
                </Collapsible>

                {/* Customize your online store */}
                <Button
                    icon={renderTooltipIcon('customizeStore')}
                    onClick={() => handleToggle('customizeStore')}
                    ariaExpanded={openSection === 'customizeStore'}
                    ariaControls="customize-store-collapsible"
                    fullWidth
                    textAlign="start"
                    plain
                >
                    Customize your online store
                </Button>
                <Collapsible
                    open={openSection === 'customizeStore'}
                    id="customize-store-collapsible"
                >
                    {renderCalloutCard(
                        'Customize your online store',
                        'illustrationURL2', // Replace with actual URL
                        'Customize store',
                        'Learn about customization',
                        'Change the look and feel of your store.'
                    )}
                </Collapsible>

                {/* Add a custom domain */}
                <Button
                    icon={renderTooltipIcon('customDomain')}
                    onClick={() => handleToggle('customDomain')}
                    ariaExpanded={openSection === 'customDomain'}
                    ariaControls="custom-domain-collapsible"
                    fullWidth
                    textAlign="start"
                    plain
                >
                    Add a custom domain
                </Button>
                <Collapsible
                    open={openSection === 'customDomain'}
                    id="custom-domain-collapsible"
                >
                    {renderCalloutCard(
                        'Add a custom domain',
                        'illustrationURL3', // Replace with actual URL
                        'Set up domain',
                        'Domain help',
                        'Personalize your store URL with a custom domain.'
                    )}
                </Collapsible>

                {/* Set up Shopify Payments */}
                <Button
                    icon={renderTooltipIcon('shopifyPayments')}
                    onClick={() => handleToggle('shopifyPayments')}
                    ariaExpanded={openSection === 'shopifyPayments'}
                    ariaControls="shopify-payments-collapsible"
                    fullWidth
                    textAlign="start"
                    plain
                >
                    Set up Shopify Payments
                </Button>
                <Collapsible
                    open={openSection === 'shopifyPayments'}
                    id="shopify-payments-collapsible"
                >
                    {renderCalloutCard(
                        'Set up Shopify Payments',
                        'illustrationURL4', // Replace with actual URL
                        'Configure payments',
                        'Payment information',
                        'Set up your payment gateway to start accepting payments.'
                    )}
                </Collapsible>
            </BlockStack>
        </div>
    );
}

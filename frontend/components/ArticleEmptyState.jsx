import { EmptyState, Link, Text, Frame, Modal, LegacyStack } from '@shopify/polaris';
import { useNavigate } from "@shopify/app-bridge-react";
import ArticleModal from "./ArticleModal"
import React, {useState, useCallback} from 'react';

export default function ArticleEmptyState() {

    const navigate = useNavigate();
      // modal toggleModal
      const [active, setActive] = useState(false);

      const toggleModal = useCallback(() => setActive((active) => !active), []);

      const activator = <p onClick={toggleModal}></p>;

    return (
        <EmptyState
            heading="Generate new blog post"
            action={
                {
                    content: 'Create new blog post',
                    // onAction: () => ShowGenerateModal()
                    onAction: toggleModal 
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
            <Text as='p' fontWeight='medium' variant='bodyLg'>Generate new blog post.</Text>

            <div style={{height: '500px'}}>
      <Frame>
        <Modal
          activator={activator}
          open={active}
          onClose={toggleModal}
          title="Get a shareable link"
          primaryAction={{
            content: 'Close',
            onAction: toggleModal,
          }}
        >
          <Modal.Section>
            <LegacyStack vertical>
              <LegacyStack.Item>
               <ArticleModal/>
              </LegacyStack.Item>
            </LegacyStack>
          </Modal.Section>
        </Modal>
      </Frame>
    </div>

        </EmptyState>
    );
}
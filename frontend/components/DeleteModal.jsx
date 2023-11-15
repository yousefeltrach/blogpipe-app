import React, { useState } from 'react';
import {
  InlineStack,
  Button,
  Modal,
  Layout,
} from '@shopify/polaris';

// App component
export default function Delete() {
  const [isOpen, setIsOpen] = useState(false);
  const [blogTitle, setBlogTitle] = useState('');
  const [showTitleError, setShowTitleError] = useState(false);

  const handleDelete = () => {
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    if (blogTitle.trim() === '') {
      setShowTitleError(true);
    } else {
      // Here, you can implement the logic to delete the blog post.
      // You can access the blogTitle variable to get the title entered by the user.
      setShowTitleError(false); // Reset the error state
      setIsOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setBlogTitle(''); // Reset the blogTitle when closing the modal.
    setShowTitleError(false); // Reset the error state
  };

  return (
    <div>
      <Layout.Section>
        <InlineStack alignment="trailing">
          <Button destructive onClick={handleDelete}>
            Delete
          </Button>
        </InlineStack>
      </Layout.Section>

      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Section>
          <h2>Confirm Deletion</h2>
          <p>Are you sure you want to delete this blog post?</p>
          <input
            type="text"
            placeholder="Enter Blog Title"
            value={blogTitle}
            onChange={(e) => {
              setBlogTitle(e.target.value);
              setShowTitleError(false); // Hide the error message when the input changes
            }}
          />
          {showTitleError && (
            <p style={{ color: 'red' }}>Please enter a blog title</p>
          )}
        </Modal.Section>
        <Modal.Section>
          <Button destructive onClick={handleConfirmDelete}>
            Confirm Delete
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </Modal.Section>
      </Modal>
    </div>  
  );
}
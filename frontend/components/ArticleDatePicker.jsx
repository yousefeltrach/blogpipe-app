import React, { useState, useRef, useEffect } from "react";
import {
  InlineStack,
  Button,
  Box,
  Popover,
  TextField,
  Icon,
  Card,
  DatePicker,
} from "@shopify/polaris";
import {
    CalendarMinor
  } from '@shopify/polaris-icons';

  export default  function ArticleDatePicker() {
    function nodeContainsDescendant(rootNode, descendant) {
        if (rootNode === descendant) {
          return true;
        }
        let parent = descendant.parentNode;
        while (parent != null) {
          if (parent === rootNode) {
            return true;
          }
          parent = parent.parentNode;
        }
        return false;
      }
    
      const [visible, setVisible] = useState(false);
      const [selectedDate, setSelectedDate] = useState(new Date());
      const [{ month, year }, setDate] = useState({
        month: selectedDate.getMonth(),
        year: selectedDate.getFullYear(),
      });
      const formattedValue = selectedDate.toISOString().slice(0, 10);
      const datePickerRef = useRef(null);
    
      function isNodeWithinPopover(node) {
        return datePickerRef?.current
          ? nodeContainsDescendant(datePickerRef.current, node)
          : false;
      }
    
      function handleInputValueChange() {
        console.log("handleInputValueChange");
      }
    
      function handleOnClose({ relatedTarget }) {
        setVisible(false);
      }
    
      function handleMonthChange(month, year) {
        setDate({ month, year });
      }
    
      function handleDateSelection({ end: newSelectedDate }) {
        const adjustedSelectedDate = new Date(
            newSelectedDate.getFullYear(),
            newSelectedDate.getMonth(),
            newSelectedDate.getDate(),
            selectedDate.getHours(), // Preserve the hours from the original selected date
            selectedDate.getMinutes(), // Preserve the minutes from the original selected date
            selectedDate.getSeconds() // Preserve the seconds from the original selected date
          );
        setSelectedDate(adjustedSelectedDate);
        setVisible(false);
      }
    
      useEffect(() => {
        if (selectedDate) {
          setDate({
            month: selectedDate.getMonth(),
            year: selectedDate.getFullYear(),
          });
        }
      }, [selectedDate]);
    
      return (

        <InlineStack inlineAlign="center" gap="4">
            {/* Visibility Header */}
          <Box>
            <h3>Visibility:</h3>
          </Box>
          <Box minWidth="276px" padding={{ xs: 2 }}>
            <Popover
              active={visible}
              autofocusTarget="none"
              preferredAlignment="left"
              fullWidth
              preferInputActivator={false}
              preferredPosition="below"
              preventCloseOnChildOverlayClick
              onClose={handleOnClose}
              activator={
                <TextField
                  role="combobox"
                  prefix={<Icon
                    source={CalendarMinor}
                    color="base"
                  />}
                  value={formattedValue}
                  onFocus={() => setVisible(true)}
                  onChange={handleInputValueChange}
                  autoComplete="off"
                />
              }
            >
              <Card ref={datePickerRef}>
                <DatePicker
                  month={month}
                  year={year}
                  selected={selectedDate}
                  onMonthChange={handleMonthChange}
                  onChange={handleDateSelection}
                  locale="en" // Replace with your desired language/locale code
                />
              </Card>
            </Popover>
          </Box>
                {/* Set Visibility Date */}
            <Box>
              <Button onClick={() => console.log("Visibility date set")}>
                Set visibility date
              </Button>
            </Box>

        </InlineStack>
      );
}



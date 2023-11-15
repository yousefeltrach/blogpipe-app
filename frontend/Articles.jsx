import React, { useState, useCallback, useEffect } from "react";
import {
  Page,
  Text,
  Select,
  Pagination,
  Modal,
  LegacyStack,
  useSetIndexFiltersMode,
  IndexFilters,
  InlineStack,
} from "@shopify/polaris";
import ArticlesIndexTable from "./components/ArticlesIndexTable";
import { api } from "./api";
import { useFindMany } from "@gadgetinc/react";
import ArticleModal from "./components/ArticleModal";

export default function Articles() {
  const NUM_RECORDS = 10;
  const [rowsPerPage, setRowsPerPage] = useState(NUM_RECORDS);
  const [articles, setArticles] = useState([]);
  const [cursor, setCursor] = useState({ first: rowsPerPage });
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [{ data, fetching, error }] = useFindMany(api.blogPipeArticle, {
    ...cursor,
    select: {
      id: true,
      title: true,
      status: true,
    },
  });

  const handleRowsPerPageChange = useCallback((value) => {
    setRowsPerPage(parseInt(value));
  }, []);

  useEffect(() => {
    setCursor({ first: rowsPerPage });
  }, [rowsPerPage]);

  useEffect(() => {
    if (data) {
      let transformedData = data.map((d) => ({
        id: d.id,
        title: d.title,
        status: d.status,
      }));

      setArticles(transformedData);

      // Calculate the total number of pages based on the number of records and data length
      setTotalPages(Math.ceil(data.length / rowsPerPage));
    }
  }, [data, rowsPerPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    filterArticlesByTab(tab);
  };

  const filterArticlesByTab = (tab) => {
    if (tab === "All") {
      // Display all articles
      setArticles((prevArticles) =>
        prevArticles.map((article) => ({
          ...article,
          hidden: false,
        }))
      );
    } else if (tab === "Review") {
      // Filter articles with status "Review"
      setArticles((prevArticles) =>
        prevArticles.map((article) => ({
          ...article,
          hidden: article.status !== "Review",
        }))
      );
    } else if (tab === "Schedule") {
      // Filter articles with status "Schedule"
      setArticles((prevArticles) =>
        prevArticles.map((article) => ({
          ...article,
          hidden: article.status !== "Schedule",
        }))
      );
    } else if (tab === "Published") {
      // Filter articles with status "Published"
      setArticles((prevArticles) =>
        prevArticles.map((article) => ({
          ...article,
          hidden: article.status !== "Published",
        }))
      );
    }
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    filterArticlesBySearch(query);
  };

  const filterArticlesBySearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    setArticles((prevArticles) =>
      prevArticles.map((article) => ({
        ...article,
        hidden: !article.title.toLowerCase().startsWith(lowerCaseQuery),
      }))
    );
  };

  if (error) {
    return (
      <Page title="Error">
        <Text variant="bodyMd" as="p">
          Error: {error.toString()}
        </Text>
      </Page>
    );
  }

  const [active, setActive] = useState(false);

  const toggleModal = useCallback(() => setActive((active) => !active), []);

  const activator = <p onClick={toggleModal}></p>;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [itemStrings, setItemStrings] = useState([
    "All",
    "Review",
    "Schedule",
    "Published",
  ]);

  const tabs = itemStrings.map((item, index) => ({
    content: item,
    index,
    onAction: () => handleTabChange(item),
    id: `${item}-${index}`,
    selected: selectedTab === item,
  }));

  const [selected, setSelected] = useState(0);

  const sortOptions = [
    { label: "Blog", value: "Blog asc", directionLabel: "Ascending" },
    { label: "Blog", value: "Blog desc", directionLabel: "Descending" },
    { label: "Title", value: "Title asc", directionLabel: "A-Z" },
    { label: "Title", value: "Title desc", directionLabel: "Z-A" },
    
  ];

  const [sortSelected, setSortSelected] = useState(["Blog asc"]);

  const { mode, setMode } = useSetIndexFiltersMode();

  const onHandleCancel = () => {};

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <Page
      fullWidth
      title="Blog posts"
      primaryAction={{
        content: "Generate new blog post",
        onAction: toggleModal,
      }}
    >
      <IndexFilters
        sortOptions={sortOptions}
        sortSelected={sortSelected}
        queryValue={searchQuery}
        queryPlaceholder="Search by title"
        onQueryChange={handleSearchChange}
        onQueryClear={() => handleSearchChange("")}
        onSort={setSortSelected}
        cancelAction={{
          onAction: onHandleCancel,
          disabled: false,
          loading: false,
        }}
        tabs={tabs}
        selected={selected}
        onSelect={setSelected}
        canCreateNewView={false}
        filters={[]}
        appliedFilters={[]}
        onClearAll={() => {}}
        mode={mode}
        setMode={setMode}
        hideFilters
        filteringAccessibilityTooltip="Search (F)"
      />

      {data && (
        <ArticlesIndexTable
          articles={articles
            .filter((article) => !article.hidden)
            .slice(startIndex, endIndex)} // Display only the current page's data
          isLoading={fetching}
        />
      )}
      {data && articles.length > 0 && (
        <>
          <br />
          <InlineStack align="end" blockAlign="end">
            <Select
              label="blog post per page:"
              labelInline
              options={['5' ,'10', '20', '30', '40' , '50']}
              value={String(rowsPerPage)}
              onChange={handleRowsPerPageChange}
            />
            <text style={{ width: "20px" }}></text>
            <Pagination
              hasPrevious={currentPage > 1}
              onPrevious={handlePreviousPage}
              hasNext={currentPage < totalPages}
              onNext={handleNextPage}
            />
          </InlineStack>
        </>
      )}

      <div style={{ height: "500px" }}>
        <Modal
          activator={activator}
          open={active}
          onClose={toggleModal}
          title="Generate blog post"
          primaryAction={{
            content: "Generate",
            onAction: toggleModal,
          }}
        >
          <Modal.Section>
            <LegacyStack vertical>
              <LegacyStack.Item>
                <ArticleModal />
              </LegacyStack.Item>
            </LegacyStack>
          </Modal.Section>
        </Modal>
      </div>
    </Page>
  );
}






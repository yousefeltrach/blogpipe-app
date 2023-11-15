import { AppType, Provider as GadgetProvider, useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { NavigationMenu } from "@shopify/app-bridge-react";
import { Page, Spinner, Text } from "@shopify/polaris";
import { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Articles from "./Articles";
import EditArticle from "./pages/articles/[id]";
import Ads from "./Ads";
import { api } from "./api";
import Analytics from "./Analytics";
import EditAd from "./pages/ads/[id]";
import Home from "./Home";
import Settings from "./Settings";
import Topics from "./Topics";
import EditTopic from "./pages/topics/[id]";

const Error404 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === new URL(process.env.GADGET_PUBLIC_SHOPIFY_APP_URL).pathname) return navigate("/", { replace: true });
  }, [location.pathname]);
  return <div>404 not found</div>;
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const history = useMemo(() => ({ replace: (path) => navigate(path, { replace: true }) }), [navigate]);

  const appBridgeRouter = useMemo(
    () => ({
      location,
      history,
    }),
    [location, history]
  );

  return (
    <GadgetProvider type={AppType.Embedded} shopifyApiKey={window.gadgetConfig.apiKeys.shopify} api={api} router={appBridgeRouter}>
      <AuthenticatedApp />
    </GadgetProvider>
  );
};

function AuthenticatedApp() {
  // we use `isAuthenticated` to render pages once the OAuth flow is complete!
  const { isAuthenticated, loading } = useGadget();
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Spinner accessibilityLabel="Spinner example" size="large" />
      </div>
    );
  }
  return isAuthenticated ? <EmbeddedApp /> : <UnauthenticatedApp />;
}

function EmbeddedApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={<EditTopic />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<EditArticle />} />
        <Route path="/ads/" element={<Ads />} />
        <Route path="/ads/:id" element={<EditAd />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <NavigationMenu
        navigationLinks={[
          {
            label: "Topics",
            destination: "/topics",
          },
          {
            label: "Articles",
            destination: "/articles",
          },
          {
            label: "Ads",
            destination: "/ads",
          },
          {
            label: "Analytics",
            destination: "/analytics",
          },
          {
            label: "Settings",
            destination: "/settings",
          },
        ]}
      />
    </>
  );
}

function UnauthenticatedApp() {
  return (
    <Page title="App">
      <Text variant="bodyMd" as="p">
        App can only be viewed in the Shopify Admin.
      </Text>
    </Page>
  );
}

export default App;

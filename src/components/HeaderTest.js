import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { Root, Header, Nav, Content } from "@material-ui/core/"
import {
  AppBar,
  Header,
  Nav,
  Root,
  Toolbar,
  IconButton,
  InputBase,
  Typography
} from "@material-ui/core";

const config = {
  navAnchor: "left",
  navVariant: {
    xs: "temporary",
    sm: "persistent",
    md: "permanent"
  },
  navWidth: {
    xs: 240,
    sm: 256,
    md: 256
  },
  collapsible: {
    xs: false,
    sm: false,
    md: true
  },
  collapsedWidth: {
    xs: 64,
    sm: 64,
    md: 64
  },
  clipped: {
    xs: true,
    sm: true,
    md: true
  },
  headerPosition: {
    xs: "sticky",
    sm: "relative",
    md: "relative"
  },
  squeezed: {
    xs: false,
    sm: false,
    md: false
  },
  footerShrink: {
    xs: false,
    sm: false,
    md: false
  }
};

const App = () => (
  <div config={config} style={{ minHeight: "100vh" }}>
    <CssBaseline />
    <AppBar
      menuIcon={{
        inactive: <i className="fas fa-bars" />,
        active: <i className="fas fa-chevron-right" />
      }}
    >
      {/* header goes here */}
    </AppBar>
    <div
      collapsedIcon={{
        inactive: <i className="fas fa-chevron-left" />,
        active: <i className="fas fa-chevron-right" />
      }}
      header={
        // you can provide fixed header inside nav
        // change null to some react element
        ctx => null
      }
    >
      {/* nav goes here */}
    </div>
    <div>Content</div>
  </div>
);

export default App;

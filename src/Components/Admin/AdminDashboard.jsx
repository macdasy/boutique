import { CssBaseline } from "@mui/material";
import "./Admin.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLayoutEffect, useState } from "react";
import { AddItem } from "./AddItem";
import DeletePage from "./DeletePage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function useWindowSize() {
    const [sWidth, SetSWidth] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            SetSWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
        },[])

    return sWidth;
}

export function AdminDashboard(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(useWindowSize());

  return (
    <section id="aDashboard">
      <div id="header">
        <h2> Dashboard </h2>
      </div>
      <hr />

      <Box
        style={{ marginTop:'3%' }}
      >
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        //   style={{ alignTtems: 'flex-end'}}
        >
          <Tab label="Add Item" {...a11yProps(0)} />
          <Tab label="Delete Item" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0} style={{ padding:'0% 5%', width:'100%' }}>
          <AddItem />
        </TabPanel>
        <TabPanel value={value} index={1} style={{ padding:'1% 5%' }}>
          <DeletePage />
        </TabPanel>
      </Box>
    </section>
  );
}

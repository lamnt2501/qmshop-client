import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import { Logo } from "../../../../components";

const TemporaryDrawer = ({ listPages }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Logo />

      {listPages.map(({title, listpage}, index) => (
        <div key={index}>
          <span className="py-2 px-1 text-xs">{title}</span>
          <List>
            {listpage.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemText primary={item.pageName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {index !== listPages.length - 1 && <Divider />}
        </div>
      ))}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} color="inherit">
        <ListIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

TemporaryDrawer.propTypes = {
  listPages: PropTypes.array,
};

export default TemporaryDrawer;

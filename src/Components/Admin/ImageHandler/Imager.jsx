import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, ListItemAvatar } from "@mui/material";

export default function Imager(props) {
  const images = props.images;

  console.log(images);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {/* {images.map((images, sectionId) => (
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°${1}`}
              src={images.data_url}
            />
          </ListItemAvatar>
          <ListItemText id="1" primary={images.files.name} />
        </ListItem>
      ))} */}
    </List>
  );
}

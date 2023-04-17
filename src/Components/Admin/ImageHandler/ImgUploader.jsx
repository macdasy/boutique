import { Button, ListItemButton } from "@mui/material";
import React from "react";
import ImageUploading from "react-images-uploading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, ListItemAvatar } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "../Admin.css";

export default function ImgUploader(props) {

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    props.setImg(imageList[0].file);
    console.log(imageList);
    if(!images.includes(imageList)) setImages(imageList);
  };

  return (

    <div className="imgUpload" style={{ width: "100%", padding:'7%' }}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "jpeg", "png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { opacity: "0.7" } : null}
              onClick={onImageUpload}
              id="draggerButton"
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            {images.length > 0 && (
               <Button style={{ background:'none', color:'gold', textTransform:'none' }} onClick={onImageRemoveAll}> Remove All </Button>
            )}
              <div
                className="image-item"
                style={{ marginTop: "7%" }}
              >
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

                  {images.map((images, index) => (
                    <ListItem
                      secondaryAction={ <Button onClick={() => onImageRemove(index)} style={{ background:'none', color:'gold' }}> <HighlightOffIcon /> </Button>}
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemAvatar>
                          <Avatar alt={`Avatar n°${1}`} src={images.data_url} />
                        </ListItemAvatar>
                        <ListItemText id="1" primary={images.file.name} style={{ wordWwrap: 'break-word' }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

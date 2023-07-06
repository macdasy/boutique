import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import ImgUploader from "./ImageHandler/ImgUploader";
import Swal from "sweetalert2";
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "black",
  "blue",
  "green",
  "violet",
  "brown",
  "gold"
];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

export function AddItem(props) {
  const [sizes, setSizes] = useState([]);
  const [name, setName] = useState();

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleColor = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSizes = (event) => {
    const ele = event.target.value;
    if(!sizes.includes(ele)) setSizes( (old)=> [...old, event.target.value] );
    else  setSizes( sizes.filter(item => item !== ele) )
  };

  useEffect(()=>{ console.log(sizes);});

  const [value, setValue] = useState('');

  const handleType = (event) => {
    setValue(event.target.value);
  };


  const [ prices, setprices ] = useState({});
  const [ img, sImg ] = useState({});

  const handlePrice = (e) => {

    const size = e.target.id;
    const price = e.target.value;

    const curr = { [size]:price }

    setprices( (old) => ({ ...old, ...curr }));
  }

  useEffect(()=> console.log(prices) )

  function setImg(prop) {
    sImg(prop);
  }

  const AddItem = async(e) => {

    console.log(img);

    const postData = {
      img: img,
      category: value,
      size: sizes,
      price: prices,
      color: personName
    }

    Swal.fire({
        title: 'Ready to Upload?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {

        if (result.isConfirmed) {

            const headers = {
              'content-type': 'multipart/form-data',
              'Authorization': localStorage.getItem('token')
            }

            axios.post("https://boutique-scpw.onrender.com/admin/addProduct", postData, {
              headers: headers
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              })

            // const formData = new FormData();
            // console.log(img);
            // formData.append("file", img);
            // formData.append("upload_preset", "sunnysvilla");
            // axios.post("https://api.Cloudinary.com/v1_1/dcrcuxd0v/image/upload", formData)
            //     .then((res) => {
            //       console.log(res);
            //         var url = "/v"+res.data.version+"/"+res.data.public_id+".jpg";
            //         console.log(url);
            //     })
      }});
    }
  
  return (
    <section id="add-item">

      <div>

      <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6} style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
            
            <ImgUploader setImg={setImg} />

        </Grid>

        <Grid item xs={12} md={6}>

        <FormControl style={{ marginBottom:'5%' }}>
            <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleType}
            >
              <FormControlLabel value="Tops" control={<Radio />} label="Tops" />
              <FormControlLabel value="Kurta" control={<Radio />} label="Kurta" />
              <FormControlLabel value="Kurta Set" control={<Radio />} label="Kurta Set" />
            </RadioGroup>
        </FormControl>


            <FormControl  style={{ marginBottom:'5%' }}>
              <FormLabel id="demo-controlled-radio-buttons-group">Size</FormLabel>
            <FormGroup 
              row
              value={sizes}
              onChange={handleSizes}
            >
              <FormControlLabel value='S' control={<Checkbox />} label="S" />
              <FormControlLabel value='M' control={<Checkbox />} label="M" />
              <FormControlLabel value='L' control={<Checkbox />} label="L" />
              <FormControlLabel value='XL' control={<Checkbox />} label="XL" />
            </FormGroup>
          </FormControl>


        <FormControl sx={{ m: 1, width: 300 }} style={{ marginLeft:0 }} size="small">
          <InputLabel id="demo-multiple-chip-label">Color</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleColor}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ background:value }} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div style={{ marginTop:'5%' }}>

              { sizes.map((size,i)=>{
                return(
                  <FormControl sx={{ m: 1 }} style={{ marginLeft:0 }} >
                  <TextField
                  style={{ marginLeft:0 }} 
                    type="number"
                    onChange={handlePrice}
                    value={prices[size]}
                    // value={prices[`${size.toLowerCase()}`]}
                    size="small"
                    label={size}
                    id={size}
                    // id={size.toLowerCase()}
                    sx={{ m: 1, width: '25ch' }}
                    autoComplete='off'
                    InputProps={{
                      startAdornment: <InputAdornment position="start">Rs</InputAdornment>
                    }}
                  />
                  </FormControl>
                )
              })

              }
        </div>

          </Grid>
        </Grid>
      </div>




      <div style={{ display:'flex', justifyContent:'end', marginTop:'5%' }}>
          <Button variant="outlined" onClick={AddItem} > Add </Button>
      </div>
    </section>
  );
}

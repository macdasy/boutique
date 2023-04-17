import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import './CollectionsPage.css';
import { Checkbox } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 'max-content',
      textTransform:'capitalize',
      marginTop:'0.5%'
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChipSelection(props) {

  const names = props.values

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }} id={props.id}>
        <InputLabel id="demo-multiple-chip-label" style={{ textTransform:'capitalize',fontFamily:'Tilt Neon' }}>{props.id}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id={props.id+'-select'}
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          style={{ borderRadius:0, fontFamily:'Tilt Neon' }}
        >
          {names.map((name) => (
            <MenuItem
              className={props.id}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
            <Checkbox checked={personName.indexOf(name) > -1}/>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
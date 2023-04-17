import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import { useEffect, useState } from 'react';

import './Admin.css';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

export default function DeletePage(props) {

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

    const [items, setItems] = useState([]);

    const deleteItem = (e) => {
        const id= e.target.id;
        const sltdEle = document.getElementById(id);
        const p = document.querySelector(`p#${id}`);
        console.log(sltdEle);

        if( !items.includes(id)) {
          sltdEle.style.background = '#fcadab';
          p.innerHTML = 'Cancel';
          setItems( (old) => [...old, id] );
        } else { 
          p.innerHTML = 'Delete';
          sltdEle.style.background = 'white';
          setItems( items.filter(item => item !== id) );
        }
    }

    const sumbit = (e) => {

      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

    }

    useEffect(()=>{ console.log(items); })

    return(
        <section id='DeletePage'>

            <List dense={dense}>
              {[0, 1, 2].map((e) => (
                <ListItem
                    style={{ padding:'1% 2%' }}
                    id={`image${e}`}
                    secondaryAction={
                        <>
                          <button id={`image${e}`} className='itemBtn' onClick={deleteItem}> 
                            <p style={{ padding:'2%', fontSize:'15px' }}  id={`image${e}`} > Delete </p> 
                          </button>
                        </>
                    }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              ))}
            </List>

            { items.length !== 0 &&
              <div style={{ display:'flex', justifyContent:'end', marginTop:'3%' }}>
                  <Button> Cancel </Button>
                  <Button onClick={sumbit}> Confirm </Button>
              </div>
            }


        </section>
    )

}
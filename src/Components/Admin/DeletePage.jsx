import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

export default function DeletePage(props) {

    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);

    const [items, setItems] = useState([]);


    const [data, setData] = useState();
    async function processData() {
      const res = await fetch("https://boutique-scpw.onrender.com/user/products");
      const data = await res.json();
      setData(data);
    }
    
    useEffect(() => {
      if (!data) processData();
      else console.log(data);
    });

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

          const headers = {
            'content-type': 'multipart/form-data',
            'Authorization': localStorage.getItem('token')
          }

          const postData = { id: items }

          axios.post("https://boutique-scpw.onrender.com/admin/delete", postData, {
              headers: headers
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              })

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
              {data.map((d, index) => (
                <ListItem
                    style={{ padding:'1% 2%' }}
                    id={d.id}
                    secondaryAction={
                        <>
                          <button id={d.id} className='itemBtn' onClick={deleteItem}> 
                            <p style={{ padding:'2%', fontSize:'15px' }}  id={d.id} > Delete </p> 
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
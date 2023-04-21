import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

// import { useSelector, useDispatch } from 'react-redux'
// import { addItem } from '../Redux/itemSlice'
import '../CollectionsPage.css';
import ProCard from "./ProCard";


export default function Products(props) {
  const [fav, setFav] = useState([]);

  // const count = useSelector(state => state.counter.value);
  // console.log('count: '+ count);
  // const dispatch = useDispatch();

  
  const handleFav = (e) => {
    const ele = e.target;
    console.log(ele);

    if (ele.style.color !== "gold") {
      ele.style.color = "gold";
      setFav((old) => [...old, ele.id]);
    } else {
      ele.style.color = "grey";
      setFav(fav.filter((item) => item !== ele.id));
    }
  };

  useEffect(() => {
    console.log(fav);
  });

  async function processData() {
    const res = await fetch("https://boutique-scpw.onrender.com/products");
    const data = await res.json();
    setData(data);
  }

  const [data, setData] = useState();

  useEffect(() => {
    if (!data) processData();
    else console.log(data);
  });

  const images=[
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/15200984778_360x.jpg?v=1645075021',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/152009892121_360x.jpg?v=1645082173',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Ciceroni29382E_360x.jpg?v=1643370804',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/152009953177_360x.jpg?v=1645027891',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Ciceroni29191E_360x.jpg?v=1643197037',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/IMG_8182_360x.jpg?v=1643196547',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Ciceroni29227E_360x.jpg?v=1643034454',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/15200980437_360x.jpg?v=1645071685',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/152009972194_360x.jpg?v=1645028884',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/IMG_8131_360x.jpg?v=1643194358',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Ciceroni29331E_360x.jpg?v=1643276288',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Advitiya24241E_360x.jpg?v=1675849140',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/152009926151_360x.jpg?v=1645026824',
    'https://cdn.shopify.com/s/files/1/0610/4393/3368/products/Ciceroni29417E_360x.jpg?v=1643274141'
  ]

  return (
    <section id="products" style={{ marginBottom:"5%" }}>
        <Box sx={{ my: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={7}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >
              {data === undefined ? (
                <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
                    <CircularProgress style={{ color: "gold" }} />
                </Grid>
              ) : (
                data.map((d, index) => (
                  <Grid item xs={6} sm={6} md={3} style={{ textAlign: "center" }} className="h-100">
                    <ProCard 
                      title={
                        d.category === "1"
                          ? "Tops"
                          : d.category === "2"
                          ? "Kurta"
                          : "Kurta Set"
                      }
                      size={d.size}
                      price={d.price}
                      img={images[index]}
                      handleFav={handleFav}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </Box>
    </section>
  );
}

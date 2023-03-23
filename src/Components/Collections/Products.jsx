import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";

export default function Products(props) {
  return (
    <section id="products">
      <Container>
        <Box sx={{ my: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={10}
              columnSpacing={{ xs: 1, sm: 2, md: 1 }}
            >

{Array.from(Array(props.num)).map((_, index) => (


              <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    style={{ textAlign: "left" }}
                    action={
                      <IconButton aria-label="settings">
                        <FavoriteIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://img.tatacliq.com/images/i8/437Wx649H/MP000000013860940_437Wx649H_202207211525131.jpeg"
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
  ))}

            </Grid>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

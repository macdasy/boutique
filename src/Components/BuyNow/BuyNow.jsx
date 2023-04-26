import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./buynow.css";
import { Grid, MobileStepper, Paper } from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';

const steps = [
  {
    label: 'Address',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Overview',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Payment',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];


export default function BuyNow(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section id="buynow-sec">
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={6} style={{padding:0}}>
          <div id="buy-products">
            <div class="uk-card uk-card-default" style={{ marginBottom: "5%" }}>
              {/* <div
                class="uk-card-badge"
                style={{ background: "none", borderRadius: "999px" }}
              >
                <button
                  className="uk-button uk-button-link"
                  style={{ color: "black" }}
                >
                  {" "}
                  <span uk-icon="close"></span>{" "}
                </button>
              </div> */}
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                  <div class="uk-width-auto">
                    <img
                      width="40"
                      height="30"
                      src="https://cdn.shopify.com/s/files/1/0610/4393/3368/products/15200984778_823x.jpg?v=1645075021"
                      alt="Avatar"
                    />
                  </div>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                      {" "}
                      Allure Crop Top
                    </h3>
                    <p class="uk-text-meta uk-margin-remove-top">
                      {" "}
                      Quantity : 1{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="uk-card-footer">
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginBottom: 0,
                      color: "black",
                    }}
                  >
                    {" "}
                    Price{" "}
                  </p>
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginBottom: 0,
                      color: "green",
                      marginTop: 0,
                    }}
                  >
                    {" "}
                    Rs. 2900{" "}
                  </p>
                </p>
              </div>
            </div>

            <div style={{ marginTop: "5%" }}>
              <div class="uk-card-footer">
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginBottom: 0,
                      color: "black",
                    }}
                  >
                    {" "}
                    Shipping{" "}
                  </p>
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginBottom: 0,
                      color: "green",
                    }}
                  >
                    {" "}
                    Rs.2999{" "}
                  </p>
                </p>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    color: "black",
                  }}
                >
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginBottom: 0,
                      color: "black",
                    }}
                  >
                    {" "}
                    Total{" "}
                  </p>
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginBottom: 0,
                      color: "green",
                    }}
                  >
                    {" "}
                    Rs. 2900{" "}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
            {/* <p> Total Amount to be paid: Rs. 2000 </p> */}
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
              {steps[activeStep].description}
            </Box>
            <MobileStepper
              variant=""
              steps={maxSteps}
              activeStep={activeStep}
              position="static"
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

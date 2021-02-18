import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    textHeader: {
      fontSize: "1.5em",
      color: "rgb(0 0 0 / 70%)",
   
      ["@media (width:375px)"]: {
        fontSize: "11px",
        marginBottom:'-4px',
   
      },
    },
    textGreen: {
      textAlign: "left",
      color: "#00C900",
      fontSize: "16px",
      ["@media (width:375px)"]: {
        textAlign: "left",
        color: "#00C900",
        fontSize: "8px",
      },
    },
    textCategory: {
      textAlign: "left",
      fontSize: "16px",
      color:'#000',
      ["@media (width:375px)"]: {
        textAlign: "left",
        color: "#00C900",
        fontSize: "8px",
      },
    },
    textMore: {
      color: "#429EFE",
      fontSize: "16px",
      textAlign: "left",
      ["@media (width:375px)"]: {
        fontSize: "8px",
      },
    },
  })
);

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.textHeader}>ผลการค้นหายอดนิยม</p>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
            <p className={classes.textGreen}>
              รถยนต์ <a style={{ color: "#000 !important" }}>(19,000)</a>
            </p>
            <p className={classes.textCategory}>รถมือสอง</p>
            <p className={classes.textCategory}>รถเก๋งมือสอง</p>
            <p className={classes.textCategory}>รถบ้านมือสอง</p>
            <p className={classes.textCategory}>รถกระบะมือสอง</p>
            <p className={classes.textCategory}>รถขนของ</p>
            <p className={classes.textMore}>
              ดูรถยนต์ทั้งหมด
              <ArrowForwardIcon />
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
          <p className={classes.textGreen}>
              รถยนต์ <a style={{ color: "#000 !important" }}>(19,000)</a>
            </p>
            <p className={classes.textCategory}>รถมือสอง</p>
            <p className={classes.textCategory}>รถเก๋งมือสอง</p>
            <p className={classes.textCategory}>รถบ้านมือสอง</p>
            <p className={classes.textCategory}>รถกระบะมือสอง</p>
            <p className={classes.textCategory}>รถขนของ</p>
            <p className={classes.textMore}>
              ดูรถยนต์ทั้งหมด
              <ArrowForwardIcon />
            </p>
            
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
          <p className={classes.textGreen}>
              รถยนต์ <a style={{ color: "#000 !important" }}>(19,000)</a>
            </p>
            <p className={classes.textCategory}>รถมือสอง</p>
            <p className={classes.textCategory}>รถเก๋งมือสอง</p>
            <p className={classes.textCategory}>รถบ้านมือสอง</p>
            <p className={classes.textCategory}>รถกระบะมือสอง</p>
            <p className={classes.textCategory}>รถขนของ</p>
            <p className={classes.textMore}>
              ดูรถยนต์ทั้งหมด
              <ArrowForwardIcon />
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Paper className={classes.paper}>
          <p className={classes.textGreen}>
              รถยนต์ <a style={{ color: "#000 !important" }}>(19,000)</a>
            </p>
            <p className={classes.textCategory}>รถมือสอง</p>
            <p className={classes.textCategory}>รถเก๋งมือสอง</p>
            <p className={classes.textCategory}>รถบ้านมือสอง</p>
            <p className={classes.textCategory}>รถกระบะมือสอง</p>
            <p className={classes.textCategory}>รถขนของ</p>
            <p className={classes.textMore}>
              ดูรถยนต์ทั้งหมด
              <ArrowForwardIcon />
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

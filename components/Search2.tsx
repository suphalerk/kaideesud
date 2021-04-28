import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React from "react";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "50%",
      },
    },
    position: {},
    bgSearch: {
      backgroundColor: "#008C97",
      height: "auto",

      ["@media (max-width:800px)"]: {
        height: "auto",
        backgroundSize: "cover",
        backgroundColor: "transparent",
      },
    },
    MuiIcons: {
      width: "2em",
      height: " 2em",
      display: "inline",
      marginTop: "10px",
      ["@media (min-width:800px)"]: {
        display: "none",
      },
    },
    btnSell: {
      //   float: "right",
      marginLeft: "1em",
      color: "#96A5BA",
      backgroundColor: "#f2f2f2f2",
      width: " 105px",
      height: " 50px",
      fontSize: "17px",
      ["@media (max-width:800px)"]: {
        marginLeft: "0em",
        fontSize: "11px",
        display:'none'
      },
    },
  })
);

function searchInput() {
  const classes = useStyles();
  return (
    <div className={classes.bgSearch}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ textAlign: "center" }}
      >
        <ArrowLeft className={classes.MuiIcons} />
        <TextField
          className={classes.position}
          id="outlined-basic"
          label="คุณกำลังมองาอะไร?"
          variant="outlined"
        />
        <Search className={classes.MuiIcons} />
        <Button className={classes.btnSell} variant="contained">
          ค้นหา
        </Button>
      </form>
    </div>
  );
}

export default searchInput;

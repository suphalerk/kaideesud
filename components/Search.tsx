import {
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root2: {
      flexGrow: 1,
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
      "&::placeholder": {
        color: "#000 !important",
      },
    },
    paper:{
      display:'none',
    },
    position: {
      marginTop: "13%",
      // background: '#fff',

      ["@media (max-width:3760px)"]: {
        marginTop: "6%",
      },
      ["@media (max-width:1496px)"]: {
        marginTop: "13%",
      },
    },
    bgSearch: {
      height: "523px",
      backgroundSize: "cover",
      ["@media (max-width:1100px)"]: {
        height: "400px",
        backgroundSize: "cover",
      },
      ["@media (max-width:440px)"]: {
        height: "170px",
        backgroundSize: "cover",
      },
    },
    search: {
      padding:'15px',
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#008C97",
      "&:hover": {
        backgroundColor: "#008C97",
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        
        width: "100%",
      },
    },
    searchIcon: {
      padding: '13px 16px',
      height: "60%",
      position: "initial",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      float:'right',
      ["@media (max-width: 900px)"]: {
        display:'none',
        
      },
    },
    inputRoot: {
      color: "inherit",      
    },
    inputInput: {
      fontSize:'1.5em',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
      ["@media (max-width:500px)"]: {
        fontSize:'15px',
        paddingLeft:'0px'
        
      },
    },
    
  })
);

function searchInput() {
  const classes = useStyles();
  return (
    <div
      className={classes.bgSearch}
      style={{
        backgroundImage:
          "url(/images/general-large-6b86fad29f1e8919155e0a9e5bcd54b7.png)",
      }}
    >
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ textAlign: "center" }}
      >
        {/* <TextField
           className={classes.position}
          id="outlined-full-width"
          style={{ margin: 8}}
          placeholder="คุณกำลังมองาอะไร"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /> */}
        {/* <TextField className={classes.position} id="outlined-full-width"  label="คุณกำลังมองาอะไร?" variant="filled" /> */}

        <div className={classes.root2}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
            <Grid item xs={6} md={6} sm={6} lg={6} style={{marginTop:'6%',}} >
              <div className={classes.search}>
                
                <InputBase
                  // style={{}}
                   placeholder="คุณกำลังมองาอะไร"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                /><div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
          </Grid>
        </div>
        {/* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="คุณกำลังมองาอะไร"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div> */}
      </form>
    </div>
  );
}

export default searchInput;

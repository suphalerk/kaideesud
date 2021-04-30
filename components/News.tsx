import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "410px",
      display: "flex",
      backgroundColor: "#fff",
      ["@media (width:414px)"]: {
        display: "flex",
      },
    },
    image: {
      width: 215,
      height: 128,
      ["@media (max-width:500px)"]: {
        height: "auto",
        width: "auto",
      },
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    Typography: {
      color: "#000",
      fontSize: "13px",
      textAlign: "left",

      ["@media (max-width:500px)"]: {
        width: "117px",
      },
      ["@media (width:375px)"]: {
        width: "110px",
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
    Readmore: {
      
      color: "#429EFE !important",
      width: "max-content",
      ["@media (width:375px)"]: {
        fontSize: "11px !important",
      },
    },
    bgcolor: {
      backgroundColor: "#f2f2f2",
    },
    textHeader: {
      fontSize: "1.5em",
      color: "#000",
      fontWeight: "bold",
      ["@media (max-width:500px)"]: {
        fontSize: "15px",
      },
    },
    more: {
      color: "#000",
      width: "fit-content",
      fontSize: "13px",
      float: "right",
      marginTop: "0px",
      display: "flex",
      ["@media (width:414px)"]: {
        display: "none",
      },
      ["@media (width:375px)"]: {
        marginTop: "1px",
      },
    },
    arrowPos: {
      width: "17px",
      height: "17px",
     
    },
    textmore: {
      color: "#429EFE",
      textDecoration: "0",
      textAlign: 'center',
      margin: '-22px'
    },
    textDes:{
      fontSize: "13px",
      color: "#7e7e7e",
      width: "217",
      display: "-webkit-box",
      WebkitLineClamp: 5,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textAlign: "left",
    }
  })
);

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.textHeader}>
      ข่าวสารน่าสนใจ
        <Link href="/productlist">
          <p className={classes.more}>
            ดูทั้งหมด
            <ArrowForwardIcon className={classes.arrowPos} />
          </p>
        </Link>
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2} className={classes.bgcolor}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                  <p
                    className={classes.textDes}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </Grid>
                  <Grid item>
                    
                      <Link href="/#">
                        {" "}
                        <p className={classes.textmore}>อ่านเพิ่มเติม</p>
                      </Link>
                   
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2} className={classes.bgcolor}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <p
                    className={classes.textDes}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </Grid>
                  <Grid item>
                    
                    <Link href="/#">
                      {" "}
                      <p className={classes.textmore}>อ่านเพิ่มเติม</p>
                    </Link>
                 
                </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2} className={classes.bgcolor}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                  <p
                    className={classes.textDes}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </Grid>
                  <Grid item>
                    
                      <Link href="/#">
                        {" "}
                        <p className={classes.textmore}>อ่านเพิ่มเติม</p>
                      </Link>
                   
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { createStyles, Link, Theme } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      border: "solid 1px #e1e1e1",
      padding: "0px",
    },
    mobileDetail: {
      width: "217",
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      color: "#222",
      textAlign: "left",
      paddingRight: "5px",
      paddingLeft: "5px",
      marginTop: "0px",
      marginBottom: "0px",
      fontSize: "16px",
    },
    more: {
      color: "#000",
      width: "fit-content",
      fontSize: "13px",
      float: "right",
      display: "flex",
      marginTop: "7px",
      ["@media (width:375px)"]: {
        marginTop: "0px",
        fontSize: "13px",
      },
      ["@media (max-width:500px)"]: {
        marginTop: "0px",
        fontSize: "13px",
      },
    },
    imageCategory: {
      width: 39.9,
      height: "auto",
    },
    textHeader: {
      fontSize: "1.5em",
      color: "#213aa3",
      fontWeight: "bold",

      ["@media (width:375px)"]: {
        marginLeft: "0%",
        fontSize: "14px",
      },
      ["@media (max-width:500px)"]: {
        marginLeft: "0%",
        fontSize: "14px",
      },
    },
    gridMobile: {
      ["@media (width:375px)"]: {
        display: "block !important",
        borderTop: "none",
      },
    },
    textLocation: {
      fontSize: "13px",
      color: "#7e7e7e",
      width: "217",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textAlign: "left",
      paddingRight: "5px",
      paddingLeft: "5px",
    },
    imgChat: {
      width: "135px",
      height: "40px",
    },
    imgCall: {
      width: "135px",
      height: "40px",
    },
    gridFlex: {
      display: "flex",
    },
    arrowPos: {
      width: "10px",
      Height: "10px",
      marginTop: "-2px",
    },
    textCost: {
      textAlign: "left",
      fontSize: "2em",
      color: "#00C900",
      fontWeight: "bold",
      paddingLeft: "5px",
      marginTop: "0px",
    },
    btnMore: {
      color: "#fff",
      backgroundColor: "#00C900",
      paddingLeft: " 40%",
      paddingRight: " 40%",
      fontSize: "1.5em",
      "&:hover": {
        backgroundColor: "#00C900",
      },
      ["@media (max-width:500px)"]: {
        paddingLeft: "20%",
        paddingRight: "20%",
        fontSize: "1em",
      },
    },
    btnCenter: {
      textAlign: "center",
    },
  })
);

export default function MediaCard(props: { data: any }) {
  const classes = useStyles();
  console.log(props.data);
  return (
    <div className={classes.root}>
      <p className={classes.textHeader}>
        ประกาศมาใหม่
        <Link href="/productlist">
          <p className={classes.more}>
            ดูทั้งหมด 
            <ArrowForwardIcon />
          </p>
        </Link>
      </p>


      {/* <Grid container spacing={3} className={classes.gridMobile}>
        {props.data.datas.map((item : any) => (
          <Grid item xs={12} lg={3} sm={3}>
            <Paper className={classes.paper}>
              <Image
                className={classes.imageCategory}
                src={props.data.datas.images[0].raw_url}
                alt=""
                width={"450"}
                height={"300"}
              />
              <Link href="/#">
                <p className={classes.mobileDetail}>{props.data.datas.content_title}</p>
              </Link>
              <p className={classes.textLocation}>{props.data.datas.content_description}</p>
              <p className={classes.textCost}>฿ {props.data.data.price}</p>
              <Grid className={classes.gridFlex}>
                <Grid item xs lg={6}>
                  <Image
                    className="img-chat"
                    src="/images/Chat.png"
                    alt=""
                    width={"130"}
                    height={"45"}
                  />
                </Grid>
                <Grid item xs lg={6}>
                  <Image
                    className="img-call"
                    src="/images/Call.png"
                    alt=""
                    width={"130"}
                    height={"45"}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          ))}  
      </Grid> */}
    </div>
  );
}

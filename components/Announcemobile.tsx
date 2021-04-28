import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Button, createStyles, Grid, Link, Paper, Theme } from "@material-ui/core";
import Image from "next/image";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Content } from '../interfaces/product'
import { PhoneCallback, QuestionAnswer } from "@material-ui/icons";


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
      paddingBottom:'1em'
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
      color: "#429EFE",
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
      color: "#000",
      fontWeight:'bold',

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
      width: "17px",
      Height: "17px",
      marginTop: '-2px'
    },
    textCost:{
      textAlign: "left",
      fontSize: "2em",
      color: "#FF5100",
      fontWeight:'bold',
      paddingLeft: '5px',
      marginTop:'0px',
    },
    btnMore:{
      color: "#fff",
      backgroundColor:'#00C900',
      paddingLeft:' 40%',
      paddingRight:' 40%',
      fontSize: '1.5em',
      '&:hover' : {
        backgroundColor:'#00C900',
      },
      ["@media (max-width:500px)"]: {
        paddingLeft:'20%',
      paddingRight:'20%',
      fontSize: '1em',
      },
    },
    btnCenter:{
      textAlign:'center',
    },
    btnCall : {
      backgroundColor:"#FF5100",
      color:"#fff",
      borderRadius:"15px",
      paddingLeft: '40px',
      paddingRight: '40px',
      paddingTop:'10px',
      paddingBottom:'10px',
    },
    btnChat:{
      backgroundColor:"#008C97",
      color:"#fff",
      borderRadius:"15px",
      paddingLeft: '40px',
      paddingRight: '40px',
      paddingTop:'10px',
      paddingBottom:'10px',
    },
  })
);


 

export default function MediaCard(props: { contents: Content[] }) {
  // const contents = props.contents
  const classes = useStyles();
  // console.log('img'+JSON.stringify(props.contents))

  return (
    <div className={classes.root}>
      <p className={classes.textHeader}>
        ประกาศมาใหม่
        <Link href="/productlist">
          <p className={classes.more}>
            ดูทั้งหมด
            <ArrowForwardIcon className={classes.arrowPos} />
          </p>
        </Link>
      </p>
      <Grid container spacing={3} className={classes.gridMobile}> 
      {props.contents.map((item : any,index) => {
          if (index <=7) return  <></>
          return  <Grid item xs={12} lg={3} sm={3}>
            <Paper className={classes.paper}>
            <Image
              className={classes.imageCategory}
              src={item.images[0].raw_url}
              alt=""
              width={"450"}
              height={"300"}
            />
            {/* <Link href="/product/name/{id}"> */}
            {/* <Link href="/product/name/{{item.id}}"> */}
            <Link href={`/product/name/${item.id}`}>
            <p className={classes.mobileDetail}>
            {item.content_title}
            </p>
            </Link>
            <p className={classes.textLocation}>{item.content_description}</p>
            <p className={classes.textCost} >฿ {Intl.NumberFormat('th-TH', {minimumFractionDigits: 0}).format(item.price)}</p>
            
            <Grid className={classes.gridFlex}>
              <Grid item xs lg={6}>
              <Button className={classes.btnChat} variant="contained"><QuestionAnswer/>แชท</Button>
                {/* <Image
                  className="img-chat"
                  src="/images/KAIDEESUD-52.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                /> */}
              </Grid>
              <Grid item xs lg={6}>
              <Button className={classes.btnCall} variant="contained"><PhoneCallback/>โทร</Button>
                {/* <Image
                  className="img-call"
                  src="/images/KAIDEESUD-54.png"
                  alt=""
                  width={"130"}
                  height={"45"}
                /> */}
              </Grid>
            </Grid>
          </Paper>
        </Grid>   
        })}
      </Grid>
    </div>
  );
}

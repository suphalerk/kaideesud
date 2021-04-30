import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: '17px 11px 11px 11px',
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow: "none",
      
    },
    paper2: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: '0px',
      textAlignLast: "center",
      
      ["@media (max-width:800px)"]: {
        display:'flex',
      },
    },
    paper3: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: '13px',
      textAlignLast: "right",
    },
    paper4: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: '13px',
      textAlignLast: "left",
      ["@media (max-width:800px)"]: {
        textAlignLast: "right",
        padding: '18px 5px 0px 0px',
      },
    },
    paper5: {
      padding: '5px',
      backgroundColor: "#fff",
      boxShadow: "none",
      ["@media (max-width:751px)"]: {
        display: "none",
      },
    },
    logo: {
      // float:'left',
      textAlignLast: "center",
      ["@media (max-width:800px)"]: {
        
      },
    },
    love: {
      float: "right",
      textAlign: "right",
    },
    chat: {
      float: "right",
      textAlign: "right",
    },
    btnSell: {
      //   float: "right",
      marginLeft: "1em",
      color: "#fff",
      backgroundColor: "#FF5100",
      ["@media (max-width:751px)"]: {
        marginLeft: "0em",
        fontSize: "11px",
      },
      ["@media (max-width:354px)"]: {
        marginLeft: "0em",
        fontSize: "9px",
      },
    },
    btnRegister: {
      //   float: "right",
      marginLeft: "1em",
      color: "#000",
      ["@media (max-width:1300px)"]: {
        display: "none",
      },
    },
    gridDis: {
      ["@media (max-width:751px)"]: {
        display: "none",
      },
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor:'#FF5100',
      marginLeft:'1em',
      '&:hover' : {
        backgroundColor:'#FF5100',
      },
      ["@media (min-width:800px)"]: {
        display: "none !important",
      },
    },
    Header:{
      marginBottom:'25px !important',
    },
    gridImg:{
      alignSelf:'center',
      marginTop: '6px',
    }
  })
);

export default function AutoGrid() {
  const classes = useStyles();
  //   const router = useRouter()

  return (
    <div className={classes.root}>
      <Grid container className={classes.Header}>
        <Grid item xs={6} lg={3} className={classes.gridImg}>
          <Paper className={classes.paper2}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Grid className={classes.gridImg}>
            <Link href="/">
              <Image
                className={classes.logo}
                src="/images/logo1.png"
                alt=""
                width={"120"}
                height={"45"}
              />
            </Link>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs lg={3} className={classes.paper5}>
          <Paper className={classes.paper5}></Paper>
        </Grid>
        <Grid item xs lg={1} className={classes.gridDis}>
          <Paper className={classes.paper3}>
            <Image
              className={classes.love}
              src="/images/love.png"
              alt=""
              width={"35"}
              height={"30"}
            />
          </Paper>
        </Grid>
        <Grid item xs lg={1}>
          <Paper className={classes.paper4}>
            <Image
              className={classes.love}
              src="/images/chat2.png"
              alt=""
              width={"35"}
              height={"30"}
            />
          </Paper>
        </Grid>
        <Grid item xs lg={3}>
          <Paper className={classes.paper}>
            {/* <Button   color="primary">
              เข้าสู่ระบบ / สมัครสมาชิก
            </Button> */}
            <Link href="/#">
              <a className={classes.btnRegister}>เข้าสู่ระบบ / สมัครสมาชิก</a>
            </Link>
            <Button className={classes.btnSell} variant="contained">
              ลองขาย
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

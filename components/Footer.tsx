import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#008C97",

      ["@media (width:375px)"]: {
        marginTop: "5%",
        alignSelf: "center !important",
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#008C97 !important",
      boxShadow: "none",
    },
    p: {
      color: "#fff",

      ["@media (width:375px)"]: {
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
      ["@media (max-width:500px)"]: {
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
    logo1: {
      ["@media (width:375px)"]: {
        marginTop: "5%",
      },
    },
    centerlogo: {
      alignSelf: "center",
    },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <p className={classes.p}>
              เกี่ยวกับเรา | ติดต่อเรา | ติดต่อลงโฆษณา |
              นโยบายความเป็นส่วนตัว | ข้อกำหนดและเงื่อนไขการใช้งาน
            </p>
            <p className={classes.p}>© 2021 KAIDESUD.COM</p>
          </Paper>
        </Grid>
        <Grid item xs={3} className={classes.centerlogo}>
          <Paper className={classes.paper}>
            <Image
              className={classes.logo1}
              src="/images/logo2.png"
              alt=""
              width={"300"}
              height={"70"}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

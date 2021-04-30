import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: "20px 16px 20px 16px",
      textAlign: "left",
      color: theme.palette.text.secondary,
      backgroundColor: "#008C97",
      boxShadow: "none",
      ["@media (width:375px)"]: {
        width: "330px",
      },
    },
    spacingxmobile: {
      marginBottom: "3em",
      ["@media (width:375px)"]: {
        display: "contents",
      },
    },
    smallLogo: {
      width: "70px",
      margin: "0px 0px -6px 0px",
      paddingRight: "5px",

    },
    textGreen: {
      color: "#fff",
      fontSize: "1.5rem",
      padding: "0",
      textAlign: "center",
    },
    textHeader: {
      fontSize: "18px",
      textAlign: "left",
      backgroundColor: "#008C97",
      padding: "1px 8px 1px 15px",
      color: " #fff",
      margin: "-15px",
    },
    Header2: {
      fontSize: "18px",
      textAlign: "left",
      backgroundColor: "#FF5100",
      padding: "1px 8px 1px 15px",
      color: " #fff",
      margin: "-15px",
    },
    textHeader2: {
      color: " #000",
      marginTop: "0px",
      marginLeft: "-15px",
      marginRight: "-15px",
      padding: "1px 8px 1px 15px",
      fontSize: "18px",
      textAlign: "left",
      backgroundColor: "#008C97",
      boxShadow: "none",
      borderRadius:'0px'
      // backgroundColor: "#E8EEF2",
    },
    Header3: {
      color: " #000",
      marginTop: "0px",
      marginLeft: "-15px",
      marginRight: "-15px",
      padding: "1px 8px 1px 15px",
      fontSize: "18px",
      textAlign: "left",
      backgroundColor: "#FF5100",
      boxShadow: "none",
      borderRadius:'0px'
      // backgroundColor: "#E8EEF2",
    },
    btnDis: {
      color: "#00C660",
    },
    TextInfo: {
      color: "#111",
      marginTop: "1.5em",
    },
    btnSell: {
      backgroundColor: "#FF5100",
      color: "#fff",
      float: "right",
      padding: "3px 21px",
      borderRadius:"15px",
      "&:hover": {
        backgroundColor: "#FF5100",
      }
    },
    btnSell2: {
      backgroundColor: "#FF5100",
      color: "#fff",
      float: "right",
      padding: "3px 21px",
      
    },
    textSpan: {
      paddingLeft: "10px",
      color:'#fff'
    },
    gridCenter: {
      alignSelf: "center",
    },
    grid: {
      padding: "30px",
    },
    ptext: {
      color: "#d7dde1",
      height: '31px',
    },
    gridMobile:{
      display: 'flex',
      ["@media (max-width:800px)"]: {
        display: 'block !important',
      },
    }
    // imgCorrect: {
    //   marginTop: "5px !important",
    // },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: "#fff", marginTop: "1em" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p className={classes.textGreen}>
            <img className={classes.smallLogo} src="/images/logo2.png" />
              ตอบโจทย์ทุกการซื้อขายกับเรา
             
            </p>
          </Paper>
        </Grid>
        <Grid item lg={12} className={classes.gridMobile}>
          <Grid item xs={12} lg={6} className={classes.grid}>
            <Paper className={classes.textHeader}>
              <p>
                ผู้ขาย<Button className={classes.btnSell}>ลงขาย</Button>
              </p>
            </Paper>
            <Paper
              style={{ marginTop: "15px" }}
              className={classes.textHeader2}
            >
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  ขั้นตอนง่าย ใครก็ลงขายได้
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  โปรโมทขายเพื่อเพิ่มโอกาศในการขายมากขึ้น
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  แชทกับลูกค้าโดยตรงเพื่อเพิ่มโอกาสในการปิดการขาย
                </span>
              </p>
            </Paper>
            <Paper className={classes.textHeader2}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  มีระบบหลังบ้านในการจัดการรายการเพื่อโปรโมทสิ้นค้าได้ง่าย
                </span>
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.grid}>
            <Paper className={classes.Header2}>
              <p>
                ผู้ซื้อ<Button className={classes.btnSell2}></Button>
              </p>
            </Paper>
            <Paper
              style={{ marginTop: "15px" }}
              className={classes.Header3}
            >
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  สะดวกมั่นใจในการเลือกซื้อสินค้าที่หลากหลาย
                </span>
              </p>
            </Paper>
            <Paper className={classes.Header3}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  พูดคุย สอบถามกับคนขายได้โดยตรงเพื่อความปรอดภัยในการซื้อ
                </span>
              </p>
            </Paper>
            <Paper className={classes.Header3}>
              <p>
                <Image
                  src="/images/CORRECT.png"
                  alt=""
                  width={25}
                  height={25}
                />
                <span className={classes.textSpan}>
                  มีาทงเลือกมากมาย กับ ร้านค้าและสินค้ามากมายอัพเดทตลอดเวลา
                </span>
              </p>
            </Paper>
            <Paper className={classes.Header3}>
              <p className={classes.ptext}></p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

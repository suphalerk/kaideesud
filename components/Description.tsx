import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: '0px',
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    textHeader: {
      fontSize: "1.5em",
      color: "#000",
      fontWeight: "bold",

      ["@media (width:375px)"]: {
        fontSize: "14px",
      },
    },
    textDes: {
      color: "#000",
      width: "fit-content",
      fontSize: "15px",
      textAlign: "left",
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
    more: {
      color: "#429EFE",
      width: "fit-content",
      fontSize: "13px",
      float: "right",
      margin: "0px",
      display: "flex",
      ["@media (width:375px)"]: {
        marginTop: "0px",
      },
      ["@media (max-width:500px)"]: {
        marginTop: "0px",
      },
    },
    arrowPos: {
      width: "10px",
      Height: "10px",
      marginTop: "-3px",
    },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.textHeader}>ทำไมต้องซื้อของกับ Kaideesud</p>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p
            className={classes.textDes}
            >
              โลกออนไลน์ทุกวันนี้มีบทบาทสำคัญในการใช้ชีวิตหลายๆ ด้าน
              เวลาอยากรู้อะไร แค่ค้นหาบนออนไลน์แค่แป๊บเดียวก็ได้คำตอบ
              การซื้อขายสินค้าก็เช่นกัน ไม่ว่าเราจะอยากได้สินค้าประเภทไหน
              ก็สามารถจับจองเป็นเจ้าของได้ในไม่กี่ขั้นตอน
              ผู้ขายเองก็สามารถเข้าถึงลูกค้าจำนวนมากขึ้น
              ไม่ว่าเราหรือลูกค้าจะอยู่ที่ไหน
              ก็ซื้อขายสินค้ากันได้รวดเร็วทันใจเหมือนอยู่ใกล้แค่เอื้อม KaideeSud
              คือแพลตฟอร์มที่คุณสามารถซื้อขายออนไลน์ได้อย่างใจ
              มีหมวดหมู่สินค้าทั้งมือหนึ่งหรือมือสองมากกว่า 30
              หมวดหมู่ให้เลือกซื้อและลงขาย ไม่ว่าจะเป็นเสื้อผ้า รองเท้า กระเป๋า
              อุปกรณ์ไอที ของตกแต่งบ้าน เครื่องใช้ไฟฟ้า พระเครื่อง และอื่น ๆ
              อีกมากมาย เข้ามาพบกับประสบการณ์การซื้อง่าย ขายคล่อง สะดวก
              รวดเร็วได้ที่นี่เลย
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

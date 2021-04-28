import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";

import { Button } from "@material-ui/core";
import { CalendarToday, FavoriteBorder } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    textColor: {
      color: "#222",
      border: "1px solid rgba(81, 81, 81, 1)",
    },
    textColor2: {
      color: "#96A5BA",
      border: "1px solid rgba(81, 81, 81, 1)",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    paper2: {
      padding: "6px",
      textAlign: "center",
      color: "#222",
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    paper4: {
      padding: "6px",
      textAlign: "left",
      color: "#222",
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    paper3: {
      padding: "0px",
      textAlign: "center",
      color: "#222",
      boxShadow: "none",
      backgroundColor: "#fff",
      display: "flex",
    },
    paper5: {
      padding: "0px",
      textAlign: "center",
      color: "#222",
      boxShadow: "none",
      backgroundColor: "#fff",
      display: "flex",
    },
    paper6: {
      padding: "0px",
      textAlign: "left",
      color: "#222",
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    paper7: {
      padding: "6px",
      textAlign: "left",
      color: "#222",
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    paper8: {
      padding: "6px",
      textAlign: "left",
      color: "#222",
      boxShadow: "none",
      backgroundColor: "#fff",
    },
    productTitle: {
      textAlign: "start",
      color: "#383277",
      fontSize: "22px",
      fontWeight: "bold",
      margin: "0",
    },
    spanText: {
      textAlign: "start",
      fontSize: "16px",
      color: "#383277",
    },
    table: {
      minWidth: 300,
    },
    textPrice: {
      textAlign: "right",
      fontSize: "2em",
      color: "#FF5100",
      fontWeight: "bold",
      margin: "0px",
    },
    textPrice2: {
      textAlign: "right",
      fontSize: "1em",
      color: "#96A5BA",
      margin: "0px",
    },
    textTag: {
      textAlign: "right",
      fontSize: "1.5em",
      color: "#96A5BA",
      margin: "0px",
    },
    gridPos: {
      padding: "1em",
      display: "inline-flex",
    },
    productDetail: {
      color: "#96A5BA",
      textAlign: "left",
      fontSize: "1.5em",
    },
    productDetail2: {
      color: "#000",
      textAlign: "left",
      margin: "0px",
    },
    productDetail3: {
      color: "#96A5BA",
      textAlign: "left",
      margin: "0px",
    },
    share: {
      textAlign: "right",
      fontSize: "15px",
      color: "#96A5BA",
      marginLeft: "10px",
    },
    productImg: {
      padding: "20px !important",
    },
    btnActivate: {
      backgroundColor: "rgb(0 0 0 / 12%) !important",
      padding: "6px 6px",
      alignSelf: "center",
    },
    textActivat: {
      color: "#00C900",
      fontSize: "10px",
      margin: "2px",
    },
    textOwner: {
      color: "#00C900",
      fontWeight: "bold",
      margin: "0px",
    },
    more: {
      color: "#000",
      width: "fit-content",
      fontSize: "9px",
      float: "right",
      display: "flex",
      ["@media (max-width:500px)"]: {
        marginRight: "0px",
        fontSize: "9px",
        marginTop: "0px",
      },
    },
    gridDis: {
      ["@media (max-width:1265px)"]: {
        display: "none",
      },
    },
    Iconsize: {
      width: "17px",
      height: "12px",
    },
    Iconsize2: {
      width: "70px",
      height: "70px",
    },
    textReport: {
      color: "#429EFE",
    },
    iconsize3: {
      margin: "0px 3px -3px 0px !important",
    },
    gridBorder: {
      border: "solid 1px",
      borderRadius: "5px",
      marginTop: "1em",
      marginBottom: "1em",
      padding: "10px",
    },
    gridChat: {
      ["@media (max-width:1265px)"]: {
        display: "inline-flex",
      },
    },
    paperx: {
      display: "flex",
      marginTop: "0px",
      backgroundColor: "#fff",
      boxShadow: "none",
      color: "#868686",
    },
    paperx2: {
      display: "flex",
      marginTop: "0px",
      backgroundColor: "#fff",
      boxShadow: "none",
      color: "#868686",
    },
    paperx3: {
      textAlign: "left",
      color: "#222",
      boxShadow: "none",
      backgroundColor: "#fff",
      display: "flex",
    },
    favIcon: {
      fill: "#429EFE",
    },
    btnFav: {
      color: "#429EFE",
    },
    textsell: {
      padding: "3px",
    },
    favimg: {
      padding: "3px",
      backgroundColor: "#fff",
      boxShadow: "none",
    },
  })
);

export default function FullWidthGrid(props: { data: any }) {
  const classes = useStyles();
  // console.log('xxx ==>'+JSON.stringify(props))

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
            <p className={classes.productTitle}>
              {" "}
              {props.data.datas.content_title}{" "}
            </p>

            <p className={classes.spanText}> กิจกรรมที่หน้าสนใจ </p>
            <p className={classes.productDetail}>
              {props.data.datas.content_description}
            </p>
          </Paper>
        </Grid>
        <Grid className={classes.gridDis} item xs={12} sm={6} lg={4}>
          {/*           
          <Paper className={classes.paper}>
            <p className={classes.textTag}>
              {" "}
              {props.data.datas.scrape_keyword.keyword} |{" "}
              {props.data.datas.scrape_keyword.title_keyword}{" "}
            </p>
          </Paper> */}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.paper}>
            <p className={classes.textTag}>
              {" "}
              {props.data.datas.scrape_keyword.keyword} |{" "}
              {props.data.datas.scrape_keyword.title_keyword}{" "}
            </p>
          </Paper>
          <Paper className={classes.paper}>
            {/* <p className={classes.textPrice}>฿ {props.data.datas.price}</p> */}
            <p className={classes.textPrice} >฿ {Intl.NumberFormat('th-TH', {minimumFractionDigits: 0}).format(props.data.datas.price)}</p>
            <p className={classes.textPrice2}>
              ราคารวมมูลค่าของแถมแล้ว (ถ้ามี)
            </p>
            {/* <Grid lg={6} className={classes.gridPos}>
           
                <Image
                  src="/images/Addfavorite.png"
                  alt=""
                  width={"150"}
                  height={"30"}
                />
             
            </Grid>

            <Grid lg={6} className={classes.gridPos}>
             
                <Image
                  src="/images/share.png"
                  alt=""
                  width={"20"}
                  height={"20"}
                />
                <span className={classes.share}> แชร์ </span>
             
            </Grid> */}
          </Paper>
          <Grid item lg={7} className={classes.gridPos}>
            <Paper className={classes.paperx}>
              <Button className={classes.btnFav} variant="contained">
                <FavoriteBorder className={classes.favIcon} />
                เพิ่มเป็นรายการโปรด
              </Button>
            </Paper>
          </Grid>
          <Grid item lg={5} className={classes.gridPos}>
            <Paper className={classes.paperx2}>
              <Image
                src="/images/share.png"
                alt=""
                width={"20"}
                height={"20"}
              />
              <span className={classes.share}> แชร์ </span>
            </Paper>
          </Grid>
          {/* <Paper className={classes.paper5}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow></TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} className={classes.paper}>
                      <TableCell
                        className={classes.textColor2}
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell className={classes.textColor} align="right">
                        {row.calories}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper> */}
          <Grid item lg={12} className={classes.gridBorder}>
            <Paper className={classes.paper3}>
              {/* <Grid item xs={3} sm={4} lg={3}>
                <Paper className={classes.paper2}>
                  <AccountCircleRoundedIcon className={classes.Iconsize2} />
                </Paper>
              </Grid>
              <Grid item xs={6} sm={4} lg={6}>
                <Paper className={classes.paper4}>
                  <p className={classes.textOwner}> นาย xxxxxx xxxxx </p>

                  <Button
                    className={classes.btnActivate}
                    variant="contained"
                    disabled
                  >
                    <Image
                      className="img-correct"
                      src="/images/CORRECT.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span className={classes.textActivat}>
                      ยืนยันด้วยบัตร ปชช. แล้ว
                    </span>
                  </Button>
                </Paper>
              </Grid> */}
              {/* <Grid item xs={3} lg={3}>
                <Paper className={classes.paper2}>
                  <p className={classes.more}>
                    ดูทั้งหมด
                    <ArrowForwardIcon className={classes.Iconsize} />
                  </p>
                </Paper>
              </Grid> */}
            </Paper>

            <Paper className={classes.paper8}>
              <p className={classes.productDetail3} style={{ display: "flex" }}>
                <span className={classes.textsell}>
                  {" "}
                  เป็นสมาชิกแล้ว 6 เดือน{" "}
                </span>
              </p>

              <Grid item xs={12} md={12}>
                <Paper className={classes.paperx3}>
                  <p
                    className={classes.productDetail3}
                    style={{ display: "flex" }}
                  >
                    <span className={classes.textsell}>
                      {" "}
                      เป็นสมาชิกผ่านช่องทาง{" "}
                    </span>
                  </p>
                  <Paper className={classes.favimg}>
                    {" "}
                    <Image
                      src="/images/Mobile_OK.png"
                      alt=""
                      width={"20"}
                      height={"20"}
                    />
                  </Paper>

                  <Paper className={classes.favimg}>
                    {" "}
                    <Image
                      src="/images/Facebook.png"
                      alt=""
                      width={"20"}
                      height={"20"}
                    />
                  </Paper>

                  <Paper className={classes.favimg}>
                    {" "}
                    <Image
                      src="/images/Mail_OK.png"
                      alt=""
                      width={"20"}
                      height={"20"}
                    />
                  </Paper>
                </Paper>
              </Grid>
            </Paper>
            <Grid className={classes.gridChat}>
              <Grid item xs={6} md={6} lg={12}>
                <Paper className={classes.paper7}>
                  <Image
                    src="/images/Chat-seller.png"
                    alt=""
                    width={"400"}
                    height={"50"}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6} md={6} lg={12}>
                <Paper className={classes.paper7}>
                  <Image
                    src="/images/Call-seller.png"
                    alt=""
                    width={"400"}
                    height={"50"}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper4}>
                <p className={classes.productDetail3}>
                  <Image
                    src="/images/Update.png"
                    alt=""
                    width={"15"}
                    height={"15"}
                  />
                  อัพเดทล่าสุด
                </p>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper4}>
                <p className={classes.productDetail2}>วันนี้ 22.00 น.</p>
              </Paper>
            </Grid>
          </Grid> */}
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper4}>
                <p
                  className={classes.productDetail3}
                  style={{ display: "flex" }}
                >
                  <CalendarToday />
                  <span className={classes.textsell}> ลงขายเมื่อ </span>
                </p>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper4}>
                <p className={classes.productDetail2}>
                  {/* {props.data.datas.created_date.substring(0, 10)} */}
                  
                  {new Intl.DateTimeFormat('th-GB', { 
                month: 'long', 
                day: '2-digit',
                year: 'numeric', 
            }).format(new Date(props.data.datas.created_date))}
                </p>
              </Paper>
            </Grid>
          </Grid>
          {/* <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper4}>
                <p className={classes.productDetail3}>
                  <Image
                    src="/images/location.png"
                    alt=""
                    width={"15"}
                    height={"15"}
                  />
                  ตำแหน่ง
                </p>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper4}>
                <p className={classes.productDetail2}>มีนบุรี กรุงเทพมหานคร</p>
              </Paper>
            </Grid>
          </Grid> */}
          {/* <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper4}>
                <p className={classes.productDetail3}>
                  <Image
                    src="/images/Announcement-number.png"
                    alt=""
                    width={"15"}
                    height={"15"}
                  />
                  หมายเลขประกาศ
                </p>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6}>
              <Paper className={classes.paper4}>
                <p className={classes.productDetail2}>535850218</p>
              </Paper>
            </Grid>
          </Grid> */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper4}>
                <p className={classes.textReport}>
                  <Image
                    src="/images/report.png"
                    alt=""
                    width={"25"}
                    height={"25"}
                  />
                  แจ้งประกาษไม่เหมาะสม
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "next/image";
import { Keyword } from "../interfaces/product";
import { CardContent, Collapse, Grid, Link, Paper } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 140,
    },
    root: {
      flexGrow: 1,
      backgroundColor: "#008C97",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#008C97",
      boxShadow: "none",
      border: "solid 3px",
      borderColor: " #fff",
      borderRadius: "15px",
    },
    textLink: {
      color: "#fff",
      fontSize: "14px",
    },
    gridCon: {
      display: "flex",
    },
    more: {
      color: "#00C900",
    },
    btnMore: {
      margin: "-4px 4px !important",
      width: "17px",
      height: "auto",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    AccordionSum: {
      placeContent: "center",
    },
    expand: {
      color: "#fff",
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(0deg)",
    },
  })
);

interface KeywordData {
  name: string;
  data: string[];
  image: string;
}

const keywordTypes: KeywordData[] = [
  {
    name: "อสังหาริมทรัพย์",
    data: ["บ้าน", "ที่ดิน"],
    image: "/images/Real-estate2.png",
  },
  { name: "รถยนต์", data: ["รถยนต์", "รถบรรทุก"], image: "/images/car2.png" },
  {
    name: "มอเตอร์ไซค์",
    data: ["มอเตอร์ไซค์"],
    image: "/images/Motocycle2.png",
  },
  {
    name: "มือถือ แท๊บเล็ต",
    data: [
      "มือถือ แท๊บเล็ต",
      "samsung",
      "xiaomi",
      "oppo",
      "Huawei",
      "OnePlus",
      "Vivo",
    ],
    image: "/images/Mobile-tablet2.png",
  },
  {
    name: "คอมพิวเตอร์",
    data: ["คอมพิวเตอร์"],
    image: "/images/Computer2.png",
  },
  {
    name: "เครื่องใช้ไฟฟ้า",
    data: ["เครื่องใช้ไฟฟ้า"],
    image: "/images/Electrical2.png",
  },
  { name: "สัตว์เลี้ยง", data: ["สัตว์เลี้ยง"], image: "/images/Pet2.png" },
  { name: "พระเครื่อง", data: ["พระเครื่อง"], image: "/images/Amulets2.png" },
  {
    name: "บ้านและสวน",
    data: ["บ้านและสวน"],
    image: "/images/Home-garden2.png",
  },
  {
    name: "อะไหล่ยนต์",
    data: ["อะไหล่ยนต์"],
    image: "/images/Car-accessories2.png",
  },
  { name: "จักรยาน", data: ["จักรยาน"], image: "/images/Bicycle2.png" },
  {
    name: "เครื่องดนตรี",
    data: ["เครื่องดนตรี", "กีตาร์"],
    image: "/images/Music2.png",
  },
  { name: "นาฬิกา", data: ["นาฬิกา"], image: "/images/Wrist-watch2.png" },
  {
    name: "เสื้อผ้าและแฟชั่น",
    data: ["เสื้อผ้าและแฟชั่น"],
    image: "/images/Fasion2.png",
  },
  { name: "รองเท้า", data: ["รองเท้า"], image: "/images/Shoes2.png" },
  { name: "กีฬา", data: ["กีฬา", "อุปกรณ์กีฬา"], image: "/images/Sport2.png" },
  { name: "กล้อง", data: ["กล้อง"], image: "/images/Camera2.png" },
  { name: "กระเป๋า", data: ["กระเป๋า"], image: "/images/Bag2.png" },
  { name: "เกมส์", data: ["เกมส์"], image: "/images/Game2.png" },
  {
    name: "เบ็ดตกปลา เหยื่อ",
    data: ["เบ็ดตกปลา", "เหยื่อปลอม"],
    image: "/images/Bait2.png",
  },
  { name: "โมเดล", data: ["โมเดล"], image: "/images/Model2.png" },
  { name: "แม่และเด็ก", data: ["แม่และเด็ก"], image: "/images/Toy2.png" },
  { name: "เกษตร", data: ["เกษตร"], image: "/images/Plant2.png" },
  { name: "ท่องเที่ยว", data: ["ท่องเที่ยว"], image: "/images/Travel2.png" },
  {
    name: "สุขภาพและความงาม",
    data: ["สุขภาพและความงาม"],
    image: "/images/Beauty.png",
  },
  { name: "ชา กาแฟ", data: ["กาแฟ"], image: "/images/Coffee2.png" },
  { name: "การเรียน", data: ["การเรียน"], image: "/images/Education2.png" },
];

const FullWidthGrid = (props: { keywords: Keyword[] }) => {
  const keywords = props.keywords;
  const classes = useStyles();
  const keywordFilter = keywordTypes
    .map((type) => {
      if (keywords.find((k) => type.data.includes(k.keyword))) {
        return type;
      }
    })
    .filter((x) => x !== undefined);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.root}>
      <CardContent>
        <Grid container spacing={1} className={classes.gridCon}>
          {keywordFilter.map((k: any, index) => {
            if (index >= 6) return <></>;

            return (
              <Grid item xs={4} md={3} sm={3} lg={2} key={index}>
                <Paper className={classes.paper}>
                  <Link href="/#">
                    <Image
                      className="img-category"
                      src={k.image}
                      alt=""
                      width={75}
                      height={75}
                    />

                    <p className={classes.textLink}>{k.name}</p>
                  </Link>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <Grid container spacing={1} className={classes.gridCon}>
            {keywordFilter.map((k: any, index) => {
              if (index <= 5) return <></>;

              return (
                <Grid item xs={4} md={3} sm={3} lg={2} key={index}>
                  <Paper className={classes.paper}>
                    <Link href="/#">
                      <Image
                        className="img-category"
                        src={k.image}
                        alt=""
                        width={75}
                        height={75}
                      />

                      <p className={classes.textLink}>{k.name}</p>
                    </Link>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Collapse>
      <p
        style={{ textAlign: "center" }}
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        {expanded == true ? "ดูน้อยลง" : "ดูทั้งหมด"}
        <img
          style={{ margin: "-4px 4px", width: "17px", height: "auto" }}
          src="/images/dropdown.png"
        />
      </p>
    </div>
  );
};

export default FullWidthGrid;

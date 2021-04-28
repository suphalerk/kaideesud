import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "none",
    },
    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
    },
    title: {
      color: "fff",
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    paper: {
      padding: "0px",
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    textHeader: {
      color: "#000",
      fontWeight: "bold",
      padding: " 0px",
      fontSize: " 1.5em",
      ["@media (max-width:500px)"]: {
        fontSize: " 16px",
        marginTop: "4em",
      },
    },
    activityDetail: {
      fontSize: "16px",
      textAlign: "left",
      color: "#7e7e7e",
      paddingLeft: "0px",
      marginTop: "0px",
      marginBottom: "0px",
    },
    more: {
      color: "#429EFE",
      width: "fit-content",
      fontSize: "13px",
      float: "right",
      display: "flex",
      ["@media (max-width:500px)"]: {
        marginRight: "0px",
        fontSize: "13px",
        marginTop: "0px",
      },
    },
    arrowPos: {
      width: "17px",
      Height: "17px",
      marginTop: "-2px",
    },
  })
);

const tileData = [
  {
    img:"https://appboy-images.com/appboy/communication/marketing/content_cards_message_variations/images/6062e125ff0a747721255aef/8d7a160154f7e8258d710e279522bca81fb47827/original.jpg?1617093001",
    title: "Image",
    author: "author",
  },
  {
    img:"https://appboy-images.com/appboy/communication/marketing/content_cards_message_variations/images/6062e026e16e170ec5fd42ec/f766cd99e9a839faf5e221ef69c0df57fb530c8c/original.jpg?1617092890",
    title: "Image",
    author: "author",
  },
  {
    img:"https://appboy-images.com/appboy/communication/marketing/content_cards_message_variations/images/6062e1bfd6a83b4abb4756cf/059c87dadfc0f5dcf362f6ae2e891f0c59a161b2/original.jpg?1617093135",
    title: "Image",
    author: "author",
  },
  {
    img:"https://appboy-images.com/appboy/communication/marketing/content_cards_message_variations/images/6062e28189461f651afc3872/af415260499008eef4a96ff0baccf58ea2a5fd51/original.jpg?1617093323",
    title: "Image",
    author: "author",
  },
  {
    img:"https://appboy-images.com/appboy/communication/marketing/content_cards_message_variations/images/6062e21e141af46b1414b649/be958dbe6060ef416689d28daae511483b0bc92d/original.jpg?1617093238",
    title: "Image",
    author: "author",
  },
];

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.textHeader}>
        กิจกรรมที่หน้าสนใจ
        <Link href="/productlist">
          <p className={classes.more}>
            ดูทั้งหมด
            <ArrowForwardIcon className={classes.arrowPos} />
          </p>
        </Link>
      </p>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// Tạo một custom Hook :D

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "90%",
    margin:"0 auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection:"column"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection:"column"
  },
}));

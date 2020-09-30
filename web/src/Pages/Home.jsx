import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Components/Button";
import Image from "../Components/Image";
import CheckIcon from "@material-ui/icons/Check";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  imageContainer: {
    textAlign: "center",
    width: "100%",
    minHeight: 300,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState({});
  const [selectedButtonIcon] = useState(<CheckIcon />);
  const [imagesList] = useState([
    { code: "button1", image: require("../Assets/Images/background-image.png") },
    { code: "button2", image: require("../Assets/Images/img_lights.jpg") },
    { code: "button3", image: require("../Assets/Images/SPHINX.jpg") },
  ]);
  let handelOnClick = (currentButtonName) => {
    let [obj] = imagesList.filter((i) => i.code === currentButtonName);
    setCurrentImage(obj);
  };
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item>
          <Button label='Button1' onclick={() => handelOnClick("button1")} icon={currentImage?.code === "button1" && selectedButtonIcon} />
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={8} className={classes.imageContainer}>
            {!currentImage?.image ? (
              <Typography variant='h4' gutterBottom>
                Click on any button to display its image!
              </Typography>
            ) : (
              <ButtonBase className={classes.image}>
                <Image image={currentImage?.image} label={currentImage?.code} />
              </ButtonBase>
            )}
          </Grid>
          <Grid item xs={4}>
            <Button label='Button2' onclick={() => handelOnClick("button2")} icon={currentImage?.code === "button2" && selectedButtonIcon} />
          </Grid>
        </Grid>
        <Grid item>
          <Button label='Button3' onclick={() => handelOnClick("button3")} icon={currentImage?.code === "button3" && selectedButtonIcon} />
        </Grid>
      </Grid>
    </div>
  );
}

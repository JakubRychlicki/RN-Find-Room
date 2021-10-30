import React from "react";
import { SliderBox } from "react-native-image-slider-box";

import { AppStyles } from "../../constants/AppStyles";

const PostSlider = (props) => {
  return (
    <SliderBox
      images={props.images}
      sliderBoxHeight={250}
      dotColor={AppStyles.color.dotSlider}
      inactiveDotColor={AppStyles.color.inactiveDotSlider}
      imageLoadingColor={AppStyles.color.primary}
      dotStyle={{
        width: 15,
        height: 15,
        borderRadius: 15,
      }}
    />
  );
};

export default PostSlider;

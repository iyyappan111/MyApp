import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleProp, ViewStyle, ListRenderItem, Dimensions } from 'react-native';
import Carousel, {
  CarouselProps as RNSCarouselProps,
  Pagination,
} from 'react-native-snap-carousel';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constants/colors';
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
interface CarouselItem {
  id: number;
  imgUrl: string;
}

interface MyCarouselProps extends RNSCarouselProps<CarouselItem> {
  data: CarouselItem[];
  renderItem: ListRenderItem<CarouselItem>; 
  style?: StyleProp<ViewStyle>;
}

const MyCarousel: React.FC<MyCarouselProps> = ({
  data,
  renderItem,
  autoplay = false,
  autoplayInterval = 1000,
  loop = false,
  sliderWidth = screenWidth,
  itemWidth = screenWidth,
  style,
}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef<Carousel<CarouselItem>>(null);
useEffect(() => {
    setIndex(0)
},[])
  return (
    <View>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        autoplay={autoplay}
        autoplayInterval={autoplayInterval}
        loop={loop}
        style={style}
        onSnapToItem={(currentIndex) => setIndex(currentIndex)}
      />
    </View>
  );
};

export default MyCarousel;

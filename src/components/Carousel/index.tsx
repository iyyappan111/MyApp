import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleProp, ViewStyle, ListRenderItem } from 'react-native';
import Carousel, {
  CarouselProps as RNSCarouselProps,
  ParallaxImage,
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constants/colors';

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
  sliderWidth = wp('100%'),
  itemWidth = wp('100%'),
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
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={(isCarousel as any)}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: colors.green,
          position:'relative',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: colors.black,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default MyCarousel;

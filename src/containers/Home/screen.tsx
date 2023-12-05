import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import Images from '../../constants/images';
import { colors } from '../../constants/colors';
import MyCarousel from '../../components/Carousel';

export const SLIDER_WIDTH = wp('100%');
export const ITEM_WIDTH = wp('70%');
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
interface Props {
  handleWelcomePress: () => void;
  loading: boolean;
}

const HomeScreen: React.FC<Props> = ({ handleWelcomePress, loading }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = React.useRef(null);
  useEffect(() => {
    console.log("screenWidth", screenWidth / 100)
    console.log("screenHeight", screenHeight)
  }, [])
  interface CarouselItem {
    id: number;
    imgUrl: string;
  }

  const data: CarouselItem[] = [
    {
      id: 1,
      imgUrl: Images.sample1,
    },
    {
      id: 2,
      imgUrl: Images.sample2,
    },
    {
      id: 3,

      imgUrl: Images.sample3,
    },
    {
      id: 4,
      imgUrl: Images.sample5,
    },
  ];

  const list = [
    {
      id: 1,
      title: "Mobile",
      imgUrl: Images.mobile,
    },
    {
      id: 2,
      title: "Appliance",
      imgUrl: Images.watches,
    },
    {
      id: 3,
      title: "HeadPhone",
      imgUrl: Images.headPhone,
    },
    {
      id: 4,
      title: "TV",
      imgUrl: Images.tv,
    },
    {
      id: 5,
      title: "Watches",
      imgUrl: Images.watches
    },
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: wp("100%"), height: hp('25%') }}>
        <Image
          source={item.imgUrl}
          style={{
            width: screenWidth,
            height: hp('25%'),
            resizeMode:'contain'
          }}
        />
      </View>
    );
  };


  const SkeletonItem = () => (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        margin: 8,
      }}
    >
      <ActivityIndicator size="small" color="#999" />
    </View>
  );

  const listItem = ({ item }: any) => (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp("30%"),
        height: hp("15%"),
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 6,

      }}
    >
      <Image
        source={item.imgUrl}
        style={{ width: '100%', height: '100%', borderRadius: 8 }}
        resizeMode="cover"
      />
      <View style={{ paddingVertical: hp("0.5%"), justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const SkeletonCarouselItem = () => (
    <View
      style={{
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        backgroundColor: '#f0f0f0', // Adjust as needed
        borderColor: 'rgba(0, 0, 0, 0.2)',
        width: wp("100%"),
        height: hp('25%'),
      }}
    >
      <ActivityIndicator size="small" color="#999" />
    </View>
  );

  return (
    <View style={styles.container}>


      <View style={styles.headerContainer}>
        <Feather name={'menu'} size={20} style={styles.icon} />
        <View style={styles.searchCartContainer}>
          <Feather name={'search'} size={20} style={styles.icon} />
          <Feather name={'shopping-cart'} size={20} style={styles.icon} />
        </View>
      </View>



      <View style={{ width: wp("100%"), height: hp('25%'), justifyContent: 'center', alignItems: 'center' }}>
        <MyCarousel
          data={data}
          renderItem={renderItem}
          autoplay={true}
          autoplayInterval={1000}
          loop={true}
          style={{ height: 200 }}
        />

      </View>
      <View style={{ height: hp("20%"), justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View style={{ width: wp("100%"), justifyContent: 'center', alignItems: 'flex-start', paddingVertical: hp("2%"), paddingLeft: 3 }}>
          <Text>
            Categories
          </Text>
        </View>
        <View style={{ height: hp("20%"), justifyContent: 'flex-start', alignItems: 'center' }}>
          <FlatList
            data={loading ? new Array(3).fill(null) : list}
            keyExtractor={(item, index) => (item ? item.id.toString() : `skeleton-${index}`)}
            renderItem={loading ? SkeletonItem : listItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 0 }}
          />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: screenHeight / 15
  },
  icon: {
    paddingHorizontal: wp('2%'),
    color: 'black',
  },
  searchCartContainer: {
    justifyContent: 'flex-end',
    width: wp('85%'),
    height: hp('10%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  carouselContainer: {
    backgroundColor: 'red',
    borderRadius: 8,
    width: wp("100%"),
    height: hp("20%"),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp("85%"),
    height: hp("20%"),
    resizeMode: 'contain',
    justifyContent: "center",
    alignItems: 'center'
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default HomeScreen;

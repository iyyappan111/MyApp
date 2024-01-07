import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Carousel from 'react-native-snap-carousel';
import Images from '../../constants/images';
import { colors } from '../../constants/colors';
import MyCarousel from '../../components/Carousel';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategoriesHeader from '../../components/categoriesHeader';
import HomeHeader from '../../components/homeHeader';
import CustomTextInput from '../../components/customInputComponents';
import Icons from '../../constants/icons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export const SLIDER_WIDTH = wp('100%');
export const ITEM_WIDTH = wp('70%');
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
interface Props {
  handleWelcomePress: () => void;
  loading: boolean;
  onLoadStart: () => void;
  onProgress: (val: any) => void;
  onLoad: (val: any) => void;
  onLoadEnd: () => void;
  onError: (e: any) => void;
}

const HomeScreen: React.FC<Props> = ({ handleWelcomePress, loading, onLoadStart, onProgress, onLoad, onLoadEnd, onError }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = React.useRef(null);
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
      imgUrl: Icons.mobileIcon,
      backgroundColor:colors.skyblue
    },
    {
      id: 2,
      title: "Appliance",
      imgUrl: Icons.headPhone,
      backgroundColor:colors.skyblue
    },
    {
      id: 3,
      title: "HeadPhone",
      imgUrl: Icons.watch,
      backgroundColor:colors.skyblue
    },
    
    {
      id: 4,
      title: "TV",
      imgUrl:Icons.sunglass,
      backgroundColor:colors.skyblue
    },
    {
      id: 5,
      title: "Watches",
      imgUrl: Icons.laptopIcon,
      backgroundColor:colors.skyblue
    },
  ];


  const offerDeals = [
    {
      id: 1,
      imgUrl: Images.mobile,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 2,
      imgUrl: Images.watches,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 3,
      imgUrl: Images.tv,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 4,
      imgUrl: Images.headPhone,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 5,
      imgUrl: Images.mobile,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 1,
      imgUrl: Images.mobile,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 2,
      imgUrl: Images.watches,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 3,
      imgUrl: Images.tv,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 4,
      imgUrl: Images.headPhone,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 5,
      imgUrl: Images.mobile,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 1,
      imgUrl: Images.mobile,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 2,
      imgUrl: Images.watches,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 3,
      imgUrl: Images.tv,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 4,
      imgUrl: Images.headPhone,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
    {
      id: 5,
      imgUrl: Images.mobile,
      offer: '10% off',
      dealTextColor: colors.red,
      dealText: 'Deal of the Day'
    },
  ];

  useEffect(() => {
  }, [])
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((accumulator, currentValue) => {
    console.log()
    return accumulator + currentValue;
  }, 0);

  const MIN_HEIGHT = hp("20%");
  const MAX_HEIGHT = hp("20%");

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: screenWidth, maxHeight: hp("30%") }}>
        <Image
          style={{
            width: screenWidth, // Set a fixed width for the frame
            // minHeight: hp('25%'), // Set a fixed height for the frame
            borderRadius: 10,
          }}
          resizeMode='contain' // Use 'contain' to fit the entire image within the specified dimensions
          source={item.imgUrl}
          onLoadStart={onLoadStart}
          onProgress={(e) => onProgress(e)}
          onLoad={(e) => onLoad(e)}
          onLoadEnd={onLoadEnd}
          onError={() => {
            console.error('Image loading error');
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
        width: wp("15%"),
        height: hp("7%"),
        //backgroundColor: colors.goldenrod,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: wp("2.5%")
      }}>
     <Image source={item.imgUrl} style={{resizeMode:'contain',  width: wp("15%"),
        height: hp("7%"),}}/>
    </TouchableOpacity>
  );
  const productItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.2)',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: wp("42%"),
          height: hp("30%"),
          backgroundColor: '#fff',
          borderRadius: 8,
          margin: wp("4%"),

        }}
      >

        <FastImage
          style={{ width: '100%', height: '100%', borderRadius: 8 }}
          source={item.imgUrl}
          onLoadStart={onLoadStart}
          onProgress={(e) => onProgress(e)}
          onLoad={(e) => onLoad(e)}
          onLoadEnd={onLoadEnd}
          onError={() => {
            console.error('Image loading error');
          }}
        />
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: wp("2%") }}>
          <Text style={{ backgroundColor: item.dealTextColor,fontFamily:'Roboto-Light' }}>
            {item.offer}
          </Text>
          <Text style={{ paddingHorizontal: wp("1%"),fontFamily:'Roboto-Light' }}>
            {item.dealText}
          </Text>
        </View>

      </TouchableOpacity>
    );
  };


  const onPressSeeMore = () => {

  }
  const [search, setSearch] = useState<string>()
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader
          locationText={"Meenambakkam"}
          containerStyle={null}
          leftIconComponents={<Feather name={'map-pin'} size={20} style={[styles._icon, { color: 'black' }]} />}
          rightCartIconComponents={<Feather name={'shopping-cart'} size={20} style={[styles._icon, { color: 'black' }]} />}
          rightNotificationIconComponents={<MaterialIcons name={'notifications-none'} size={20} style={[styles._icon, { color: 'black' }]} />}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center', minHeight: hp("11%") }}>
          <CustomTextInput
            placeholder="Search"
            value={search}
            multiline={false}
            maxLength={256}
            keyboardType="default"
            returnKeyType="done"
            secureTextEntry={false}
            onFocus={() => {
              console.log('TextInput focused');
            }}
            placeholderTextColor={colors.black}
            rightIcon={Icons.search}
            leftIcon={Icons.close}
            inputStyle={{ width: wp('90%') }}
            onChangeText={(text) => {
              setSearch(text)
            }}
          />
        </View>
        <MyCarousel
          data={data}
          renderItem={renderItem}
          autoplay={true}
          autoplayInterval={2000}
          loop={true}
        />

        <View style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <CategoriesHeader
            text={'Categores'}
            seeMoreText={'see all '}
            onPressSeeMore={onPressSeeMore} />

          <View style={{ justifyContent: 'space-between', alignItems: 'center', width: screenWidth}}>
            <FlatList
              data={loading ? new Array(3).fill(null) : list}
              keyExtractor={(item, index) => (item ? item.id.toString() : `skeleton-${index}`)}
              renderItem={loading ? SkeletonItem : listItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 0 }}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: wp("100%") }}>
            <FlatList
              data={offerDeals}
              renderItem={productItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 0 }}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'white'
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
  _icon: {
    marginHorizontal: wp("2%"),
  },
});

export default HomeScreen;







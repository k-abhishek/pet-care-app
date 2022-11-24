import { View, Text, FlatList, Image, useWindowDimensions, Animated, TouchableOpacity } from "react-native";
import React, { useRef, useState, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Paginator from "../components/Paginator";
import Icon from 'react-native-vector-icons/Feather';

const OnBoarding = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const navigation = useNavigation();
  //const scrollX = useRef(new Animated.Value(0).current);
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@viewedOnboarding", 'yes');
      navigaton.navigate('Home');
    } catch (e) {
      // saving error
    }
  };
  
  const slides = [{
    id: 1, 
    title: ' Welcome to Pet care App',
    description: 'here are so many places that you need to describe your business, whether it’s your website,',
    image: 'https://img.freepik.com/free-vector/cute-dog-cat-friend-cartoon_138676-2432.jpg?w=2000'
  },{
    id: 2, 
    title: ' Affordable pet Sitters available',
    description: ' tricky part. How can you accurately convey what makes your business special in a few hundred characte',
    image: 'https://i.pinimg.com/736x/36/c8/70/36c870febfa220545e16ffee194b9453.jpg'
  },{
    id: 3, 
    title: 'this is test title',
    description: ' Plumbing, Heating & Air Conditioning opened its doors to Draper, UT and the rest of Utah County nearly 40 ye',
    image: 'https://media.istockphoto.com/id/1180989037/vector/cartoon-cute-beagle-puppy-vector-character-mascot.jpg?s=612x612&w=0&k=20&c=MLy9ynEYeJNQVUWk4SdESllseqmv0E1zSTeVtrFRRzQ='
  }]

  const scrollTo = () => {
    if(currentIndex !== slides.length -1) {
      slideRef.current.scrollToIndex({index: currentIndex+1})
    } else {
      storeData();
    }
  }

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <View className='flex-1 justify-center items-center bg-white font-["Poppins]'>
      <View style={{flex: 3}} className='relative'>
        <TouchableOpacity className='bg-primary opacity-95 ml-auto rounded-2xl px-2 py-1 absolute top-12 right-4 z-10' onPress={storeData}><Text className='text-white'>Skip</Text></TouchableOpacity>
        <FlatList horizontal
        data={slides} 
        ref={slideRef}
        pagingEnabled 
        bounces={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false} 
        keyExtractor={item => item.id}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewableItemsChanged}
        //onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
        renderItem={({item}) => (<View className='flex-1 justify-center items-center' style={{width}}>
          <Image source={{uri: item.image}} style={{ resizeMode: 'contain', width, justifyContent: 'center', flex: 0.6}}/>
          <View className='flex-[0.1] rounded-t-[30px]' style={{width, flex: 0.4}}>
            <Text className='font-[800] text-center mb-2 text-xl text-headingColor'>{item.title}</Text>
            <Text className='font-[300] text-center px-[64px] text-slate-400'>{item.description}</Text>
          </View>
        </View>)}/>
        {/* <Paginator data={slides} /> */}
      </View>
      <TouchableOpacity className='bg-primary rounded-full px-6 py-6 mb-5' onPress={scrollTo}>
        {currentIndex === slides.length-1?<Icon name="check" color='#fff' size={25}/>:<Icon name="chevron-right" color='#fff' size={25}/>}
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;

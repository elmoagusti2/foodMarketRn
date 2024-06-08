
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const FoodList = ({
  image,
  title,
  price,
  star = 3.9,
  showStar = true,
  onTap
}) => {
  const navigation = useNavigation();
  const views = [];
  if (showStar) {
    for (let i = 0; i < 5; i++) {
      views.push(
        <View key={i} >
          <MaterialCommunityIcons name="star" color={Math.round(star) > i ? '#FFC700' : '#ECECEC'} size={16} />
        </View>
      );
    }
  }
  return (
    <TouchableOpacity onPress={onTap} activeOpacity={0.7} >
      <View style={styles.card}>
        <Image source={{ uri: image ?? 'https://asset.kompas.com/crops/kfOxHIz66v4BBpmhrxrq3JXosCA=/0x0:1000x667/780x390/data/photo/2020/12/17/5fdb3cd0c1525.jpg' }} width={60} height={60} style={styles.image} />
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title} >{title ?? 'Title'}</Text>
          <Text numberOfLines={1} style={styles.price} >IDR {price ?? '0.00'}</Text>
        </View>
        {views}
        {showStar ? (
          <Text style={{ color: '#8D92A3' }}> {star}</Text>
        ) : (<View />)}
      </View>
    </TouchableOpacity>
  )
}

export default FoodList

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 24

  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 60, flex: 1,
    marginLeft: 12,
  },
  image: {
    borderRadius: 8
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202'
  }, price: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3'
  },
})
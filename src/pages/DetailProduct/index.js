import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { showFlashMessage, TextStyle } from '../../components';
import numeral from 'numeral';
import { addOrUpdateItemInArray, getArray } from '../../utils';

const DetailProduct = ({ route }) => {
  const navigation = useNavigation();
  const { id, image, title = '-', description, ingredients, price, star = 3 } = route.params || {}; // Default value for `name` if it's undefined

  const views = [];
  const [qty, setQty] = useState(1);
  const totalPrice = price * qty;

  for (let i = 0; i < 5; i++) {
    views.push(
      <View key={i} >
        <MaterialCommunityIcons name="star" color={Math.round(star) > i ? '#FFC700' : '#ECECEC'} size={16} />
      </View>
    );
  }
  const navigator = useNavigation();

  const onSubmit = () => {
    try {
      console.log({ id: id, image: image, title: title, price: price, total_price: totalPrice, qty: qty });
      addOrUpdateItemInArray('cart', { id: id, image: image, title: title, price: price, total_price: totalPrice, qty: qty });
      console.log(getArray('cart'));
      navigator.goBack();
      showFlashMessage(`${title} ditambahkan ke keranjang`, 'SUCCESS');
    } catch (error) {
      showFlashMessage(error, 'ERROR');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: image ?? 'https://asset.kompas.com/crops/kfOxHIz66v4BBpmhrxrq3JXosCA=/0x0:1000x667/780x390/data/photo/2020/12/17/5fdb3cd0c1525.jpg' }} style={styles.imageBackground}>
        <TouchableOpacity style={styles.back} onPress={() => navigator.goBack()}>
          <MaterialCommunityIcons name="chevron-left" color={'#ECECEC'} size={40} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <View style={{ flexDirection: 'column', flex: 1 }} >
              <Text style={styles.title}>{title}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {views}
                <Text style={{}}> {star}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
              <TouchableOpacity onPress={() => setQty(qty > 1 ? qty - 1 : qty)}><View style={{ padding: 2, borderRadius: 8, borderColor: 'black', borderWidth: 1, margin: 5 }} ><MaterialCommunityIcons name="minus" color={'black'} size={20} /></View>
              </TouchableOpacity>
              <Text style={{ color: 'black' }}>{qty}</Text>
              <TouchableOpacity onPress={() => setQty(qty + 1)}><View style={{ padding: 2, borderRadius: 8, borderColor: 'black', borderWidth: 1, margin: 5 }} ><MaterialCommunityIcons name="plus" color={'black'} size={20} /></View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.ingredient}>
            Ingredients:
          </Text>
          <Text style={styles.description}>{ingredients}</Text>
        </View>
        <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 27 }}>
          <View>
            <Text style={[TextStyle.regular14, { color: '#8D92A3' }]}>Total price:</Text>
            <Text style={[TextStyle.bold14, { color: 'black' }]}>IDR {numeral(totalPrice).format('0,0')}</Text>
          </View>
          <TouchableOpacity onPress={onSubmit} style={{ backgroundColor: '#FFC700', borderRadius: 10, height: 45, width: 163, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white' }}>Add Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
  ingredient: {
    fontSize: 14,
    color: 'black',
    marginBottom: 6,
    fontFamily: 'Poppins-Regular'
  },
  title: {
    fontSize: 16,
    color: 'black',
    marginBottom: 6,
    fontFamily: 'Poppins-Regular'
  },
  description: {
    fontSize: 16,
    color: '#8D92A3',
    marginBottom: 6,
    fontFamily: 'Poppins-Regular',
    marginBottom: 16
  },
  content: {
    justifyContent: 'space-between',
    marginVertical: -20,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 52
  },
  back: {
    margin: 10
  },
  imageBackground: {
    height: 300,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
  },
})
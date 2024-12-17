import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { React, useEffect } from 'react'
import { FoodCard, Gap, Shimmers } from '../../components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContentAll, ContentByCategory } from './components/Suggestion';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from '../../redux/action/home';

const Home = ({ navigation }) => {
  const Tab = createMaterialTopTabNavigator();
  const dispatch = useDispatch();
  const { isLoading, listMenu, listCategory } = useSelector((state) => state.homeReducer);

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchMenu());
    }
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.userSection}>
        <View>
          <Text style={styles.title}>FoodMarket</Text>
          <Text style={styles.subTitle} >Lets get some foods</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' }}
            style={{ width: 70, height: 70, borderRadius: 20 }} />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal style={styles.topMenu} overScrollMode="never" showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
          {!isLoading && listMenu.length > 0 ? (
            listMenu.map((item) => (<FoodCard key={item.id} url={item.picture_path} title={item.name} star={item.rate}
              onTap={
                () => navigation.navigate('DetailProduct',
                  {
                    'id': item.id,
                    'image': item.picture_path,
                    'title': item.name,
                    'description': item.description,
                    'ingredients': item.ingredients,
                    'price': item.price,
                    'star': item.rate
                  })} />))
          ) : isLoading ? ([1, 2].map((i) => <Shimmers key={i} />)) : null}
          <Gap width={12} />
        </ScrollView>
      </View>
      <Tab.Navigator screenOptions={{
        tabBarItemStyle: { width: "auto" },
        tabBarScrollEnabled: false,
        tabBarIndicatorStyle: {
          backgroundColor: '#020202',
        },
        tabBarStyle: { elevation: 0 }
      }} >
        <Tab.Screen name="All" component={ContentAll} options={{ tabBarLabel: () => (<Text style={styles.nameScreen} >All</Text>) }} />
        {!isLoading && listCategory.length > 0 ? (
          listCategory.map((item) => (<Tab.Screen key={item} initialParams={{ type: item }} name={item} component={ContentByCategory} options={{ tabBarLabel: () => (<Text style={styles.nameScreen}>{item}</Text>) }} />))
        ) : null}
      </Tab.Navigator>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  userSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white'
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    color: '#020202'
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  topMenu: {
  },
  nameScreen: {
    color: '#020202'
  }
})
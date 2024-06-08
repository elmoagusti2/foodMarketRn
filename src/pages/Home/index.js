import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodCard, Gap } from '../../components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NewTaste, Popular, Recommended } from './components/Suggestion';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const Tab = createMaterialTopTabNavigator();
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
          <Gap width={12} />
          <FoodCard url='https://www.masakapahariini.com/wp-content/uploads/2023/01/resep-ayam-bakar-kalasan.jpg' title='Ayam bakar' star={1} />
          <FoodCard url='https://asset.kompas.com/crops/kfOxHIz66v4BBpmhrxrq3JXosCA=/0x0:1000x667/780x390/data/photo/2020/12/17/5fdb3cd0c1525.jpg' title='Ikan bakar' />
          <FoodCard url='https://img-global.cpcdn.com/recipes/686e2ca9be6a4126/1200x630cq70/photo.jpg' title='Bebek madura' />
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
        <Tab.Screen name="New Taste" component={NewTaste} options={{ tabBarLabel: () => (<Text>New Taste</Text>) }} />
        <Tab.Screen name="Popular" component={Popular} options={{ tabBarLabel: () => (<Text>Popular</Text>) }} />
        <Tab.Screen name="Recommended" component={Recommended} options={{ tabBarLabel: () => (<Text>Recommended</Text>) }} />
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
  }
})
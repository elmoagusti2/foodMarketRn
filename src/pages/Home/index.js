import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.userSection}>
        <View>
          <Text style={styles.title}>FoodMarket</Text>
          <Text style={styles.subTitle} >Lets get some foods</Text>
        </View>
        <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' }}
          style={{ width: 70, height: 70, borderRadius: 20 }} />
      </View>
    </SafeAreaView>
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
})
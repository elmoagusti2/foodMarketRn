import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Gap, TabProfiles } from '../../components'

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.content}>
        <TouchableOpacity>
          <View style={{ alignItems: 'center' }} >
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Image source={{ uri: 'https://asset.kompas.com/crops/7thYP_ec_dTWDTASdKNk6QTjUSU=/115x188:584x500/750x500/data/photo/2022/04/29/626bab541c7b5.jpg' }} style={styles.photoContainer} />
              </View>
            </View>
            <Gap height={12}></Gap>
          </View>
        </TouchableOpacity>
        <Text style={styles.name} >Udin amin sedunia</Text>
        <Text style={styles.email}>Udin@amin.cc</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TabProfiles />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingTop: 26,
    paddingBottom: 26,
    paddingHorizontal: 8,
    marginBottom: 24
  },
  borderPhoto: {
    width: 100,
    height: 100,
    borderRadius: 90,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 8,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  email: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3', textAlign: 'center'

  }
})
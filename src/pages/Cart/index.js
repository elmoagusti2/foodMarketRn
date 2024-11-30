import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FoodList, Gap, Header, TabOrders, TextStyle } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Cart = () => {
    const [qty, setQty] = useState(1);
    return (
        <View style={{ flex: 1 }}>
            <Header title={"Your Carts"} subTitle={"Wait for the best meal"} />
            <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 8 }}>
                {[1, 1, 1, 1].map((item, index) => (
                    <View key={index} style={styles.product}>
                        <View style={{ flexDirection: 'row', marginBottom: 16 }} >
                            <Image source={{ uri: 'https://asset.kompas.com/crops/kfOxHIz66v4BBpmhrxrq3JXosCA=/0x0:1000x667/780x390/data/photo/2020/12/17/5fdb3cd0c1525.jpg' }} height={60} width={60} resizeMode='cover' style={{ borderRadius: 10 }} />
                            <View style={{ marginLeft: 12 }}>
                                <Text style={TextStyle.regular16} numberOfLines={1} >Ikan bakar setan</Text>
                                <Text style={[TextStyle.regular16, styles.detailText]}>IDR 152,212,333</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
                            <TouchableOpacity onPress={() => setQty(qty > 1 ? qty - 1 : qty)}><View style={{ padding: 2, borderRadius: 8, borderColor: 'black', borderWidth: 1, margin: 5 }} ><MaterialCommunityIcons name="minus" color={'black'} size={20} /></View>
                            </TouchableOpacity>
                            <Text>{qty}</Text>
                            <TouchableOpacity onPress={() => setQty(qty + 1)}><View style={{ padding: 2, borderRadius: 8, borderColor: 'black', borderWidth: 1, margin: 5 }} ><MaterialCommunityIcons name="plus" color={'black'} size={20} /></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <Gap height={16} />
            <View style={styles.bottomContent}>
                <View style={styles.positionText}>
                    <Text style={[TextStyle.regular12, styles.detailText]}>Subtotal</Text>
                    <Text style={[TextStyle.regular14, { color: '#1ABC9C' }]}>IDR 178.912.999.000</Text>
                </View>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    detailText: {
        color: '#8D92A3'
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomContent: {
        paddingHorizontal: 16,
        backgroundColor: 'white'
    }
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header, TextStyle } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const TransactionPage = () => {
    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            <Header onBack={() => navigate.goBack()} title={'Payment'} subTitle={'You deseverve better meal'} />
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    <Text style={[TextStyle.regular14, { color: 'black', marginBottom: 12 }]}>Item ordered</Text>
                    {[1, 1, 1, 1, 1,].map((item, index) => (
                        <View key={index} style={styles.product}>
                            <View style={{ flexDirection: 'row', marginBottom: 16 }} >
                                <Image source={{ uri: 'https://asset.kompas.com/crops/kfOxHIz66v4BBpmhrxrq3JXosCA=/0x0:1000x667/780x390/data/photo/2020/12/17/5fdb3cd0c1525.jpg' }} height={60} width={60} resizeMode='cover' style={{ borderRadius: 10 }} />
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={TextStyle.regular16} numberOfLines={1} >Title</Text>
                                    <Text style={[TextStyle.regular16, styles.detailText]}>IDR 0</Text>
                                </View>
                            </View>
                            <Text style={[TextStyle.regular12, styles.detailText]}>14 items</Text>
                        </View>
                    ))}
                    <Text style={[TextStyle.regular14, { color: 'black', marginBottom: 8 }]}>Detail transaction</Text>
                    <View style={styles.positionText}>
                        <Text style={[TextStyle.regular12, styles.detailText]}>Subtotal</Text>
                        <Text style={[TextStyle.regular12, styles.contentText]}>IDR 123.123.000.000</Text>
                    </View>
                    <View style={styles.positionText}>
                        <Text style={[TextStyle.regular12, styles.detailText]}>Driver</Text>
                        <Text style={[TextStyle.regular12, styles.contentText]}>IDR 123.123</Text>
                    </View>
                    <View style={styles.positionText}>
                        <Text style={[TextStyle.regular12, styles.detailText]}>Tax 12%</Text>
                        <Text style={[TextStyle.regular12, styles.contentText]}>IDR 999.000</Text>
                    </View>
                    <View style={styles.positionText}>
                        <Text style={[TextStyle.regular12, styles.detailText]}>Total price</Text>
                        <Text style={[TextStyle.regular14, { color: '#1ABC9C' }]}>IDR 178.912.999.000</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={[TextStyle.regular14, { color: 'black', marginBottom: 12 }]}>Deliver to:</Text>
                    <View style={styles.positionText}>
                        <Text style={[TextStyle.regular12, styles.detailText]}>name</Text>
                        <Text style={[TextStyle.regular12, styles.contentText]}>Elmo ganteng</Text>
                    </View>
                    <View style={styles.positionText}>
                        <Text style={[TextStyle.regular12, styles.detailText]}>Phone No</Text>
                        <Text style={[TextStyle.regular12, styles.contentText]}>021 2121 1212</Text>
                    </View>
                    <View style={styles.positionText}>
                        <Text style={[TextStyle.regular12, { color: '#8D92A3', marginRight: 20 }]}>Full address</Text>
                        <Text style={[TextStyle.regular12, { color: 'black', width: 200, textAlign: 'right' }]}>jl. Pondok cabe udik no.8 kec. pademangan ciputat timur, kota yogyakarta 15411</Text>
                    </View>

                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={TextStyle.bold14}>Checkout now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TransactionPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginBottom: 26,
    },
    button: {
        marginHorizontal: 24,
        marginBottom: 26,
        backgroundColor: '#FFC700',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    content: {
        backgroundColor: 'white',
        marginTop: 24, paddingTop: 16,
        paddingHorizontal: 24
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    positionText:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    detailText: {
        color: '#8D92A3'
    },
    contentText: {
        color: 'black'
    },
})
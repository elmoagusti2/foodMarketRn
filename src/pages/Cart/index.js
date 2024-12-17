import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FoodList, Gap, Header, TabOrders, TextStyle } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { deleteString, getArray, saveArray } from '../../utils';
import { useFocusEffect } from '@react-navigation/native';
import numeral from 'numeral';

const Cart = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);
    const cartItemsRef = useRef(cartItems);

    useEffect(() => {
        cartItemsRef.current = cartItems;
    }, [cartItems]);

    useFocusEffect(
        React.useCallback(() => {
            getList();
            // Optional cleanup (if needed)
            return () => {
                //if exit tab
                saveArray('cart', cartItemsRef.current);
            };
        }, [])
    );

    const getList = () => {
        const list = getArray('cart');
        console.log('Cart data:', list);
        setCartItems(list);
    }

    const updateItem = (item, isAdditions) => {
        {
            if (item.qty === 1 && !isAdditions) {
                const update = cartItems.filter((b) => b.id !== item.id);
                console.log(update);
                setCartItems(update);
            }
            else {
                const update = cartItems.map((b) => (b.id === item.id ? { ...b, ...{ qty: isAdditions ? item.qty + 1 : item.qty - 1, total_price: item.price * (isAdditions ? item.qty + 1 : item.qty - 1) } } : b));
                setCartItems(update);
            }
        }
    }
    const onSubmit = () => {
        saveArray('cart', cartItemsRef.current);
        navigation.navigate('Transaction');
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title={"Your Carts"} subTitle={"Wait for the best meal"} />
            <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 8 }}>
                {cartItems.map((item, index) => (
                    <View key={index} style={styles.product}>
                        <View style={{ flexDirection: 'row', marginBottom: 16 }} >
                            <Image source={{ uri: item.image }} height={60} width={60} resizeMode='cover' style={{ borderRadius: 10 }} />
                            <View style={{ marginLeft: 12 }}>
                                <Text style={TextStyle.regular16} numberOfLines={1} >{item.title}</Text>
                                <Text style={[TextStyle.regular16, styles.detailText]}>IDR {numeral(item.total_price).format('0,0')}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}  >
                            <TouchableOpacity onPress={() => updateItem(item, false)}><View style={{ padding: 2, borderRadius: 8, borderColor: 'black', borderWidth: 1, margin: 5 }} ><MaterialCommunityIcons name="minus" color={'black'} size={20} /></View>
                            </TouchableOpacity>
                            <Text>{item.qty}</Text>
                            <TouchableOpacity onPress={() => updateItem(item, true)}><View style={{ padding: 2, borderRadius: 8, borderColor: 'black', borderWidth: 1, margin: 5 }} ><MaterialCommunityIcons name="plus" color={'black'} size={20} /></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <Gap height={16} />
            <View style={styles.bottomContent}>
                <View style={styles.positionText}>
                    <Text style={[TextStyle.regular12, styles.detailText]}>Subtotal</Text>
                    <Text style={[TextStyle.regular14, { color: '#1ABC9C' }]}>IDR {numeral(cartItems.reduce((sum, item) => sum + item.total_price, 0)).format('0,0')}</Text>
                </View>
                <TouchableOpacity onPress={onSubmit} style={{ backgroundColor: '#FFC700', borderRadius: 10, height: 45, width: 163, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>Process & Payment</Text>
                </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'white'
    }
})
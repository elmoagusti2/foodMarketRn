import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FoodCard = ({
    url,
    title,
    star = 3,
    onTap,
}) => {
    const views = [];
    for (let i = 0; i < 5; i++) {
        views.push(
            <View key={i} >
                <MaterialCommunityIcons name="star" color={star > i ? '#FFC700' : '#ECECEC'} size={16} />
            </View>
        );
    }

    return (
        <TouchableOpacity style={styles.card} onPress={onTap}>
            <View style={styles.cardContent} >
                <Image source={{ uri: url }} resizeMode='cover' width={200} height={140} />
                <View style={styles.content} >
                    <Text style={styles.title} >{title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {views}
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default FoodCard

const styles = StyleSheet.create({
    card: {
        margin: 12,
        borderRadius: 8,
        width: 200,
        height: 200,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContent: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'flex-end',
    },
    content: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 6,

    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202'
    }
})
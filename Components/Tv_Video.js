import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { demo_data, Viedo_data } from './DemoProducts'

const Tv_Video = () => {
    return (
        <View>
            <Text style={styles.text_Trending}>Series Videos</Text>
            <FlatList
                data={Viedo_data}
                horizontal
                keyExtractor={(val) => val.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.box} key={index}>

                            <TouchableOpacity>
                                <Image source={{ uri: item.image }} style={{ width: 120, height: 170 }} />

                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Tv_Video

const styles = StyleSheet.create({
    text_Trending: {
        color: '#ffffff',
        fontSize: 16,
        marginHorizontal: 10,
        marginTop: 10
    }, box: {
        width: 120,
        height: 170,
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 5
    }
})
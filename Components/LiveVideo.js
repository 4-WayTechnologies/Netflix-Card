import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { demo_data, Viedo_data } from './DemoProducts'
const width = Dimensions.get('window').width
const LiveVideo = () => {
    return (
        <View>
            <Text style={styles.text_Trending}>Live Videos</Text>
            <FlatList
                data={Viedo_data}
                horizontal
                pagingEnabled
                keyExtractor={(val) => val.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: width - 100,
                            height: 300,
                            marginTop: 5,
                            borderColor: 'red',
                            marginHorizontal: 50
                        }} key={index}>

                            <TouchableOpacity>

                                <Image source={{ uri: item.image }} style={{
                                    width: width - 100,
                                    height: 300,
                                }} />

                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default LiveVideo

const styles = StyleSheet.create({
    text_Trending: {
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10,
        textDecorationLine: 'underline'
    }
})
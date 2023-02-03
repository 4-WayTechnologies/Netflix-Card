import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { demo_data, Viedo_data } from './DemoProducts'
import Tv_Video from './Tv_Video'
import LiveVideo from './LiveVideo'
const NetflixCard = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text_Netflix}>NetflixCard</Text>
            <View>
                <Text style={styles.text_Trending}> Trending Videos</Text>
                <FlatList
                    data={demo_data}
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

            <View>
                <Tv_Video />
            </View>
            <View>
                <LiveVideo />
            </View>
        </ScrollView>
    )
}

export default NetflixCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }, text_Netflix: {
        color: 'red',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 10,
    }, text_Trending: {
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
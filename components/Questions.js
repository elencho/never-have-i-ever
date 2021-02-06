import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

const Questions = ({ navigation }) => {
    return (
        <>
            <ImageBackground source={require('../images/wall.jpeg')} style={styles.back}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.btnBack}><Text style={styles.smallwowo}>უკან</Text></View>
                </TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.wowo}>ზვიადა ვარ ფიცხელაური</Text>
                    <TouchableOpacity>
                        <View style={styles.btn}><Text style={styles.wowo}>შემდეგი</Text></View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    btnBack: {
        margin: 5,
        backgroundColor: '#C07DF7',
        width: 80,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center'
    },
    back: {
        flex: 1,
        width: null,
        height: null,
    },
    box: {
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: '#FF7345',
        width: 330,
        height: 500,
        borderRadius: 25,
        alignItems: 'center',
        padding: 30,
        justifyContent: 'space-between'

    },
    smallwowo: {
        textAlign: 'center',
        fontFamily: 'bpg_extrasquare_mtavruli_2009',
        fontSize: 20,
        color: '#fff'
    },
    wowo: {
        textAlign: 'center',
        fontFamily: 'bpg_extrasquare_mtavruli_2009',
        fontSize: 30,
        color: '#fff'
    },
    btn: {
        backgroundColor: '#8600CB',
        padding: 20,
        width: 230,
        borderRadius: 10,
        alignItems: 'center'
    }

});

export default Questions;

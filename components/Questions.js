import React,{useState,useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';





function Questions ({navigation})  {

    useEffect(() => {
        getValue()
      },[]);
      
  const [result,setResult] = useState('')

  const getValue = () => {
   const QuestionChild = ['მე არასდროს მიტარებია მოტოციკლი','მე არასდროს მიღალატია მეგობრისთვის','მე არასდროს მიმღერია კარაოკე','მე არასდროს მომიტეხავს ხელი ან ფეხი',
'მე არასდროს მყოლია შეყვარებული','მე არასდროს მიჩხუბია ხალხის თანდასწრებით','მე არასდროს მქონია ტყუილი სოციალური გვერდი','მე არასდროს შემშლია ავტობუსი ან მარშუტკა','მე არასდროს ვყოფილვარ შერცხვენილი საჯაროდ','მე არასდროს მდომებია პოპულარობა','მე არასდროს გამიჩენია ცეცხლი','მე არასდროს გავმხდარვარ პოპულარული სოციალურ ქსელში','მე არასდროს გამოვსულვარ სიტყვით 100 ადამიანის წინ','მე არასდროს ვყოფილვარ საზღვარგარეთ','მე არასდროს დამილევია ალკოჰოლი','მე არასდროს მიცდია დიეტა','მე არასდროს გამიჩუქებია საჩუქარი','მე არასდროს მიჭამია მთლიანი პიცა','მე არასდროს დამიტოვია კევი საზოგადოებრივ ადგილას','მე არასდროს მიმიღია მონაწილეობა მარათონში','მე არასდროს ჩამძინებია ონლაინ გაკვეთილზე','მე არასდროს მომიპარავს რაღაც რას 10ლარზე მეტად ფასობს','მე არასდროს მომწონებია სიმღერა პაპიტო','მე არასდროს დავნიძლავებულვარ','მე არასდროს დამიდგამს დრამა სკოლაში','მე არასდროს გადამიწერია ტესტი','მე არასდროს გამისინჯავს სიგარეტი','მე არასდროს მიმიღია მოანწილება მასშტაბურ შოუში'
]
setResult(QuestionChild[Math.floor(Math.random() * QuestionChild.length)]);

}
    return (
        <>
            <ImageBackground source={require('../images/wall.jpeg')} style={styles.back}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')
                 
            }}>
                    <View style={styles.btnBack}><Text style={styles.smallwowo}>უკან</Text></View>
                </TouchableOpacity>
                <View style={styles.box}>
    <Text style={styles.wowo}>{result}</Text>
                    <TouchableOpacity onPress={getValue}>
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


export default Questions
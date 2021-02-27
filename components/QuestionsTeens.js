import React,{useState,useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';





function QuestionsTeens ({navigation})  {

    useEffect(() => {
        getValue()
      },[]);

    const [result,setResult] = useState('')

    const getValue = () => {
     const QuestionChild = ['მე არასდროს გამისინჯავს მარიხუანა','მე არასდროს მიკოცნია საუკეთესო მეგობრითვის','მე არასდროს მიკოცნია საერთო სქესისთვის','მე არასდროს გავუგდივარ ბარიდან დაცვას','მე არასდროს ვყოფილვარ ღია ურთიერთობაში','ჩემთვის არადროს დაუდიათ','მე არასდროს დამილევია გათიშვამდე','მე არასდროს მქონია ყალბი პირადობის/მართვის მოწმობა','მე არასდროს მიღალატია შეყვარებულისთვის','მე არასდროს მიკოცნია 24 საათში ერთზე მეტი ადამიანისთვის','მე არასდროს მქონია “ერთი ღამით სიყვარული”','მე არასდროს გამიკეთებია ტატუ','მე არასდროს გადამირჩენია ვინმეს სიცოცხლე','მე არასდროს მიცეკვია თვერქი','მე არასდროს მომიტყუებია ჩემი ასაკი','მე არასდროს შემითხზავს ამბავი იმაზე, ვინც არ არსებობს','მე არასდროს მიმიღია მონაწილეობა აქციაში','მე არასდროს მინანია ბოდიში','მე არასდროს მცმია სხვისი ტრუსები','მე არასდროს მითვალთვალია მეზობლისთვის','მე არასდროს ჩამიდენია ისეთი რამ რაც შემდეგ ვინანე','მე არასდროს წამიშლია პოსტი იმის გამო, რომ მოწონებები ვერ ააგროვა']
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
        backgroundColor: '#00ACD8',
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


export default QuestionsTeens
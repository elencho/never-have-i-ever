import React,{useEffect,useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

function QuestionsAdult({ navigation }) {
    useEffect(() => {
        getValue()
      },[]);
      
  const [result,setResult] = useState('')

  const getValue = () => {
   const QuestionChild = [
'მე არასდროს გადამიღია სელფი აბაზანაში','მე არასდროს მქონია ურთიერთობა მეგობრობაზე მეტი და სიყვარულზე ნაკლები','მე არასდროს ჩამიდენია არალეგალური საქმე','მე არასდროს ვყოფილვარ ბორკილებში','მე არასდროს მყვარებია ჩემი ძმის/დის უახლოესი მეგობარი','მე არასდროს მიკოცნია უცნობისთვის','მე არასდროს გამჩენია ეჭვი ჩემს ორიენტაციაზე','მე არასდროს გამიგზავნია ნუდები','მე არასდროს ჩამძინებია სექსის დროს','მე არასდროს ვყოფილვარ სტრიპტიზ კლუბში','მე არასდროს მქონია გრუპავოი','მე არასდროს მომიწევია მოსაწევი','მე არასდროს გამიკუებია სექსის დროს','მე არასდროს მიმიღია ნარკოტიკი']
setResult(QuestionChild[Math.floor(Math.random() * QuestionChild.length)]);

}
    return (
        <>
            <ImageBackground source={require('../images/wall.jpeg')} style={styles.back}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
        backgroundColor: '#FF212F',
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

export default QuestionsAdult;

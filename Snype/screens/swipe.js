import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import StarButton from '../shared/star_button';
import {MaterialIcons} from '@expo/vector-icons';
import yelp from '../src/yelp'

export default function Swipe_Page() {
  const [term, setTerm] = useState('restaurants');
  const [results, setResults] = useState([]);
  var yelp_terms = ['lol']

  const getResult = async () =>{
    console.log("I am a test")
    try {
      var response = await yelp.get("/search", {params: {term, limit: 50, latitude: 33.837126, longitude: -118.174566 }})
      console.log(response.data.businesses);
      setResults(response.data.businesses);
      return response.data.businesses;
      }
    catch (err) {
      console.log("Could not retrieve Yelp Data")
      console.warn(err)
      return [];
      // setResults([])
      }
    return response;
    }

  // To prevent infinite loop for UseState, this will call Yelp API Once
  useEffect(() => {
    getResult();
  }, []);

  setTimeout(function(){ console.log("UHHH"); }, 3000);
  console.log(results);


  const openModal = (image) => {
    console.log(image);
    setClickedCard(image);
    console.log(clickedCard)
    setCardModalOpen(true);
  }
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [clickedCard, setClickedCard] = useState('');

  const [food_cards, setfood_cards] = useState([
    {name: 'Burger', image_url: 'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4.jpg'},
    {name: 'Hotpot', image_url: 'https://static01.nyt.com/images/2019/08/27/dining/27REST-DAL-slide-N2XY/27REST-DAL-slide-N2XY-superJumbo.jpg'},
    {name: 'KBBQ', image_url: 'https://www.touristsecrets.com/wp-content/uploads/2019/06/1-Featured-image-Korean-BBQ-by-arjieljosephfg-on-Instagram.jpg'},
    {name: 'Halal Guys', image_url: 'https://s3.amazonaws.com/bncore/wp-content/uploads/2018/08/halal-guys-product-spread.jpg'},
    {name: 'Hot Dogs', image_url: 'https://5i0b63wqszy3rogfx27pxco1-wpengine.netdna-ssl.com/wp-content/uploads/Basic-Hot-Dogs-600x500.jpg'},
    {name: 'Cajun Seafood', image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F03%2Fmain%2F4085501_crawfish-boil.jpg%3Fitok%3DhGzCef7C'},
    {name: 'Fried Chicken', image_url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg'},
    {name: 'Pasta', image_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190903-pasta-pomodoro-0201-landscape-pf-1568667704.jpg?crop=0.668xw:1.00xh;0.158xw,0&resize=480:*'},
    {name: 'Dim Sum', image_url: 'https://www.dimsumcentral.com/wp-content/uploads/2018/06/what-is-dim-sum-header-new.jpg'},
    {name: 'Pho', image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg'},
    {name: 'Ramen', image_url: 'https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg'},
    {name: 'BBQ', image_url: 'https://kreuzmarket.com/files/2017/10/pro-package-1.jpg'},
    {name: 'Xiao long bao', image_url: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/46/96/12/ZjK6w7d3Soa4y9kLqsOr_DIN_TAI_FUNG_STYLE_XIAO_LONG_BAO_SOUP_DUMPLINGS_025.jpg'},
  ]);
  console.log("WE ARE HERE =========================")
  console.log(food_cards[1]['image_url'])
  console.log(results.length)
  return (
    <View style={styles.container}>
        <Modal visible={cardModalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView vertical={true} style={styles.scrollView}>
              <MaterialIcons
                name='close'
                size={28}
                onPress = {()=>setCardModalOpen(false)}
                style={{...styles.modalToggle, ...styles.modalClose}}
              />
                <ImageBackground source={{uri: clickedCard}} style={styles.backgroundImageCard}>
                </ImageBackground>
                <Text>Tapped on a card</Text>

            </ScrollView>
          </TouchableWithoutFeedback>
        </Modal>
        <Swiper
            cards={results}
            renderCard={(card) => {
                return(
                    <View style={styles.card}>
                    <ImageBackground source={{uri: card.image_url}} style={styles.backgroundImage}>
                    <StarButton onPress = {() => {console.log('Test click on star')}}/>
                    </ImageBackground>
                        <Text style={styles.text}>{card.name}</Text>
                    </View>

                )
            }}
            onSwipedLeft={() => {console.log('Swiped left')}}
            onSwipedRight={() => {console.log('Swiped right')}}
            onSwipedTop={() => {console.log('Swiped up')}}
            onSwipedBottom={() => {console.log('Swiped down')}}
            onTapCard={(cardIndex)=>openModal(results[cardIndex]['image_url'] )}
            onSwiped={(cardIndex) => {console.log(results[cardIndex]['name'])}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#696969'}
            useViewOverflow={Platform.OS === 'ios'}
            stackSize= {3}>
        </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 0.8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  backgroundImageCard: {
    padding: 150,
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  modalToggle:{
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose:{
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent:{
    flex: 1,
  },
  scrollView:{
    backgroundColor: 'white',
    padding: 10
  },
});

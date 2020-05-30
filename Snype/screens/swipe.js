import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Modal, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import StarButton from '../shared/star_button';
import {MaterialIcons} from '@expo/vector-icons';

export default function Swipe_Page() {

  const openModal = (image) => {
    console.log(image);
    setClickedCard(image);
    console.log(clickedCard)
    setCardModalOpen(true);
  }
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [clickedCard, setClickedCard] = useState('');

  const [food_cards, setfood_cards] = useState([
    {name: 'Burger', image: 'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4.jpg'},
    {name: 'Hotpot', image: 'https://static01.nyt.com/images/2019/08/27/dining/27REST-DAL-slide-N2XY/27REST-DAL-slide-N2XY-superJumbo.jpg'},
    {name: 'KBBQ', image: 'https://www.touristsecrets.com/wp-content/uploads/2019/06/1-Featured-image-Korean-BBQ-by-arjieljosephfg-on-Instagram.jpg'},
    {name: 'Halal Guys', image: 'https://s3.amazonaws.com/bncore/wp-content/uploads/2018/08/halal-guys-product-spread.jpg'},
    {name: 'Hot Dogs', image: 'https://5i0b63wqszy3rogfx27pxco1-wpengine.netdna-ssl.com/wp-content/uploads/Basic-Hot-Dogs-600x500.jpg'},
    {name: 'Cajun Seafood', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F03%2Fmain%2F4085501_crawfish-boil.jpg%3Fitok%3DhGzCef7C'},
    {name: 'Fried Chicken', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg'},
    {name: 'Pasta', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190903-pasta-pomodoro-0201-landscape-pf-1568667704.jpg?crop=0.668xw:1.00xh;0.158xw,0&resize=480:*'},
    {name: 'Dim Sum', image: 'https://www.dimsumcentral.com/wp-content/uploads/2018/06/what-is-dim-sum-header-new.jpg'},
    {name: 'Pho', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg'},
    {name: 'Ramen', image: 'https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg'},
    {name: 'BBQ', image: 'https://kreuzmarket.com/files/2017/10/pro-package-1.jpg'},
    {name: 'Xiao long bao', image: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/46/96/12/ZjK6w7d3Soa4y9kLqsOr_DIN_TAI_FUNG_STYLE_XIAO_LONG_BAO_SOUP_DUMPLINGS_025.jpg'},
  ]);
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
            cards={food_cards}
            renderCard={(card) => {
                return(
                    <View style={styles.card}>
                    <ImageBackground source={{uri: card.image}} style={styles.backgroundImage}>
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
            onTapCard={(cardIndex)=>openModal(food_cards[cardIndex]['image'] )}
            onSwiped={(cardIndex) => {console.log(food_cards[cardIndex]['name'])}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'black'}
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

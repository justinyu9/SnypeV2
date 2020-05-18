'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

const cards = [
  {name: 'Burger', image: 'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4.jpg'},
  {name: 'Hotpot', image: 'https://static01.nyt.com/images/2019/08/27/dining/27REST-DAL-slide-N2XY/27REST-DAL-slide-N2XY-superJumbo.jpg'},
  {name: 'KBBQ', image: 'https://www.touristsecrets.com/wp-content/uploads/2019/06/1-Featured-image-Korean-BBQ-by-arjieljosephfg-on-Instagram.jpg'},
  {name: 'Halal Guys', image: 'https://s3.amazonaws.com/bncore/wp-content/uploads/2018/08/halal-guys-product-spread.jpg'},
  {name: 'Hot Dogs', image: 'https://5i0b63wqszy3rogfx27pxco1-wpengine.netdna-ssl.com/wp-content/uploads/Basic-Hot-Dogs-600x500.jpg'},
  {name: 'Cajun Seafood', image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F03%2Fmain%2F4085501_crawfish-boil.jpg%3Fitok%3DhGzCef7C'},
  {name: 'Fried Chicken', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_FRBZ19_6445_C01_31_3b.jpg'},
  {name: 'Pasta', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190903-pasta-pomodoro-0201-landscape-pf-1568667704.jpg?crop=0.668xw:1.00xh;0.158xw,0&resize=480:*'},
  {name: 'Dim Sum', image: 'https://www.dimsumcentral.com/wp-content/uploads/2018/06/what-is-dim-sum-header-new.jpg'},
]

const cards2 = [
  {name: 'Pho', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Pho-Beef-Noodles-2008.jpg'},
  {name: 'Ramen', image: 'https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg'},
  {name: 'BBQ', image: 'https://kreuzmarket.com/files/2017/10/pro-package-1.jpg'},
  {name: 'Xiao long bao', image: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/46/96/12/ZjK6w7d3Soa4y9kLqsOr_DIN_TAI_FUNG_STYLE_XIAO_LONG_BAO_SOUP_DUMPLINGS_025.jpg'},
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup (card) {
    console.log(`Yes for ${card.name}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }

  handleMaybe (card) {
    console.log(`Maybe for ${card.name}`)
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 8

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }

    }

  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        showMaybe={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

import { StyleSheet, Text, Image, BackHandler } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../constants/colors'

const ProductItem = ({ product }) => {
  return (
    <Card style={styles.additionalStylesCard}
    >
      <Text style={styles.textCategory}>{product.title}</Text>
      <Image
        resizeMode = 'contain'
        style={styles.image}
        source={{ uri: product.images[0] }}
      />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 15,
  },
  additionalStylesCard: {
    paddingLeft: 10,
    flexDirection: 'column',
    height: 300,
    width: 300,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
  },
  textCategory: {
    color: colors.platinum,
  }
})
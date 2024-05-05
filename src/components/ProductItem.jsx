import { StyleSheet, Text, Image, BackHandler, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../constants/colors'
import { useDispatch } from "react-redux"
import { setIdSelected } from "../features/Shop/shopSlice"

const ProductItem = ({
  product, 
  setProductSelected = () => { },
  navigation,
}) => {

  const dispatch = useDispatch()
  const handleNavigate = () => {
    dispatch(setIdSelected(product.title))
    navigation.navigate('ItemDetail', {productId: product.id})
  }

  return (
    <Card style={styles.additionalStylesCard}
    >
     <Pressable
        style={styles.pressable}
        onPress={handleNavigate}
      >
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Pressable>
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
    padding: 10,
    flexDirection: 'column',
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
  },
  textCategory: {
    color: colors.platinum,
    textAlign: 'center',
    marginBottom: 5
  },
  pressable:{
    alignItems: 'center',
    justifyContent: 'center'
  }
})
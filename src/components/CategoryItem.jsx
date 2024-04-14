import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.text}>{category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: colors.teal400,
    height: 40,
    width: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 10,
  },
  text: {
    color: colors.teal200,
    textAlign: 'center',
  }
})
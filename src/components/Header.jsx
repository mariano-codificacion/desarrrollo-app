import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'


const Header = ({title}) => {
  const {height, width} = useWindowDimensions()
  return (
    <View style = {styles.container}>
      <Text style = {width > 361 ? styles.text: styles.textSm}>{title}</Text>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: colors.teal900,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.teal200,
    fontFamily: 'Josefin',
    fontSize: 22
  },
  textSm: {
    color: colors.teal200,
    fontFamily: 'Josefin',
    fontSize: 18
  }
})
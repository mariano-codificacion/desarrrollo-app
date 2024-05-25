import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
    
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.teal400,
    width: 200,
    height: 100,
    borderRadius: 50,
    shadowColor: colors.platinum,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.65,
    elevation: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
}
})
   
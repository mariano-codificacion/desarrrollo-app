import { StyleSheet, Text, View, FlatList } from 'react-native'
import ProductItem from '../components/ProductItem'
import products from '../data/products.json'
import { colors } from '../constants/colors'

const ItemListCategory = () => {
    console.log(products);
  return (
    <View style= {styles.flatListContainer}>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        data = {products}
        renderItem = {({item}) => <ProductItem product = {item}/>}
        keyExtractor = {(producto) => producto.id}
      />
    </View>
  )
}

export default ItemListCategory


const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.teal600,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
})


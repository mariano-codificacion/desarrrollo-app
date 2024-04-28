import { StyleSheet, View, FlatList } from 'react-native'
import ProductItem from '../components/ProductItem'
import products from '../data/products.json'
import { colors } from '../constants/colors'
import { useState, useEffect } from 'react'
import Search from '../components/Search'

const ItemListCategory = ({ categorySelected = "", setCategorySelected = () => { } }) => {

  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const productsPrefiltered = products.filter(product => product.category === categorySelected)
    const productsFilter = productsPrefiltered.filter(product => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
    setProductsFiltered(productsFilter)
    setError("")
  }, [keyWord, categorySelected])

  return (

    <View style={styles.flatListContainer}>
      <Search error={error} onSearch={setKeyword} goBack={() => setCategorySelected("")} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productsFiltered}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(producto) => producto.id}
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


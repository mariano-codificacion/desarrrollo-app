import { StyleSheet, View, FlatList } from 'react-native'
import ProductItem from '../components/ProductItem'
import { colors } from '../constants/colors'
import { useState, useEffect } from 'react'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ItemListCategory = ({
setCategorySelected = () => {},
navigation, 
route
}) => {

  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  const {category: categorySelected} = route.params 

  const {data: productsFetched, error: errorFromFetch, isLoading} = useGetProductsByCategoryQuery(categorySelected)

  useEffect(() => {
    
    if (!isLoading) {
      const productsFilter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      )
      setProductsFiltered(productsFilter)
      setError("")
    }
  }, [keyWord, categorySelected, productsFetched, isLoading])

  return (

    <View style={styles.flatListContainer}>
      <Search error={error} onSearch={setKeyword} goBack={() => navigation.goBack()} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productsFiltered}
        renderItem={({ item }) => ( 
        <ProductItem product={item} navigation={navigation}/>)}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({

  flatListContainer: {
    width: '100%',
    backgroundColor: colors.platinum,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
})


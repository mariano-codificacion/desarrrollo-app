import { FlatList, StyleSheet, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import { useGetCategoriesQuery } from "../services/shopService"
import ShopLayout from "../components/ShopLayout"

const Home = ({ navigation }) => {

  const { data: categories, error, isLoading } = useGetCategoriesQuery()

  return (
    <ShopLayout>
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(elemntoDeMiArray) => elemntoDeMiArray}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem
            navigation={navigation}
            category={item}
          />
        )}
      />
    </View>
    </ShopLayout>
    
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    //backgroundColor: colors.teal600,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
})
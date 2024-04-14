import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"

const Home = () => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
       keyExtractor={item =>item}
       data={categories}
       renderItem = {({item}) => <CategoryItem category={item}/>}
      />
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.teal600,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

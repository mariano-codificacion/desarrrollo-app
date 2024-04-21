import { StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"
import { FlatList } from "react-native-web"

const Home = () => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
       showsVerticalScrollIndicator={false}
       keyExtractor={item =>item}
       data={categories}
       renderItem = {({item}) => <CategoryItem category={item}/>}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    backgroundColor: colors.teal600,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
})
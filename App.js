import { StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import Header from "./src/components/Header"
import { colors } from "./src/constants/colors"
import ItemListCategory from "./src/screens/ItemListCategory"

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ItemListCategory />
      {/*<Home />*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.teal200,
  },
})

export default App

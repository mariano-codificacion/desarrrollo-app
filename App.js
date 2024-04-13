import { StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import Header from "./src/components/Header"
import { colors } from "./src/constants/colors"

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      alignItems: "center",
      backgroundColor: colors.teal200,
      flex: 1,
    },
  })

export default App

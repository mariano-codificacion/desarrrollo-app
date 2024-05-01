import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native"
import { colors } from "./src/constants/colors"
import Navigator from "./src/navigation/navigator"

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Navigator/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
container: {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  // alignItems: "center",
  backgroundColor: colors.teal200,
},
})

export default App

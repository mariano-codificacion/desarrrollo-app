import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native"
import { colors } from "./src/constants/colors"
import Navigator from "./src/navigation/navigator"
import { Provider } from "react-redux"
import store from "./src/store"
import { dropSessionsTable, initSQLiteDB } from "./src/persistence"

(async ()=> {
    try {
        const response = await initSQLiteDB()
    } catch (error) {
    }
})()

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Navigator/>
        </Provider>
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

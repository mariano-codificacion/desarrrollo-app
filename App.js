import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/Header"
import ItemListCategory from "./src/screens/ItemListCategory"
import { useState } from "react"
import { useFonts } from "expo-font"
import ItemDetail from "./src/screens/Detail"

const App = () => {

  const [categorySelected, setCategorySelected] = useState("")
  const [itemIdSelected, setItemIdSelected] = useState("")
 
    return (
      <SafeAreaView style={styles.container}>
        <Header title={"Titulo de la app"} />
        {!categorySelected ? (
          <Home setCategorySelected={setCategorySelected} />
        ) : 

        !itemIdSelected ?
          <ItemListCategory
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
            setItemIdSelected={setItemIdSelected}
          />
          :
          <ItemDetail 
            idSelected={itemIdSelected}
            setProductSelected={setItemIdSelected}
          />
        }
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    // alignItems: "center",
    backgroundColor: colors.teal200,
  },
})

export default App
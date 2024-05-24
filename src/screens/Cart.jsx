import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import CartItem from "../components/CartItem"
import { useDispatch, useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"
import { colors } from "../constants/colors"
//import { clearCart } from "../features/Cart/cartSlice"

const Cart = ({navigation}) => {

    const { localId } = useSelector(state => state.auth.value)
    const { items: CartData, total } = useSelector(state => state.cart.value)
    const [triggerPostOrder, result] = usePostOrderMutation()
    //const dispatch = useDispatch()

    const onConfirmOrder = () => {
        triggerPostOrder({ items: CartData, user: localId, total })
        navigation.navigate("Orders")
        //dispatch(clearCart());
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
                keyExtractor={(pepe) => pepe.id}
                renderItem={({ item }) => {
                    return <CartItem cartItem={item} />
                }}
            />
            <View style={styles.totalContainer}>
                {total?(
                    <Pressable onPress={onConfirmOrder}>
                        <Text style={styles.text}>Confirm Order</Text>
                    </Pressable>
                ):(
                    <>
                    </>
                )
                }
            </View>
            < View style={styles.total}>
                <Text style={styles.text}>Total: ${total}</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 120,
    },
    totalContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: colors.teal600
    },
    total: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        fontSize: 30,
        backgroundColor: colors.teal900
    },
    text: {
        fontSize: 20,
    },
})

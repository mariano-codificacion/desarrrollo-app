import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
// import CartData from "../data/cart.json"
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux"
import { usePostOrderMutation } from "../services/shopService"
import { colors } from "../constants/colors"

const Cart = () => {
    // console.log(CartData);

    const { items: CartData, total } = useSelector(state => state.cart.value)
    const [triggerPostOrder, result] = usePostOrderMutation()


    /* let total = 0
    for (const currentItem of CartData) {
        console.log(currentItem.id);
        total += currentItem.price * currentItem.quantity
    } */

    /* onConfirm = () => {
        triggerPost({
            total,
            items: cartItems,
            user: "userLoggedId",
            date: new Date().toLocaleString(),
        })
    } */

    const onConfirmOrder = () => {
        triggerPostOrder({ items: CartData, user: 'Mariano', total })
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
                <View>
                    <Pressable onPress={onConfirmOrder}>
                        <Text>Confirm Order</Text>
                    </Pressable>
                </View>
                <View>
                    <Text>Total: ${total}</Text>
                </View>
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
        margin: 40,
        backgroundColor: colors.teal600
    },
})
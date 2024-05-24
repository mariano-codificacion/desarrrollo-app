import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { removeCartItem } from "../features/Cart/cartSlice";
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {

    dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeCartItem({ id: cartItem.id }));
  }


    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Pressable onPress={handleRemoveCart}>
            <Entypo name="trash" size={30} color="black" />
            </Pressable>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.platinum,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
       
        fontSize: 19,
        color: colors.teal400,
    },
    text2: {
       
        fontSize: 14,
        color: colors.teal600,
    },
});

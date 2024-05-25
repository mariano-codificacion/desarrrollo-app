import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { clearUser } from "../features/User/userSlice";
import { truncateSessionsTable } from "../persistence"
import ShopLayout from "../components/ShopLayout"

const MyProfile = ({ navigation }) => {

    const dispatch = useDispatch()

    const { imageCamera, localId } = useSelector(state => state.auth.value)

    const { data: imageFromBase } = useGetProfileImageQuery(localId)

    const launchCamera = async () => {
        navigation.navigate('Image selector')
    };

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    const signOut = async () => {
        try {
            const response = await truncateSessionsTable()
            dispatch(clearUser())
        } catch (error) {
        }
    }

    const defaultImageRoute = "../../assets/images/defaultProfile.png"

    return (
        <ShopLayout>
        <View style={styles.container}>
            {imageFromBase || imageCamera ? (
                <Image
                    source={{ uri: imageFromBase?.image || imageCamera }}
                    style={styles.image}
                    resizeMode="contain"
                />
            ) : (
                <Image
                    source={require(defaultImageRoute)}
                    style={styles.image}
                    resizeMode="contain"
                />
            )}
            <AddButton onPress={launchCamera} title={imageFromBase || imageCamera ?
                "Modify profile picture"
                : "Add profile picture"}
            />
            <AddButton onPress={launchLocation} title="My address" />
            <AddButton onPress={signOut} title="Sign out" />
        </View>
        </ShopLayout>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },
});

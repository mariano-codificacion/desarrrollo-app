import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ExpoLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/User/userSlice";
import AddButton from "../components/AddButton";
import { colors } from "../constants/colors";
import { usePostProfileImageMutation } from "../services/shopService";
import { useGetProfileImageQuery
 } from "../services/shopService";

const ImageSelector = ({ navigation }) => {

    const [image, setImage] = useState(null);

    const [isImageFromCamera, setIsImageFromCamera] = useState(false)

    const [imageURI, setImageURI] = useState("")

    const { localId } = useSelector((state) => state.auth.value)

    const {data: imageFromBase} = useGetProfileImageQuery(localId) 

    const [triggerPostImage, result] = usePostProfileImageMutation()

    const dispatch = useDispatch()

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        return granted
    }
    const verifyLibraryPermissions = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        return granted
    }
 
    const pickLibraryImage = async () => {
        try {
            setIsImageFromCamera(false)
            const permissionGallery = await verifyLibraryPermissions ()
            if (permissionGallery) {
                const result = ImagePicker.launchImageLibraryAsync ({
                    base64:true,
                    allowsEditing:true,
                    aspect: [1, 1],
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.2,
                })
                if (!result.canceled){
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }
        } catch (error) {

        }
            
    }  
    
    const pickImage = async () => {

        setIsImageFromCamera(true)

        try {
            const permissionCamera = await verifyCameraPermissions()
            
            if (permissionCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2    
                })
                
                if (!result.canceled){
                    setImageURI(result.assets[0].uri)
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }
            
        } catch (error) {
            console.log(error);
        }

    };
    
    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image))
            triggerPostImage({image, localId})
            if (isImageFromCamera) {
                const result = await ExpoLibrary.createAssetAsync(imageURI)
            }
            navigation.goBack()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            {image || imageFromBase ? (
                <>
                    <Image source={{ uri: image || imageFromBase?.image }} style={styles.image} />
                    <AddButton title="Take another photo" onPress={pickImage} />
                    <AddButton title="Pick photo from galery" onPress={pickLibraryImage} />
                    <AddButton title="Confirm photo" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No photo to show...</Text>
                    </View>
                    <AddButton title="Take a photo" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.platinum,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

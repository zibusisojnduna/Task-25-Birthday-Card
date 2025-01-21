import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Stylesheet, Platform,} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Button } from "react-native-paper";

function CardScreen() {
    const [text, setText] = useState("Happy Biryhday!")
    const [imageUri, setImageUri] = useState(null)

    const pickImage = () => {
        launchImageLibrary({ mediaType:"photo"}, (response) => {
            if (response.assets && response.assets[0].uri) {
                setImageUri(response.assets[0].uri)
            }

        })
    }

    const handleTextChange = (newText) => {
        setText(newText)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create your Bithday Card</Text>

            {/* Image Picker */}
            <Button mode="contained" onPress={pickImage} style={styles.button}>
                Choose Background Image
            </Button>

            {/* Display Image */}
            <Button mode="contained" onPress={pickImage}  style={styles.button}>
                {imageUri && <Image source={{ uri: imageUri}} style={styles.cardImage}/>} 
            </Button>

            {/*Text Editing*/}
            <TextInput
                style={styles.textInput}
                onChangeText={handleTextChange}
                value={text}
                placeholder="Enter your message"
                multiline
                />

                {/*Save Card Message*/}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveText}>Save Card</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button:{
        marginBottom: 20,
    },
    cardImage:{
        width: '100%',
        height: 300,
        marginBottom: 20,
        borderRadius: 10,
    },
    TextInput:{
       height: 100,
        width: '100%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        fontSize: 18,  
    },
    saveButton:{
        padding: 10,
        backgroundColor: '#6200ee',
        borderRadius: 5,
    },
    saveText:{
        color: '#fff',
        fontSize: 16,
    }
})
import { StyleSheet, Text, TouchableHighlight } from "react-native"


const CoolButton = (props) => {
    return(
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableHighlight>
    )

}

export default CoolButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 10,
        borderRadius: 3,
        width: '90%',
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        paddingLeft: 10,
        paddingRight: 10,
    },
})
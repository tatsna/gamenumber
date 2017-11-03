import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, AppRegistry, AppState, TouchableHighlight, TextInput } from 'react-native';
import PushNotification from 'react-native-push-notification'

export default class Gamerandom extends Component {
    constructor() {
        super();

        this.state = {
            num: "",
            numrandom: "",
            apikey: "00000000-0000-0000-0000-000000000000",
        }
    }

    // start game function
    StartGame() {
        // fetch random.org json
        fetch('https://www.random.org/integers/?num=1&min=1000&max=9999&col=1&base=10&format=plain&rnd=new&api=', this.state.apikey)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    numrandom: response
                }, )
                alert("Ready Game")
            });
    }
    // start new game function
    StartNewGame() {
        // fetch random.org json
        fetch('https://www.random.org/integers/?num=1&min=1000&max=9999&col=1&base=10&format=plain&rnd=new&api=', this.state.apikey)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    numrandom: response
                }, )
                alert("New Game!!!")
            });
    }

    // Number function
    changeNumber(num) {
        this.setState({
            num
        })
    }

    // Lose game
    loseGame() {
        alert(this.state.numrandom)
    }

    //On click show alert
    OnClick() {
        if (this.state.numrandom == "") {
            alert("Press the button StartGame!!")
        }
        else if (this.state.num == this.state.numrandom) {
            alert("The Winner !!!!")
            this.StartNewGame()
        } else if (this.state.num > this.state.numrandom) {
            alert("Too Much")
        } else if (this.state.num < this.state.numrandom) {
            alert("Too Less")
        }
    }



    render() {
        return (
            <View style={styles.container}>
               
                <TouchableHighlight
                    style={styles.botton3}
                    onPress={() => this.StartGame()}
                >
                    <Text> StartGame!!! </Text>
                </TouchableHighlight>
                <Text style={styles.text1}>Range 1000 - 9999</Text>
                <TextInput style={styles.input}
                    placeholder="number"
                    value={this.state.num}
                    onChangeText={(num) => this.changeNumber(num)}
                />
                <TouchableHighlight
                    style={styles.botton}
                    onPress={() => this.OnClick()}
                >
                    <Text>   PLAY    </Text>
                </TouchableHighlight>


                <TouchableHighlight
                    style={styles.botton2}
                    onPress={() => this.loseGame()}
                >
                    <Text>   Answer   </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    h1: {
        marginTop: 15,
        height: 40,
        marginBottom: 20,
        fontSize: 15,
    },
    input: {
        height: 100,
        marginBottom: 20,
        borderBottomWidth: 1,

    },
    container: {
        flex: 1,

        padding: 30,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#00ffff"

    },
    botton: {
        backgroundColor: 'green',
        marginTop: 5,
        paddingTop: 15,
        paddingBottom: 15,
    },
    botton3: {
        marginTop: 50,
        backgroundColor: 'blue',
        paddingTop: 15,
        paddingBottom: 15,
    },
    botton2: {
        backgroundColor: 'red',
        marginTop: 150,
        paddingTop: 15,
        paddingBottom: 15,
    },
    picker: {
        width: 100,
    },
    text1: {
        marginTop: 15,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 2,
        marginBottom: 20,
        alignItems: "stretch",
    },

});

AppRegistry.registerComponent('Gamerandom', () => Gamerandom);
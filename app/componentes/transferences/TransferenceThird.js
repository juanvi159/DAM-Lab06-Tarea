import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default function TransferenceThird(props){
    const {params} = props.route;
    return(
        <View style={styles.container}>
            <Text>Transferencia realizada</Text>
            <Image source={{uri:'https://pbs.twimg.com/media/EVyjWF3X0AMwR_Y.jpg'}} style={{height: 200, width: 200, marginBottom: 50, borderRadius: 7}}/>
            <TouchableOpacity style={styles.button} onPress={()=>params.navigator.navigate('First')}>
                <Text style={{color:'white'}}>ACEPTAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor:'blue',
        fontSize:20,
        width:130,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
}
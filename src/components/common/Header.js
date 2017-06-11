import React from 'react';
import {Text,View,StatusBar} from 'react-native';
const Header=(props)=>{
    const {viewStyle,textStyle} = style;
    return(
        <View style={viewStyle}>
            <StatusBar
                backgroundColor="#444"
                barStyle="light-content"
            />
            <Text style={textStyle}>{props.headerText}</Text>
        </View>

    )
};

const style = {
    viewStyle:{
        backgroundColor:'#333',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        fontSize:20,
        color:"#fff"
    }
};

export {Header};
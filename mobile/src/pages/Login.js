import React, {useState} from 'react'
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import api from '../services/api'

import logo from '../assets/logo.png'

export default function Login() {
    const {email, setEmail} = useState('')
    const {techs, setTechs} = useState('')
    async function handleSubmit(){
        console.log(email, techs)
    }

    return <KeyboardAvoidingView enabled={Platform.os == 'ios'} behavior='padding'  style={StyleSheet.container}>
        <Image source={logo} />  
        <View style={StyleSheet.form}>
            <Text style={StyleSheet.label}>SEU E-MAIL *</Text>
            <TextInput 
                style={StyleSheet.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
        </View>
        <View style={StyleSheet.form}>
            <Text style={StyleSheet.label}>TECNOLOGIAS *</Text>
            <TextInput 
                style={StyleSheet.input}
                placeholder="Tecnologias de Interece"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={techs}
                onChangeText={setTechs}
            />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={StyleSheet.buttonText} ><Text style={StyleSheet.button}>Encontrar Spots</Text></TouchableOpacity>
    </KeyboardAvoidingView>

}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },

    button:{
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 2,
    },

    buttonText:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
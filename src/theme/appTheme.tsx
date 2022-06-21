import { StyleSheet } from "react-native";


export const colores ={
    primary: '#5856d6'
}


export const styles = StyleSheet.create({
    globaMargin: {
        marginHorizontal:20
    },
    title: {
        fontSize: 20,
    },
    botonGrande: {
        flex:1,
        width:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center',
    },
    textBotonGrande: {
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    avatarContainer: {
        marginTop:20,
        alignItems:'center'
    },
    avatar: {
        height:150,
        width:150,
        borderRadius:100,
    },
    menuContainer:{
        marginVertical:30,
        marginHorizontal:20,
    },

    menuBotton: {
      marginVertical: 20,  
    },
    menuTexto: {
        fontSize:20,
    },
})
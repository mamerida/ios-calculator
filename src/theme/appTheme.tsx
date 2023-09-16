import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal: 20,
        justifyContent:'flex-end'
    },
    resultado:{
        color: 'white',
        fontSize: 60,
        textAlign:'right'
    },
    resultadoAnterior:{
        fontSize: 30,
        textAlign:'right',
        color:'rgba(255,255,255,0.5)'
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#9B9B9B',
        borderRadius: 100,
        justifyContent:'center'
    },
    botonTexto:{
        textAlign:'center',
        fontSize: 30,
        fontWeight:'400',
        color:'black'
    }
})
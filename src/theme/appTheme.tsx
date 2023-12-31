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
        textAlign:'right',
        marginBottom: 10
    },
    resultadoAnterior:{
        fontSize: 30,
        textAlign:'right',
        color:'rgba(255,255,255,0.5)'
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#2D2D2D',
        borderRadius: 100,
        justifyContent:'center',
        marginHorizontal: 10
    },
    botonTexto:{
        textAlign:'center',
        fontSize: 30,
        fontWeight:'500',
        color:'white'
    }
})
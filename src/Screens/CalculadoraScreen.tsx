import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../theme/appTheme'
import BotonCalc from '../Components/BotonCalc'

const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState("0")

  const limpiar = () => setNumero('0');

  const armarNumero = (numeroTexto : string) =>{
    // si existe un punto decimal ignorarlo
    if(numero.includes(".") && numeroTexto === ".") return;
    if(numero.startsWith('0') || numero.startsWith('-0')){
      // primer punto decimal
      if(numeroTexto === "."){
        setNumero(numero + numeroTexto)
        // numero decimal
      }else if(numeroTexto === "0" && numero.includes(".")){
        setNumero(numero + numeroTexto)

        //evaluar si es difetente de cero y no es un punto
      }else if( numeroTexto !== "0" && !numero.includes(".")){
        setNumero(numeroTexto)
      } else if( numeroTexto === "0" && !numero.includes(".")){
        return
      }else{
        setNumero(numero + numeroTexto)
      }
    }else{
      setNumero(numero + numeroTexto)
    }
  }

  const PositivoNegativo = () => {
    if(numero.includes("-")){
      setNumero(numero.replace("-",""))
    }else{
      setNumero("-" + numero)
    }
  }

  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoAnterior}>{numeroAnterior}</Text>
        <Text 
          style={styles.resultado}
          numberOfLines={1}
          adjustsFontSizeToFit
        >{numero}</Text>
        <View style={styles.fila}>
            <BotonCalc texto='C'  color='#9B9B9B' accion={limpiar} />
            <BotonCalc texto='+/-' color='#9B9B9B' accion={PositivoNegativo} />
            <BotonCalc texto='del' color='#9B9B9B' accion={limpiar} />
            <BotonCalc texto='/' color='#FF9427' accion={limpiar} />
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='7' accion={armarNumero}  />
            <BotonCalc texto='8' accion={armarNumero}  />
            <BotonCalc texto='9' accion={armarNumero}  />
            <BotonCalc texto='x' color='#FF9427' accion={limpiar} />
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='4' accion={armarNumero}  />
            <BotonCalc texto='5' accion={armarNumero}  />
            <BotonCalc texto='6' accion={armarNumero}  />
            <BotonCalc texto='-' color='#FF9427' accion={limpiar} />
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='1' accion={armarNumero} />
            <BotonCalc texto='2' accion={armarNumero} />
            <BotonCalc texto='3' accion={armarNumero} />
            <BotonCalc texto='+' color='#FF9427' accion={limpiar} />
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='0' ancho accion={armarNumero} />
            <BotonCalc texto='.' accion={armarNumero}  />
            <BotonCalc texto='=' color='#FF9427' accion={limpiar} />
        </View>
    </View>
  )
}

export default CalculadoraScreen

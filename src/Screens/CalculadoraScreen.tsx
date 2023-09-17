import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import BotonCalc from '../Components/BotonCalc'

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoAnterior}>Palmero Puto</Text>
        <Text style={styles.resultado}>Palmero Puto</Text>
        <View style={styles.fila}>
            <BotonCalc texto='C'  color='#9B9B9B' />
            <BotonCalc texto='+/-' color='#9B9B9B' />
            <BotonCalc texto='del' color='#9B9B9B' />
            <BotonCalc texto='/' color='#FF9427'/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='7'  />
            <BotonCalc texto='8' />
            <BotonCalc texto='9' />
            <BotonCalc texto='x' color='#FF9427'/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='4'  />
            <BotonCalc texto='5' />
            <BotonCalc texto='6' />
            <BotonCalc texto='-' color='#FF9427'/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='1'  />
            <BotonCalc texto='2' />
            <BotonCalc texto='3' />
            <BotonCalc texto='+' color='#FF9427'/>
        </View>
        <View style={styles.fila}>
            <BotonCalc texto='0' ancho />
            <BotonCalc texto='.' />
            <BotonCalc texto='=' color='#FF9427'/>
        </View>
    </View>
  )
}

export default CalculadoraScreen

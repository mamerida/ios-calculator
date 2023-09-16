import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoAnterior}>Palmero Puto</Text>
        <Text style={styles.resultado}>Palmero Puto</Text>
        <View>
            <View style={styles.boton}>
                <Text style={styles.botonTexto}>
                    Hola
                </Text>
            </View>
        </View>
    </View>
  )
}

export default CalculadoraScreen

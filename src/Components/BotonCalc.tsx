import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'

interface Props{
    texto: string,
    color?: string,
    ancho?: boolean
}

const BotonCalc = ({ texto, color = '#2D2D2D', ancho = false }:Props) => {
  return (
    <TouchableOpacity>
      <View style={{ 
          ...styles.boton,
          backgroundColor:color,
          width: (ancho) ? 180 : 80
      }}>
          <Text 
            style={{
              ...styles.botonTexto,
              color: (color ==='#9B9B9B') ? 'black' : 'white'
            }}
          >
              {texto}
          </Text>
      </View>
    </TouchableOpacity>
  )
}

export default BotonCalc
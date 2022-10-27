import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

export default function AppBar(props) {
  return (
    <View style ={styles.header}>
              <Image style={styles.header_icon} source ={require("../../../assets/zalo/history.png")}/>
              <Text style={styles.header__title}>{props.title}</Text>
    </View>
  )
}
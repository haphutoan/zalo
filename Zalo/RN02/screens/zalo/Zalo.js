import { View, Text ,Image, ScrollView, FlatList, SectionList } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import AppBar from './component/AppBar'
import HeaderPerson from './component/HeaderPerson'
import TitleBody from './component/TitleBody'
import BodyFriend from './component/BodyFriend'


//Function component : la 1 ham co gia tri tra ve la 1 giao dien
//Function ko co state
export default function Zalo() {
  //Xu ly logic code
 


  return (
    <View style={styles.container}>
      <AppBar title="Danh sách tìm kiếm gần đây" />
      <HeaderPerson></HeaderPerson>
      <TitleBody title="Gợi ý kết bạn" />
      <BodyFriend></BodyFriend>
    </View>
  )
}
import { View, Text,FlatList,Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

export default function BodyFriend() {

    datas = [
        {
            title:"Wanda",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/1.jpeg")
        },
        {
            title:"Yasuo",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/2.jpg")
        },
        {
            title:"Kara",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/3.jpg")
        }, {
            title:"Natasha",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/4.jpeg")
        }, {
            title:"Diana",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/5.jpeg")
        }, {
            title:"Yasuo",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/6.jpg")
        }, 
        {
            title:"Kara",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/7.jpg")
        }, {
            title:"Natasha",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/8.jpg")
        }, {
            title:"Diana",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/9.jpg")
        }, {
            title:"Yasuo",
            desc:"15 bạn chung",
            image:require("../../../assets/zalo/10.jpg")
        }, 
      ]

      _renderItem = (data,index) =>{
        return <View style={styles.person_container} key={index}>
            <View style={styles.person_container_item}>
                <Image style = {styles.avatar} source={data.item.image}/>
                <View style = {styles.person_container_name}>
                    <Text style={{fontSize : 16,fontWeight :"600"}}>{data.item.title}</Text>
                    <Text>{data.item.desc}</Text>
                </View>
            </View>
            <View style={styles.person_container_addfriend}>
                <Text style={{
                    backgroundColor:"#FF99FF",
                    borderRadius : 20,
                    paddingLeft : 10,
                    paddingRight : 10,
                    paddingTop : 5,
                    paddingBottom : 5
                }}>Kết bạn</Text>
            </View>
        </View>
      }
  return (
    <FlatList
            data={datas} //bắt buộc và phải là 1 mảng
            renderItem={(data) => _renderItem(data)} //bắt buộc , trả ra giao diện của từng phần tử đã duyệt trong mảng
            keyExtractor={(data)=> data.toString()}
            // numColumns = {"2"}
            /> 
  )
}
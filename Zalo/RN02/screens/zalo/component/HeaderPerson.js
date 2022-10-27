import { View, Text,Image,FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

export default function HeaderPerson() {
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
  
      return (
        
            
        <View style={styles.container_avartar} >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.datas.map((data,index)=>(
                <View style={styles.container_avartar_item}>
                    <Image style={styles.avatar} source={data.image}/>
                    <Text>
                        {data.title}
                    </Text>
                </View>
               
            ))}
             </ScrollView>
           </View>
       
      )
}
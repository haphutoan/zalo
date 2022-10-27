import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    
    
    header : {
        flexDirection : "row",
        backgroundColor : "white",
        alignItems : "center",
        paddingLeft : 20,
        paddingRight : 20,
        height : Platform.OS == "ios" ? 100 : 56 ,
        paddingTop : Platform.OS == "ios" ? 64 : 0 ,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },

    header__title : {
        fontSize : 16,
        fontWeight : "500"
    },  

    header_icon : {
        width : 30,
        height : 30,
    },

   
    container_avartar : {
        flexDirection : "row",
        justifyContent : "space-evenly",
        padding : 10,
        backgroundColor : "#fff"
    },
    container_avartar_item : {
        marginRight : 20
    },
   
    avatar : {
        width : 60,
        height : 60,
        borderRadius : 30
    },

    body_container : {
        display : "flex",
        paddingTop : 20,
        paddingLeft : 20,
        paddingRight : 20,
        width:"100%",
        justifyContent :"space-between",
    },

    body_container__header : {
        flexDirection : "row",
    },
    
    body_container__status : {
        display : "flex",
        marginLeft : 10,
    },

    body_container__status_item : {
       flexDirection : "row",
       justifyContent : "space-between"
    },

    body_img : {
        width : 60,
        height : 60,
        borderRadius : 30
    },

    body_container__desc : {
        marginTop : 10,
    },

    body_container__desc__img : {
        width : 20,
        height : 20,
        marginRight :5,
    },
    body_container__desc__item : {
        flexDirection : "row",
     },


     person_container : {
        flexDirection : "row",
        justifyContent : "space-between",
        margin : 20,
     },

     person_container_item : {
        flexDirection : "row",
     },

     person_container_name : {
        margin : 10
     },


     person_container_addfriend : {
        alignItems : "center",
        justifyContent:"center",
     }
})
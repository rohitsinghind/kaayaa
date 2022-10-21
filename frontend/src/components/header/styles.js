
export const styles = {
    logoutBtn:{
        position:"absolute",
        top:"30px",
        right:"50px",
        color:"#2D2D2D",
        '@media (max-width: 850px)': {
            right:"20px",
          },
    },
    box:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        //position:"relative"
    },
    box2:{
        display:"flex",
        alignItems:"flex-end",
        justifyContent:"center",
        height:"140px",
        '@media (max-width: 1150px)': {
            height:"120px",
            '@media (max-width: 850px)': {
                height:"100px",
              },
          },
    },
    text1:{
        fontFamily: "'Brush Script MT', cursive",
        fontSize:"115px",
        color:"#2D2D2D",
        cursor:"pointer",
        '@media (max-width: 1150px)': {
            fontSize: "80px",
            '@media (max-width: 850px)': {
                fontSize: "60px",
                '@media (max-width: 550px)': {
                    fontSize: "40px",
                  },
              },
          },
    },
    text2:{
        fontFamily: "'Brush Script MT', cursive",
        fontSize:"28px",
        color:"#2D2D2D",
        width:"170px",
        '@media (max-width: 1150px)': {
            fontSize: "22px",
            '@media (max-width: 850px)': {
                fontSize: "18px",
                width:"120px",
              },
          },
    },
    text3:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"20px",
        color:"#2D2D2D",
        display:"flex",
        mx:"35px",
        width:"250px",
        '@media (max-width: 1150px)': {
            fontSize: "16px",
            mx:"0px",
            width:"230px",
            '@media (max-width: 850px)': {
                fontSize: "14px",
                mx:"0px",
                width:"170px",
                '@media (max-width: 550px)': {
                    display:"none"
                  },
              },
          },
    },
    text4:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"20px",
        color:"#5D5D5D",
        mx:"50px",
        my:"25px",
        cursor:"pointer",
        '@media (max-width: 1150px)': {
            fontSize: "17px",
            mx:"25px",
            '@media (max-width: 850px)': {
                fontSize: "15px",
                mx:"15px",
              },
          },
        "&:hover": {
            color:"#2D2D2D",
            textDecoration:"underline"
          },
    },
    img:{
        maxWidth:"350px",
        // marginLeft:"40px",
        width:"100%",
        // position:"absolute",
        // right:"0px",
        // margin:"5px"
    }
}
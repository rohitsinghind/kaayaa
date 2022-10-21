export const styles = {
    container:{
        display:"flex",
        
        justifyContent:"space-between",
        my:"50px",
        minHeight:"50vh",
        '@media (max-width: 550px)': {
            flexDirection:"column",
            alignItems:"center",
          },
    },
    card:{
        width:"40%",
        '@media (max-width: 550px)': {
            width:"100%",
          },
    },
    cardImg:{
        width:"100%"
    },
    box:{
        width:"50%",
        my:"20px",
        '@media (max-width: 550px)': {
            width:"100%",
          },
    },
    name:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"26px",
        color:"#2D2D2D",
        '@media (max-width: 850px)': {
            fontSize:"20px",
            '@media (max-width: 550px)': {
                fontSize:"18px",
              },
          },
    },
    price:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"28px",
        color:"#6D6D6D",
        mt:"20px",
        '@media (max-width: 850px)': {
            fontSize:"22px",
            '@media (max-width: 550px)': {
                fontSize:"20px",
              },
          },
    },
    desc:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"18px",
        color:"#6D6D6D",
        mt:"35px",
        '@media (max-width: 850px)': {
            fontSize:"16px",

          },
    }
}
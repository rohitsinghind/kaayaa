export const styles = {
    box: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        py:"5%",
        
    },
    alert:{
        position:"absolute",
        top:"10%"
    },
    textLogo:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"34px",
        color:"#4D4D4D",
        display:"flex",
        justifyContent:"center",
        mb:"20px",
        '@media (max-width: 550px)': {
            fontSize:"24px",
           },
    },
    card:{
        width:"40%",
        '@media (max-width: 850px)': {
            width:"100%",
            my:"20px"
           },
    },
    cardImg:{
        width:"100%"
    },
    inputField:{
        width:"70%",
        mt:"20px",
        '@media (max-width: 850px)': {
            width:"100%",
            mx:"30px"
           },
    },
    btn:{
        my:"20px",
        background:"#6D6D6D",
        width:"70%",
        "&:hover": {
            background:"#4D4D4D",
          },
          '@media (max-width: 850px)': {
            width:"100%",
            mx:"10px"
           },
    },
    Text:{
        ml:"7px",
        color:"#4D4D4D",
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"16px",
        fontWeight:700,
        display:"flex",
        justifyContent:"center",
        cursor:"pointer",
    },
    center:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        width:"100%"
    },
    detailsBox:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minWidth:"50%",
    },
    flex:{
        display:"flex",
        justifyContent:"space-between",
        '@media (max-width: 850px)': {
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
           },
    },
}
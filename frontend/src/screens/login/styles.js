export const styles = {
    box: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        height:"60vh"
    },
    alert:{
        position:"absolute",
        top:"10%"
    },
    textLogo:{
        fontFamily: "'Courgette', cursive",
        fontSize:"34px",
        color:"#4D4D4D",
        display:"flex",
        justifyContent:"center",
        mb:"20px",
        '@media (max-width: 550px)': {
            fontSize:"28px",
           },
    },
    loginBtn:{
        mt:"20px",
        background:"#6D6D6D",
        width:"100%",
        "&:hover": {
            background:"#4D4D4D",
          },
    },
    signupText1:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"16px",
        colour:"#6a6a6a",
        display:"flex",
        justifyContent:"center",
    },
    signupText2:{
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
        justifyContent:"center",
    },
    divider:{
        display:"flex",
        justifyContent:"center",
        background:"#e1e1e1",
        my:"20px"
    }
}
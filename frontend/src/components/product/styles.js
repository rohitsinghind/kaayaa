export const styles = {
    card:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        py:"10px",
        px:"20px",
        maxWidth:"300px",
        //width:"20%"
        position:"relative",
        '@media (max-width: 850px)': {
            px:"10px",
          },
    },
    imgCard:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"250px",
        maxWidth:"100%",
        '@media (max-width: 850px)': {
            height:"200px",
          },
    },
    image:{
        height:"auto",
        maxHeight:"100%",
        width:"100%",
        // objectFit:"cover"
    },
    text:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"16px",
        color:"#4D4D4D",
        height:"80px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        '@media (max-width: 1150px)': {
            fontSize: "14px",
            height:"60px",
          },
    },
    price:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"26px",
        color:"#7D7D7D",
        '@media (max-width: 1150px)': {
            fontSize: "18px",
          },
    },
    btn:{
        my:"10px",
        background:"#8D8D8D",
        width:"100%",
        maxWidth:"300px",
        "&:hover": {
            background:"#6D6D6D",
          },
    },
    deleteBtn:{
        position:"absolute",
        top:"10px",
        right:"10px",
    }
}
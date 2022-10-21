export const styles = {
    background:{
        background:"#1D1D1D",
        py:"20px"
    },
    flex:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"45%",
        '@media (max-width: 850px)': {
            width:"100%",
          },
    },
    flex2:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    flex3:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        '@media (max-width: 850px)': {
            display:"inline",
          },
    },
    textBold:{
        color:"#f1f1f1",
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"16px",
        fontWeight:"600",
        width:"150px",
        '@media (max-width: 850px)': {
           mb:"10px"
          },
    },
    text:{
        color:"#c1c1c1",
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"16px",
        '@media (max-width: 850px)': {
            fontSize: "14px",
          },
    }
}
export const styles = {
    container:{
        position:"relative"
    },
    text:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"28px",
        color:"#4D4D4D",
        m:"20px",
        '@media (max-width: 550px)': {
            fontSize:"20px",
           },
    },
    alert:{
        position:"absolute",
        top:"10%"
    },
    box:{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        //padding: "15px"
        pb:"60px",
        '@media (max-width: 850px)': {
            gridTemplateColumns: "auto auto auto",
            '@media (max-width: 550px)': {
                gridTemplateColumns: "auto auto",
              },
            }
    },
    loadingBox:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"60vh"
    },
    btGroups:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        my:"25px"
    },
    btn:{
        color:"black"
    },
    pgNo:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"17px",
        color:"#4D4D4D",
        fontWeight:"600"
    },
    topScrollBtn:{
        position:"absolute",
        bottom:"40px",
        right:"50px",
        color:"#4D4D4D",
        '@media (max-width: 850px)': {
            bottom:"10px",
        right:"20px",
           },
    },
}
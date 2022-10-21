export const styles = {
    text1:{
        fontFamily: "'Open-Sans', sans-serif",
        fontSize:"28px",
        color:"#6D6D6D",
        '@media (max-width: 550px)': {
            fontSize:"20px",
           },
    },
    box:{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
        //padding: "15px"
        '@media (max-width: 850px)': {
        gridTemplateColumns: "auto auto auto",
        '@media (max-width: 550px)': {
            gridTemplateColumns: "auto auto",
          },
        }
    },
    sliderImg:{
        display: 'block',
        width: "100%",
        overflow: 'hidden',
        maxHeight: "600px",
        
    },
    card:{
        mx:"15px",
        my:"80px",
        '@media (max-width: 850px)': {
            mx:"5px",
            '@media (max-width: 550px)': {
                mx:"2px",
              },
          },
    },
    card2:{
        mx:"15px",
        my:"80px",
        '@media (max-width: 850px)': {
            mx:"5px",
            '@media (max-width: 550px)': {
               display:"none"
              },
          },
    },
    cardImg:{
        height:"auto",
        width:"100%"
    }
}
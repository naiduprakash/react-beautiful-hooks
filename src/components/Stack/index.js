import React from "react";

export default function Stack({children,style,direction="row",...props}){
  let styles = {
    display:"flex"
  };
  if(direction === "row"){
    styles = {
      ...styles,
    }
  }
  
  styles = {...styles,...style};
  
  return (
    <div style={styles} {...props}>
      {children}
    </div>
  );
}
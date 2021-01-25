import React from 'react';

let wish = '';
let x = new Date().getHours();
const sty = {}

if(x>=1 && x<12 ){
 wish = "Good morning";
 sty.color ="red";
}else if(x>=12 && x<16)
{
  wish="Good Afternoon";
  sty.color ="green";
}else{
  wish = "Good Night";
  sty.color ="grey";
}


function List()
{
return (<span style={sty}>{wish}</span>);
}

export default List;
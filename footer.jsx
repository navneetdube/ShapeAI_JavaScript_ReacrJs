import React from "react";

function Footer()
{
    var curryear =new Date().getFullYear();
    return (
        
     <Footer>
         <p>copyright@{curryear}</p>
         </Footer>
    );
}
 export default Footer;
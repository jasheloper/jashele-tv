import React from 'react';



function NavBar() {


return (

<>

<div id="Nav">

<img src={require('./images/jasheletv.png')} />

<div className="titleflex">

<h1 className="box sitename">  Jashele TV</h1>
<h3 className="box siteslogan">A guide to help you stay up to date with the latest on TV!</h3>
</div>
</div>

</>
);
}

export default NavBar;
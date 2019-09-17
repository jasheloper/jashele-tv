import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'


class App extends React.Component {
    constructor() {
        super();
        this.state = {

            data: [] 
        };
    }


    componentDidMount() {
        console.log("data: ")
        fetch('http://api.tvmaze.com/schedule/')
        .then(res => res.json())
        .then(res => this.setState({data: res}))
        .catch(err => console.log(err));
    }


    render() {

        return (

<> 

<NavBar /> 



<br />

<div className="about">
    <h1 className="aboutheader">Welcome</h1>
    <p className="abouttext">Jashele TV is a live TV guide that allows you to keep up with the latest episodes of your favorite TV shows.  This list updates automatically everyday, so be sure to check back whenever you're curious about the latest on TV! 📺</p>

    <p className="ux">*For the best user experience, this website is best viewed on a desktop or tablet. </p>
</div>




<div className="shows">

    {this.state.data.map(x => {

        return (

            <div className="episode"key={x.id}>

            <div className="ashowbox">

            <h1 className="showtitle">{x.show.name}</h1>

            <img className="showimg" src={x.show.image.medium} alt={x.name}/> <br />




            <a href={x.show.url} target="_blank"> <button class="moreinfo">More Info</button> </a>

            <a href={x.show.officialSite} target="_blank"> <button class="moreinfo">Website</button> </a>

</div>

<div className="ashowbox right">


        <h3 className="episodetitle">{x.name}</h3>



        <div className="info">  <b>Network:</b> {x.show.name}    </div> <br />
        <div className="info">  <b>Season:</b> {x.season}   </div>    <br />
        <div className="info">  <b>Air Date:</b> {x.airdate}  </div>    <br />
        <div className="info">  <b>Time:</b> {x.show.schedule.time}   </div>    <br />



</div>
</div>

)})}


</div>


<Footer />
</>

)}

        }

export default App; 
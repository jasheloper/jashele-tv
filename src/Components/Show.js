import React from "react";

const [data, setData] = useState([]);


// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

useEffect(() => {
    const fetchData = () => {
  axios
    .get(`https://tvjan-tvmaze-v1.p.rapidapi.com/shows/30`)
    .then(response => {
     setData(response.data.results)
        console.log(response.data);
        })

                .catch(
             error => console.log(error)
    )
    }
    fetchData();
}, [] 
)



export default function Show() {
    return (
        <div className="episode"key={x.id}>

            <div className="ashowbox">

            <h1 className="showtitle">{x.show.name}</h1>

    

            <img className="showimg" src={x.shows.image.medium} alt={x.name}/> <br />




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
    )
}
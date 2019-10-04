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
        fetch('https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=61f7ba464304e92aa6c63502caee9834')
        .then(res => res.json())
        .then(res => this.setState({data: res.results}))
        .catch(err => console.log(err));
    }

    render() {
        return (
<>
<NavBar /> 
<br />
<div className="about">
    <h1 className="aboutheader">Welcome</h1>
    <p className="abouttext">Jashele TV is a live TV guide that allows you to stay in the know of when your favorite TV shows are airing.  This list updates automatically everyday, so be sure to check back whenever you're curious about the latest on TV! 📺</p>


</div>
<div className="shows">
{this.state.data.map(show => {
    return(<>
    <div className="episode"key={show.genre_ids}>
        <div className="ashowbox">
            <h1 className="showtitle">{show.name}</h1>
            <img className="showimg"  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} />
     
        </div>
        <div className="ashowbox right">
            <h2>Overview</h2>
            <p className="overview">{show.overview}</p>
            <div className="info">Origin Country: {show.origin_country}</div> <br />
            <div className="info">Language: {show.original_language}</div> <br />
            <div className="info">Vote Average: {show.vote_average}</div>
        </div>
    </div>
    </>)
})}

</div>
<Footer />
</>
        )
    }
}

export default App; 

// 61f7ba464304e92aa6c63502caee9834
// https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=61f7ba464304e92aa6c63502caee9834
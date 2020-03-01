import React, {Component} from 'react';
import Search from "../search/Search";


class Main extends Component{
    constructor(props) {
        super(props)
        this.state = {
            movies: []

        }
    }

    render(){
        const postMovies = this.state.movies.map;
        return(
            <main>
                <Search/>
                {postMovies}
            </main>
        );
    }
}

export default Main
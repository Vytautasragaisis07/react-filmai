import React, {Component} from 'react';
import Table from "../table/Table";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movie: '',moviesData:{}};


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({movie: event.target.value});
    }


    handleSubmit(event) {

        event.preventDefault();
        fetch(`https://www.omdbapi.com/?apikey=e4db3ced&t=${this.state.movie}`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        moviesData: data
                    } )
                    console.log(this.state.moviesData);

                }
            )
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Filmų paieška</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                </div>

                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                    <input class="form-control mr-sm-2" type="text" value={this.state.movie}onChange={this.handleChange} aria-label="Search" />
                    <input type="submit" className="btn btn-success my-2 my-sm-0" value="Ieškoti"/>
                </form>
            </nav>
                <div className="container">
                    <Table data={this.state.moviesData}/>
                </div>
            </div>


        );
    }
}

export default Search;
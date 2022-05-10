import logo from './logo.svg';
import './css/App.css';
import React, {Component} from "react"
import PhotosComponent from "./components/PhotosComponent"
import Pagination from "./components/Pagination"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: [],
            loading: false,
            currentPage: 1,
            photosPerPage: 3
        }
    }

    componentDidMount() {
        fetch("https://picsum.photos/v2/list")
        .then ((response) => {
            if(!response.ok) {
                this.setState({loading: true})
                // throw Error("ups");
            }
            return response.json()
        })
        .then (allData => {
            this.setState({ photos: allData, loading: false });
        })
        .catch(err => {
            throw Error(err.message);
        })
    }

    render() {
        console.log(this.state.photos.length)
        const idOfLastPhoto = this.state.currentPage * this.state.photosPerPage;
        const idOfFirstPhoto = idOfLastPhoto - this.state.photosPerPage;
        const currentPhoto = this.state.photos.slice(idOfFirstPhoto, idOfLastPhoto);

        const paginate = (pageNumber) => this.setState({currentPage: pageNumber});

        return (
            <div className="App">
                <h1 className="display-4">Gallery</h1>
                <PhotosComponent photos={currentPhoto} loading={this.state.loading}/>
                <Pagination photos={this.state.photos}
                            currentPage={this.state.currentPage}
                            photosPerPage={this.state.photosPerPage}
                            paginate={paginate}
                />
            </div>
        );
    }
}

export default App;

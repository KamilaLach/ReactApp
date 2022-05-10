import React from "react"
import "../css/photos.css"

const PhotosComponent = props => {

    if(props.loading){
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    const showPhotos = () => {

        return props.photos.map((photo, id) => {
            return (
                <React.Fragment>
                    {id % 3 === 0 &&
                        <br/>
                    }
                    <img src={photo.download_url}/>

                </React.Fragment>
            )
        })
    }


    return (
        <div class="container-fluid">
            {showPhotos()}
        </div>
    )
}

export default PhotosComponent;

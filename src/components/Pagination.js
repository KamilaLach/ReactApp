import React, {useState, useEffect} from "react"
import axios from "axios";
import "../css/pagination.css"

const Pagination = props => {

    //numbers of pages
    const pages = [];

    for(let i = 1; i <= Math.ceil(props.photos.length / props.photosPerPage); i++){
        pages.push(i);
    }


    return(
        <div class="text-center">
            <ul className="pagination justify-content-center">
                {pages.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => props.paginate(number)} hef="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;

import React from 'react';
import {Form} from "react-bootstrap";

const SearchBox = ({handleChange, placeholder})=> {

        return (
            <div>
                <Form.Control type={"text"} onChange={handleChange} placeholder={placeholder}/>
            </div>
        );
    }


export default SearchBox;
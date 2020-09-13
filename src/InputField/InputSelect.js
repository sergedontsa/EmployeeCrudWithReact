import React from 'react';
import styled from 'styled-components'
import {Form} from "react-bootstrap";

const StyledFormControl = styled(Form.Control)`
border-radius: 0;
`


const InputSelect=({label, handleChange, options, value, readOnly})=> {

        return (
            <>
                <Form.Label>{label}</Form.Label>
                <StyledFormControl className={"form-control"} as={"select"}  onChange={handleChange} custom={true} readOnly={readOnly} value={value}>
                    <option>Select</option>
                    {
                        options.map((o, i)=> (
                            <option key={i} value={o}>{o}</option>
                        ))
                    }
                </StyledFormControl>
            </>
        );

}

export default InputSelect;
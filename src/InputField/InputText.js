import React from 'react';
import {Form} from "react-bootstrap";
import styled from 'styled-components'

const StyledFormControl = styled(Form.Control)`
border-radius: 0;
`

const InputText=({label, type, handleChange, value, name, readOnly}) => {

        return (
            <>
                <Form.Label>{label}</Form.Label>
                <StyledFormControl type={type} onChange={handleChange} name={name} value={value} readOnly={readOnly}/>
            </>
        );

}

export default InputText;
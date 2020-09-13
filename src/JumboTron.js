import React, {Component} from 'react';
import {Jumbotron, Container} from "react-bootstrap";


class JumboTron extends Component {
    render() {
        return (

                <Jumbotron fluid>
                    <Container fluid>
                        <h1>Fluid jumbotron</h1>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                    </Container>
                </Jumbotron>

        );
    }
}
export default JumboTron;
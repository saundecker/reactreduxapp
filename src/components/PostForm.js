import React, { Component } from 'react';
import { Button , FormGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.createPost({ title: this.state.title, body: this.state.body });
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <FormGroup
                        controlId="formBasicText">
                        <FormControl
                            type="text"
                            name="title"
                            value={this.state.title}
                            placeholder="Enter Title"
                            onChange={this.onChange}
                        />
                        <br />
                        <FormControl
                            type="text"
                            name="body"
                            value={this.state.body}
                            placeholder="Enter Description"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button bsStyle="primary" bsSize="medium" type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
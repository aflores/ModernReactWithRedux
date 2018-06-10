import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  /**
   *  renders an input field with some bootstrap characeristics
   */
  renderInputField(field) {
    const {
      meta: { touched, error },
    } = field; // extract some of the meta attributes
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props; // get handleSubmit from the props injected by redux-form

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderInputField} />
        <Field name="categories" label="Categories" component={this.renderInputField} />
        <Field name="content" label="Post Content" component={this.renderInputField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

// note that this function is outside of the class as it is used in the export statement for the
// module
//
function postsNewFormValidator(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a Title';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

export default reduxForm({
  validate: postsNewFormValidator,
  form: 'PostsNewForm',
})(connect(null, { createPost })(PostsNew));

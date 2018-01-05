import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit.
  // If errors has *any* properties, Redux Form assumes form is invalid.
  return errors;
}

export default reduxForm({
  validate, // short for `validate: validate`
  form: 'PostsNewForm'
})(PostsNew);

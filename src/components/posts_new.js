import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
          {...field.input}
          // above replaces
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // onBlur={field.input.onBlur}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          <Field
            name="title"
            component={this.renderTitleField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);

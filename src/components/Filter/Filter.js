import { Component } from 'react';
import { LabelFilter, InputFilter } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <LabelFilter>
        Find contacts by name
        <InputFilter
          type="text"
          name="filter"
          value={this.props.onFilterValue}
          onChange={this.props.onGetInputValue}
        />
      </LabelFilter>
    );
  }
}

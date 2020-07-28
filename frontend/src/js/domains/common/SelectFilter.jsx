import React from "react";
import { FormattedMessage } from "react-intl";

class SelectFilter extends React.Component {

    _onChange(e) {
	e.preventDefault();
	this.props.onChange(e.target.value);
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
	return (
	    <select name={this.props.name} value={this.props.value} onChange={this._onChange.bind(this)}>
	      <FormattedMessage id="select.type">
		{(message)=>(
		    <option value="" key="">-- {message} --</option>
		)}
	      </FormattedMessage>
	      {this.props.options.map(function(option, index){
		  return <option value={option.id} key={option.id}>{option.title}</option>
	      })}
	    </select>
	);
    }
}

export default SelectFilter;

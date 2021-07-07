import React from "react";
import { FormattedMessage } from "react-intl";

type TProps = {
    onChange: (id: number) => void,
    name: string,
    value: number,
    options: {id: number, title: string}[]
}

const SelectFilter = (props: TProps): JSX.Element => {

    const onChange_ = (e: TAssociative) => {
	e.preventDefault();
	props.onChange(parseInt(e.target.value));
    }

    return (
	<select name={props.name} value={props.value.toString()} onChange={onChange_}>
	    <FormattedMessage id="select.type">
	        {(message)=>(
		    <option value="0" key="0">-- {message} --</option>
	        )}
	    </FormattedMessage>
	    {props.options.map((option: {id: number, title: string}, index: number) => {
		return <option value={option.id.toString()} key={option.id.toString()}>{option.title}</option>
	    })}
	    </select>
	);
}

export default SelectFilter;

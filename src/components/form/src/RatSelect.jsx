import React from 'react'
import { Select } from 'element-react'

export default class RatSelect extends React.Component {
    
    render() {
        const { modelForm, attr } = this.props
        const options = attr.options.map((option,index) =>
            <Select.Option key={index} {...option}></Select.Option>
        ); 
        return (
            <Select value={ modelForm[attr.prop]} {...attr} >
                { options }
            </Select>
        )
    }

}
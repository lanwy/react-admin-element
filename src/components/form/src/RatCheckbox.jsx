import React from 'react'
import { Checkbox } from 'element-react'

export default class RatCheckbox extends React.Component {

    render() {
        const { modelForm, attr, onChange } = this.props
        const options = attr.options.map((option, index) =>
            <Checkbox key={index}  {...option}/>
        ); 
        return (
            <Checkbox.Group value={ modelForm[attr.prop]} onChange={ onChange } {...attr} >
                { options }
            </Checkbox.Group>
        )
    }

}
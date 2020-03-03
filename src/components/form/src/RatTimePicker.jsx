import React from 'react'
import { TimePicker } from 'element-react'

export default class RatTimePicker extends React.Component {
    
    render() {
        const {modelForm, attr, onChange} = this.props
        return (
            <TimePicker value={ modelForm[attr.prop]} onChange={ onChange } {...attr} />
        )
    }

}
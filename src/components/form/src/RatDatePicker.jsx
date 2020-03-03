import React from 'react'
import { DatePicker } from 'element-react'

export default class RatDatePicker extends React.Component {

    render() {
        const {modelForm, attr, onChange} = this.props
        return (
            <DatePicker value={ modelForm[attr.prop]} onChange={ onChange } {...attr} />
        )
    }

}
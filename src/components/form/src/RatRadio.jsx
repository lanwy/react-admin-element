import React from 'react'
import { Radio } from 'element-react'

export default class RatRadio extends React.Component {

    render() {
        const { modelForm, attr } = this.props
        const options = attr.options.map((option,index) =>
            <Radio key={index} {...option} />
        ); 
        return (
            <Radio.Group value={ modelForm[attr.prop]} {...attr} >
                { options }
            </Radio.Group>
        )
    }

}
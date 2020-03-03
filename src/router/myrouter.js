import HelloWorld from '@/study/origin/HelloWorld'
import {ClockOne,ClockTwo }from '@/study/origin/Clock'

import DemoTable from '@/study/demo/DemoTable'
import DemoForm from '@/study/demo/DemoForm'
import DemoEchart from '@/study/demo/DemoEchart'

const originChildren = [
    { name: 'HelloWorld', path: '/origin/HelloWorld', component: HelloWorld },
    { name: 'ClockOne', path: '/origin/ClockOne', component: ClockOne },
    { name: 'ClockTwo', path: '/origin/ClockTwo', component: ClockTwo }
]
const router = [
    {
        name: 'Study',
        path: '/Study',
        type: 'admin-icon-changjingguanli',
        children: [
            { name: 'DemoTable', path: '/demo/Table', component: DemoTable },
            { name: 'DemoForm', path: '/demo/Form', component: DemoForm },
            { name: 'DemoEchart', path: '/demo/echart', component: DemoEchart },
            { name: 'HelloWorld', path: '/origin/HelloWorld', children: originChildren },
        ]
    }
]

export default router
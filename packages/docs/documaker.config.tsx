import HomePage from './home'
import Architect from '@flow-ui/architect'
import { Config } from '@flow-ui/documaker/core'
import Value from './components/Value'
import Params from './components/Params'
import { ValueDefinition } from '@flow-ui/documaker/components/Page/Types/Interface'
import { Text } from '@flow-ui/core'

const config: Config = {
    name: 'FlowUI',
    git: 'https://github.com/abr-tech/FlowUI',
    pages: {
        order: {
            About: ['Getting started','Theming','Overrides','Props', 'Icons', 'Bundle'],
            Content: [],
            Layout: [],
            Control: [],
            Util: []
        },
        types: [
            {
                interface: 'Props',
                columns: [
                    {
                        key: 'name',
                        title: 'Name'
                    },
                    {
                        key: 'values',
                        title: 'Type',
                        render: (c) => <Value type={c.row as ValueDefinition}/>
                    },
                    {
                        key: 'comment',
                        title: 'Description',
                        render: (c) => <Text children={(c.row as ValueDefinition).comment?.toString()}/>
                    },
                    {
                        key: 'isOptional',
                        title: 'Parameters',
                        render: (c) => <Params type={c.row as ValueDefinition}/>
                    },
                    {
                        key: 'tags',
                        title: 'Default',
                        render: (c) => <Text children={(c.row as ValueDefinition).tags?.default} />
                    }
                ]
            },
            {
                interface: 'Styles',
                columns: [
                    {
                        key: 'name',
                        title: 'Name'
                    },
                    {
                        key: 'comment',
                        title: 'Description',
                        render: (c) => <Text children={(c.row as ValueDefinition).comment?.toString()}/>
                    },
                    {
                        key: 'values',
                        title: 'States',
                        render: (c) => <Value type={c.row as ValueDefinition}/>
                    },
                ]
            }
        ],
        separatedTypes: [
            'Attributes',
            'Layout',
            'Padding',
            'Margin',
            'Flex',
            'Grid',
            'Colors',
            'Border',
            'Event',
        ],
        custom: {
            '/': HomePage,
            '/architect': Architect
        }
    }
}

export default config
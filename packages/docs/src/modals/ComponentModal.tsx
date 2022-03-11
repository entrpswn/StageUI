import React from 'react'

import { Block, Modal, ScrollView, Table } from '@stage-ui/core'
import breakpointProp from '@stage-ui/system/props/breakpoint'
import { useNavigate, useLocation } from 'react-router-dom'

import core from '@/utils/core'
import Playground from '@/components/Playground'
import { get } from '@/utils/typedoc'

const componentTypes = get()

function ComponentModal() {
  const navigate = useNavigate()
  const location = useLocation()
  const data = core.getPageByUrl(location.pathname)
  document.title = `StageUI${data ? ` — ${data.title}` : ''}`

  if (!data) return null

  return (
    <Modal
      hideHeader
      opened
      decoration="panel"
      overrides={(t) => ({
        window: () => [
          {
            width: '100%',
            padding: '1rem 1.75rem',
          },
          breakpointProp(['80vw', '90vw', '100vw'], t, (maxWidth) => ({ maxWidth })),
        ],
      })}
      didClose={() => navigate('/components')}
    >
      <Block>
        {data.cases && <Playground cases={data.cases} title={data.title} />}
        {data.default && <data.default />}
        {componentTypes[data.title] && (
          <ScrollView mt="l" xBarPosition="none">
            <Table
              data={componentTypes[data.title]}
              columns={[
                { key: 'name', title: 'Property' },
                { key: 'value', title: 'Value' },
                { key: 'description', title: 'Description' },
              ]}
            />
          </ScrollView>
        )}
      </Block>
    </Modal>
  )
}

export default ComponentModal

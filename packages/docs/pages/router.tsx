/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Block, dialog, Flexbox, ScrollView, Text } from '@stage-ui/core'
import ScrollViewTypes from '@stage-ui/core/layout/ScrollView/types'
import breakpointProp from '@stage-ui/system/props/breakpoint'
import React, { useEffect, useRef, useState } from 'react'
import Menu from '../components/Menu'
import ShowcasePage from '../components/ShowcasePage'
import core from '../utils/core'
import Page404 from './404'

interface RouterProps {
  theme: Stage.Theme
  defaultThemes: Record<string, Stage.Theme>
  setTheme: React.Dispatch<React.SetStateAction<Stage.Theme>>
}

core.init()

const Router = (props: RouterProps) => {
  const { config, pages } = core
  const { defaultThemes, theme, setTheme } = props
  const themes = Object.assign(defaultThemes, config.themes)

  const scrollView = useRef<ScrollViewTypes.Ref>(null)

  const [path, setPath] = useState<string>(
    `/${window.location.pathname
      .split('/')
      .filter((i) => i)
      .join('/')}`,
  )

  const showcasePage = core.getPageByUrl(path)

  const CustomPage = config.pages?.custom?.[showcasePage ? '/components' : path] || null
  const noPages = Object.keys(pages).length === 0

  document.title = showcasePage?.title || config.name || 'StageUI'

  window.onpopstate = (e: PopStateEvent) => setPath(e.state.path)

  function historyPush(currentPath: string) {
    window.history.pushState({ path: currentPath }, '', currentPath)
    setPath(currentPath)
    scrollView.current?.scrollTop()
    // const data = core.getPageByUrl(currentPath)
    // if (data) {
    //   dialog({
    //     decoration: 'panel',
    //     render: () => {
    //       return (
    //         <ShowcasePage
    //           data={data}
    //           pages={pages}
    //           config={config}
    //           path={path}
    //           setPath={historyPush}
    //           theme={theme}
    //           themes={themes}
    //           setTheme={setTheme}
    //         />
    //       )
    //     },
    //   })
    // }
  }

  useEffect(() => {
    if (!showcasePage) {
      return
    }
    dialog({
      hideHeader: true,
      decoration: 'panel',
      overrides: (t) => ({
        window: () => [
          {
            width: '100%',
          },
          breakpointProp(['80vw', '90vw', '100vw'], t, (maxWidth) => ({ maxWidth })),
        ],
      }),
      didClose: () => {
        historyPush('/components')
      },
      // overrides:{
      //   window:
      // },
      render: (close) => {
        return (
          <ShowcasePage
            data={showcasePage}
            pages={pages}
            config={config}
            path={path}
            onClose={close}
            theme={theme}
            themes={themes}
            setTheme={setTheme}
          />
        )
      },
    })
  }, [showcasePage?.id])

  return (
    <ScrollView
      h="100vh"
      w="100%"
      barOffset={8}
      ref={scrollView}
      overrides={{
        yThumb: (state, variant) =>
          variant({
            active: [{ opacity: 1 }],
          }),
      }}
    >
      <Flexbox column alignItems="center" p="xl">
        <Block css={{ maxWidth: '64rem' }}>
          {/* {!showcasePage && ( */}
          <Menu
            pages={pages}
            config={config}
            path={path}
            setPath={historyPush}
            theme={theme}
            themes={themes}
            setTheme={setTheme}
          />
          {/* )} */}
          {/* {showcasePage && (
            <ShowcasePage
              data={showcasePage}
              pages={pages}
              config={config}
              path={path}
              setPath={historyPush}
              theme={theme}
              themes={themes}
              setTheme={setTheme}
            />
          )} */}
          {CustomPage && (
            <CustomPage
              pages={pages}
              config={config}
              path={path}
              setPath={historyPush}
              theme={theme}
              themes={themes}
              setTheme={setTheme}
            />
          )}
          {!CustomPage && !showcasePage && !noPages && <Page404 />}
          {!CustomPage && !showcasePage && noPages && <Text>Docs has no pages</Text>}
        </Block>
      </Flexbox>
    </ScrollView>
  )
}

export default Router

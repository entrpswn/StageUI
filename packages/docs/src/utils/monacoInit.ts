
let monacoDidLoad = false

const checkMonacoInstance = (resolve: (state: boolean) => void) => {
  if (window.require && !monacoDidLoad) {
    //@ts-expect-error
    window.require.config({
      paths: {
        vs: '/monaco/min/vs'
      }
    })
    if (window.require && !monacoDidLoad) {
      //@ts-expect-error
      window.require(['/monaco/min/vs/editor/editor.main'], () => { })
      monacoDidLoad = true
    }
  }
  if (window.monaco) {
    return resolve(true)
  }
  return setTimeout(() => {
    checkMonacoInstance(resolve)
  }, 100)
}

export const monacoInit = () => {
  return new Promise((resolve) => {
    if (!document.getElementById('monaco-loader')) {
      const head = document.getElementsByTagName('head')[0]
      const el = document.createElement('script')
      el.id = 'monaco-loader'
      el.type = 'text/javascript'
      el.src = '/monaco/min/vs/loader.js'
      head.appendChild(el)
    }
    checkMonacoInstance(resolve)
  })
}

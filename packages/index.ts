import type { App } from 'vue'
import * as components from './components'

const install = function (app: App): void {
  Object.entries(components).forEach(([, component]) => {
    component.install?.(app)
  })
}

export default {
  install
}

export * from './components'

import '../src/_metronic/assets/sass/style.scss'
import '../src/_metronic/assets/sass/plugins.scss'
import '../src/_metronic/assets/sass/style.scss'
import '../src/_metronic/assets/sass/_init.scss'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

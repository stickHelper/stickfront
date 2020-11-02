import './styles/index.scss'
import './styles/icon/se-font.min.scss'
import './styles/font/font-family.scss'

import SEAvatar from './components/SEAvatar/index.vue'
import SEBadge from './components/SEBadge/index.vue'
import SEButton from './components/SEButton/index.vue'
import SECard from './components/SECard/index.vue'
import SEChart from './components/SEChart/index.vue'
import SECheckbox from './components/SECheckbox/index.vue'
import SEImg from './components/SEImg/index.vue'
import SEPreloader from './components/SEPreloader/index.vue'
import SERadio from './components/SERadio/index.vue'
import SESkeleton from './components/SESkeleton/index.vue'
import SESwitch from './components/SESwitch/index.vue'
import SETextarea from './components/SETextarea/index.vue'
import SETextfield from './components/SETextfield/index.vue'

const components = {
  SEButton,
  SEAvatar,
  SEBadge,
  SECard,
  SEChart,
  SECheckbox,
  SEImg,
  SEPreloader,
  SERadio,
  SESkeleton,
  SESwitch,
  SETextarea,
  SETextfield
}

const install = (Vue, opts = {}) => {
  Object.values(components).forEach((component) => {
    Vue.component(component.name, component)
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign({}, components, { install })

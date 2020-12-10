import './styles/index.scss'
import './styles/icon/se-font.min.scss'
import './styles/font/font-family.scss'

import SEAvatar from './components/SEAvatar/index.vue'
import SEBadge from './components/SEBadge/index.vue'
import SEButton from './components/SEButton/index.vue'
import SECard from './components/SECard/index.vue'
import SEChart from './components/SEChart/index.vue'
import SECheckbox from './components/SECheckbox/index.vue'
import SECombobox from './components/SECombobox/index.vue'
import SEDatatable from './components/SEDatatable/index.vue'
import SEDatepicker from './components/SEDatepicker/index.vue'
import SEImg from './components/SEImg/index.vue'
import SEFileAttachment from './components/SEFileAttachment/index.vue'
import SEModal from './components/SEModal/index.vue'
import SEPagination from './components/SEPagination/index.vue'
import SEPreloader from './components/SEPreloader/index.vue'
import SERadio from './components/SERadio/index.vue'
import SESidebarMenu from './components/SESidebarMenu/index.vue'
import SESkeleton from './components/SESkeleton/index.vue'
import SESwitch from './components/SESwitch/index.vue'
import SETabMenu from './components/SETabMenu/index.vue'
import SETextarea from './components/SETextarea/index.vue'
import SETextfield from './components/SETextfield/index.vue'

const components = {
  SEButton,
  SEAvatar,
  SEBadge,
  SECard,
  SEChart,
  SECheckbox,
  SECombobox,
  SEDatatable,
  SEDatepicker,
  SEImg,
  SEFileAttachment,
  SEModal,
  SEPagination,
  SEPreloader,
  SERadio,
  SESidebarMenu,
  SESkeleton,
  SESwitch,
  SETabMenu,
  SETextarea,
  SETextfield,
  SEToast
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

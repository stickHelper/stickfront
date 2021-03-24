import './styles/index.scss'
import './styles/icon/se-font.min.scss'
import './styles/font/font-family.scss'
import 'ant-design-vue/dist/antd.css'

import SEAvatar from './components/SEAvatar/index.vue'
import SEBadge from './components/SEBadge/index.vue'
import SEBreadcrumbs from './components/SEBreadcrumbs/index.vue'
import SEButton from './components/SEButton/index.vue'
import SECard from './components/SECard/index.vue'
import SEChart from './components/SEChart/index.vue'
import SECheckbox from './components/SECheckbox/index.vue'
import SECol from './components/SECol/index.vue'
import SECombobox from './components/SECombobox/index.vue'
import SEDatatable from './components/SEDatatable/index.vue'
import SEDropdown from './components/SEDropdown/index.vue'
import SEDatepicker from './components/SEDatepicker/index.vue'
import SEDropzone from './components/SEDropzone/index.vue'
import SEDateRangePicker from './components/SEDateRangePicker/index.vue'
import SEImg from './components/SEImg/index.vue'
import SEMediaUploader from './components/SEMediaUploader/index.vue'
import SEFileAttachment from './components/SEFileAttachment/index.vue'
import SEIcon from './components/SEIcon/index.vue'
import SEModal from './components/SEModal/index.vue'
import SEPagination from './components/SEPagination/index.vue'
import SEPreloader from './components/SEPreloader/index.vue'
import SERadio from './components/SERadio/index.vue'
import SERow from './components/SERow/index.vue'
import SESidebarMenu from './components/SESidebarMenu/index.vue'
import SESkeleton from './components/SESkeleton/index.vue'
import SESlider from './components/SESlider/index.vue'
import SESpace from './components/SESpace/index.vue'
import SESwitch from './components/SESwitch/index.vue'
import SETabMenu from './components/SETabMenu/index.vue'
import SETag from './components/SETag/index.vue'
import SETextarea from './components/SETextarea/index.vue'
import SETextfield from './components/SETextfield/index.vue'
import SEToast from './components/SEToast/index.vue'
import SETopBar from './components/SETopBar/index.vue'
import SEWysiwyg from './components/SEWysiwyg/index.vue'
import DefaultTemplate from './components/Template/DefaultTemplate/index.vue'

const components = {
  SEButton,
  SEAvatar,
  SEBadge,
  SEBreadcrumbs,
  SECard,
  SEChart,
  SECheckbox,
  SECol,
  SECombobox,
  SEDatatable,
  SEDropdown,
  SEDatepicker,
  SEDateRangePicker,
  SEImg,
  SEFileAttachment,
  SEIcon,
  SEModal,
  SEPagination,
  SEPreloader,
  SERadio,
  SERow,
  SESidebarMenu,
  SESkeleton,
  SESlider,
  SESpace,
  SESwitch,
  SETabMenu,
  SETag,
  SETextarea,
  SETextfield,
  SEToast,
  SETopBar,
  SEWysiwyg,
  SEDropzone,
  DefaultTemplate,
  SEMediaUploader
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

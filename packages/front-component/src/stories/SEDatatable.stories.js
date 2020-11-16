import '@/styles/index.scss'
import SEDatatable from '@/components/SEDatatable/index.vue'

export default {
  title: 'Components/Datatable',
  component: SEDatatable
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEDatatable },
  template: `<SEDatatable
    :tHead="[
      { key: 'first_name', label: 'First Name' },
      { key: 'last_name', label: 'Last Name' },
      { key: 'email', label: 'Email' },
      { key: 'country', label: 'Country' },
      { key: 'ip_address', label: 'IP Address' }
    ]"
    :tBody="[
      { id:1, first_name:'Charles', last_name:'Daniels', email:'cdaniels0@java.com', country:'China', ip_address:'27.159.97.60' },
      { id:2, first_name:'Stephen', last_name:'Martinez', email:'smartinez1@hhs.gov', country:'Brazil', ip_address:'67.135.55.135' },
      { id:3, first_name:'Ronald', last_name:'Cox', email:'rcox2@hatena.ne.jp', country:'Ukraine', ip_address:'74.193.127.5' },
      { id:4, first_name:'Shawn', last_name:'Knight', email:'sknight3@smh.com.au', country:'Peru', ip_address:'4.104.253.210' },
      { id:5, first_name:'Ann', last_name:'Brooks', email:'abrooks4@surveymonkey.com', country:'Albania', ip_address:'158.232.103.250' },
    ]"
  />`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SEDatatable
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' }
  ]"
  :tBody="[
    { id:1, first_name:'Charles', last_name:'Daniels', email:'cdaniels0@java.com', country:'China', ip_address:'27.159.97.60' },
    { id:2, first_name:'Stephen', last_name:'Martinez', email:'smartinez1@hhs.gov', country:'Brazil', ip_address:'67.135.55.135' },
    { id:3, first_name:'Ronald', last_name:'Cox', email:'rcox2@hatena.ne.jp', country:'Ukraine', ip_address:'74.193.127.5' },
    { id:4, first_name:'Shawn', last_name:'Knight', email:'sknight3@smh.com.au', country:'Peru', ip_address:'4.104.253.210' },
    { id:5, first_name:'Ann', last_name:'Brooks', email:'abrooks4@surveymonkey.com', country:'Albania', ip_address:'158.232.103.250' },
  ]"
/>`
    }
  }
}

export const TableLayoutFixed = () => ({
  components: { SEDatatable },
  template: `<SEDatatable
  :tableLayoutFixed="true"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' }
  ]"
  :tBody="[
    { id:1, first_name:'Charles', last_name:'Daniels', email:'cdaniels0@java.com', country:'China', ip_address:'27.159.97.60' },
    { id:2, first_name:'Stephen', last_name:'Martinez', email:'smartinez1@hhs.gov', country:'Brazil', ip_address:'67.135.55.135' },
    { id:3, first_name:'Ronald', last_name:'Cox', email:'rcox2@hatena.ne.jp', country:'Ukraine', ip_address:'74.193.127.5' },
    { id:4, first_name:'Shawn', last_name:'Knight', email:'sknight3@smh.com.au', country:'Peru', ip_address:'4.104.253.210' },
    { id:5, first_name:'Ann', last_name:'Brooks', email:'abrooks4@surveymonkey.com', country:'Albania', ip_address:'158.232.103.250' }
  ]"
/>
  `
})

TableLayoutFixed.parameters = {
  docs: {
    source: {
      code: `<SEDatatable
  :tableLayoutFixed="true"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' }
  ]"
  :tBody="[
    { id:1, first_name:'Charles', last_name:'Daniels', email:'cdaniels0@java.com', country:'China', ip_address:'27.159.97.60' },
    { id:2, first_name:'Stephen', last_name:'Martinez', email:'smartinez1@hhs.gov', country:'Brazil', ip_address:'67.135.55.135' },
    { id:3, first_name:'Ronald', last_name:'Cox', email:'rcox2@hatena.ne.jp', country:'Ukraine', ip_address:'74.193.127.5' },
    { id:4, first_name:'Shawn', last_name:'Knight', email:'sknight3@smh.com.au', country:'Peru', ip_address:'4.104.253.210' },
    { id:5, first_name:'Ann', last_name:'Brooks', email:'abrooks4@surveymonkey.com', country:'Albania', ip_address:'158.232.103.250' }
  ]"
/>
      `
    }
  }
}

export const Sortable = () => ({
  components: { SEDatatable },
  template: `<SEDatatable
  :tHead="[
    { key: 'first_name', label: 'First Name', sortable: true },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' }
  ]"
  :tBody="[
    { id:1, first_name:'Charles', last_name:'Daniels', email:'cdaniels0@java.com', country:'China', ip_address:'27.159.97.60' },
    { id:2, first_name:'Stephen', last_name:'Martinez', email:'smartinez1@hhs.gov', country:'Brazil', ip_address:'67.135.55.135' },
    { id:3, first_name:'Ronald', last_name:'Cox', email:'rcox2@hatena.ne.jp', country:'Ukraine', ip_address:'74.193.127.5' },
    { id:4, first_name:'Shawn', last_name:'Knight', email:'sknight3@smh.com.au', country:'Peru', ip_address:'4.104.253.210' },
    { id:5, first_name:'Ann', last_name:'Brooks', email:'abrooks4@surveymonkey.com', country:'Albania', ip_address:'158.232.103.250' }
  ]"
/>
  `
})

Sortable.parameters = {
  docs: {
    source: {
      code: `<SEDatatable
  :tHead="[
    { key: 'first_name', label: 'First Name', sortable: true },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' }
  ]"
  :tBody="[
    { id:1, first_name:'Charles', last_name:'Daniels', email:'cdaniels0@java.com', country:'China', ip_address:'27.159.97.60' },
    { id:2, first_name:'Stephen', last_name:'Martinez', email:'smartinez1@hhs.gov', country:'Brazil', ip_address:'67.135.55.135' },
    { id:3, first_name:'Ronald', last_name:'Cox', email:'rcox2@hatena.ne.jp', country:'Ukraine', ip_address:'74.193.127.5' },
    { id:4, first_name:'Shawn', last_name:'Knight', email:'sknight3@smh.com.au', country:'Peru', ip_address:'4.104.253.210' },
    { id:5, first_name:'Ann', last_name:'Brooks', email:'abrooks4@surveymonkey.com', country:'Albania', ip_address:'158.232.103.250' }
  ]"
/>
      `
    }
  }
}

export const ActionList = () => ({
  components: { SEDatatable },
  template: `<SEDatatable
  actionType="list"
  :actions="[
    {icon: 'icon-navigator', label: 'Convert to sales order', key: 'convert', moveTo: ''},
    {icon: 'icon-edit-alt', label: 'Edit quotation', key: 'edit', moveTo: ''},
    {icon: 'icon-print', label: 'Print', key: 'print', moveTo: ''},
    {icon: 'icon-download-alt', label: 'Download', key: 'download', moveTo: ''},
    {icon: 'icon-link-h', label: 'Link to monday.com', key: 'link', moveTo: ''}
  ]"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' },
    { key: 'action', label: 'Action' }
  ]"
  :tBody="[
    {
      id:1,
      first_name:'Charles',
      last_name:'Daniels',
      email:'cdaniels0@java.com',
      country:'China', ip_address:'27.159.97.60'
    },
    {
      id:2,
      first_name:'Stephen',
      last_name:'Martinez',
      email:'smartinez1@hhs.gov',
      country:'Brazil', ip_address:'67.135.55.135'
    },
    {
      id:3,
      first_name:'Ronald',
      last_name:'Cox',
      email:'rcox2@hatena.ne.jp',
      country:'Ukraine', ip_address:'74.193.127.5'
    },
    {
      id:4,
      first_name:'Shawn',
      last_name:'Knight',
      email:'sknight3@smh.com.au',
      country:'Peru', ip_address:'4.104.253.210'
    },
    {
      id:5,
      first_name:'Ann',
      last_name:'Brooks',
      email:'abrooks4@surveymonkey.com',
      country:'Albania', ip_address:'158.232.103.250'
    }
  ]"
/>
  `
})

ActionList.parameters = {
  docs: {
    source: {
      code: `<SEDatatable
  :tHead="[
    { key: 'first_name', label: 'First Name', sortable: true },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' }
  ]"
  :tBody="[
    {
      id:1,
      first_name:'Charles', last_name:'Daniels',
      email:'cdaniels0@java.com',
      country:'China', ip_address:'27.159.97.60' },
    {
      id:2,
      first_name:'Stephen', last_name:'Martinez',
      email:'smartinez1@hhs.gov',
      country:'Brazil', ip_address:'67.135.55.135' },
    {
      id:3,
      first_name:'Ronald', last_name:'Cox',
      email:'rcox2@hatena.ne.jp',
      country:'Ukraine', ip_address:'74.193.127.5' },
    {
      id:4,
      first_name:'Shawn', last_name:'Knight',
      email:'sknight3@smh.com.au',
      country:'Peru', ip_address:'4.104.253.210' },
    {
      id:5,
      first_name:'Ann', last_name:'Brooks',
      email:'abrooks4@surveymonkey.com',
      country:'Albania', ip_address:'158.232.103.250' }
  ]"
/>
      `
    }
  }
}

export const ActionIcon = () => ({
  components: { SEDatatable },
  template: `<SEDatatable
  actionType="icon"
  :actions="[
    {icon: 'icon-edit-alt', key: 'edit', moveTo: '', color: 'primary', isDimmed: true},
    {icon: 'icon-delete', key: 'delete', moveTo: '', color: 'error', isDimmed: true}
  ]"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' },
    { key: 'action', label: 'Action' }
  ]"
  :tBody="[
    {
      id:1,
      first_name:'Charles',
      last_name:'Daniels',
      email:'cdaniels0@java.com',
      country:'China', ip_address:'27.159.97.60'
    },
    {
      id:2,
      first_name:'Stephen',
      last_name:'Martinez',
      email:'smartinez1@hhs.gov',
      country:'Brazil', ip_address:'67.135.55.135'
    },
    {
      id:3,
      first_name:'Ronald',
      last_name:'Cox',
      email:'rcox2@hatena.ne.jp',
      country:'Ukraine', ip_address:'74.193.127.5'
    },
    {
      id:4,
      first_name:'Shawn',
      last_name:'Knight',
      email:'sknight3@smh.com.au',
      country:'Peru', ip_address:'4.104.253.210'
    },
    {
      id:5,
      first_name:'Ann',
      last_name:'Brooks',
      email:'abrooks4@surveymonkey.com',
      country:'Albania', ip_address:'158.232.103.250'
    }
  ]"
/>
  `
})

ActionIcon.parameters = {
  docs: {
    source: {
      code: `<SEDatatable
  actionType="icon"
  :actions="[
    {icon: 'icon-edit-alt', key: 'edit', moveTo: '', color: 'primary', isDimmed: true},
    {icon: 'icon-delete', key: 'delete', moveTo: '', color: 'error', isDimmed: true}
  ]"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' },
    { key: 'action', label: 'Action' }
  ]"
  :tBody="[
    {
      id:1,
      first_name:'Charles',
      last_name:'Daniels',
      email:'cdaniels0@java.com',
      country:'China', ip_address:'27.159.97.60'
    },
    {
      id:2,
      first_name:'Stephen',
      last_name:'Martinez',
      email:'smartinez1@hhs.gov',
      country:'Brazil', ip_address:'67.135.55.135'
    },
    {
      id:3,
      first_name:'Ronald',
      last_name:'Cox',
      email:'rcox2@hatena.ne.jp',
      country:'Ukraine', ip_address:'74.193.127.5'
    },
    {
      id:4,
      first_name:'Shawn',
      last_name:'Knight',
      email:'sknight3@smh.com.au',
      country:'Peru', ip_address:'4.104.253.210'
    },
    {
      id:5,
      first_name:'Ann',
      last_name:'Brooks',
      email:'abrooks4@surveymonkey.com',
      country:'Albania', ip_address:'158.232.103.250'
    }
  ]"
/>
      `
    }
  }
}

export const StatusInfo = () => ({
  components: { SEDatatable },
  template: `<SEDatatable
  actionType="icon"
  :actions="[
    {icon: 'icon-edit-alt', key: 'edit', moveTo: '', color: 'primary', isDimmed: true},
    {icon: 'icon-delete', key: 'delete', moveTo: '', color: 'error', isDimmed: true}
  ]"
  statusType="info"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ]"
  :tBody="[
    {
      id:1,
      first_name:'Charles',
      last_name:'Daniels',
      email:'cdaniels0@java.com',
      country:'China',
      ip_address:'27.159.97.60',
      status: { label: 'Sales Order', color: 'active' }
    },
    {
      id:2,
      first_name:'Stephen',
      last_name:'Martinez',
      email:'smartinez1@hhs.gov',
      country:'Brazil',
      ip_address:'67.135.55.135',
      status: { label: 'Quotation', color: 'text-normal' }
    },
    {
      id:3,
      first_name:'Ronald',
      last_name:'Cox',
      email:'rcox2@hatena.ne.jp',
      country:'Ukraine',
      ip_address:'74.193.127.5',
      status: { label: 'Cancelled', color: 'error' }
    },
    {
      id:4,
      first_name:'Shawn',
      last_name:'Knight',
      email:'sknight3@smh.com.au',
      country:'Peru',
      ip_address:'4.104.253.210',
      status: { label: 'Sales Order', color: 'active' }
    },
    {
      id:5,
      first_name:'Ann',
      last_name:'Brooks',
      email:'abrooks4@surveymonkey.com',
      country:'Albania',
      ip_address:'158.232.103.250',
      status: { label: 'Quotation', color: 'text-normal' }
    }
  ]"
/>
  `
})

StatusInfo.parameters = {
  docs: {
    source: {
      code: `<SEDatatable
  actionType="icon"
  :actions="[
    {icon: 'icon-edit-alt', key: 'edit', moveTo: '', color: 'primary', isDimmed: true},
    {icon: 'icon-delete', key: 'delete', moveTo: '', color: 'error', isDimmed: true}
  ]"
  statusType="info"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ]"
  :tBody="[
    {
      id:1,
      first_name:'Charles',
      last_name:'Daniels',
      email:'cdaniels0@java.com',
      country:'China',
      ip_address:'27.159.97.60',
      status: { label: 'Sales Order', color: 'active' }
    },
    {
      id:2,
      first_name:'Stephen',
      last_name:'Martinez',
      email:'smartinez1@hhs.gov',
      country:'Brazil',
      ip_address:'67.135.55.135',
      status: { label: 'Quotation', color: 'text-normal' }
    },
    {
      id:3,
      first_name:'Ronald',
      last_name:'Cox',
      email:'rcox2@hatena.ne.jp',
      country:'Ukraine',
      ip_address:'74.193.127.5',
      status: { label: 'Cancelled', color: 'error' }
    },
    {
      id:4,
      first_name:'Shawn',
      last_name:'Knight',
      email:'sknight3@smh.com.au',
      country:'Peru',
      ip_address:'4.104.253.210',
      status: { label: 'Sales Order', color: 'active' }
    },
    {
      id:5,
      first_name:'Ann',
      last_name:'Brooks',
      email:'abrooks4@surveymonkey.com',
      country:'Albania',
      ip_address:'158.232.103.250',
      status: { label: 'Quotation', color: 'text-normal' }
    }
  ]"
/>
      `
    }
  }
}

export const StatusSwitch = () => ({
  components: { SEDatatable },
  template: `<SEDatatable
  actionType="icon"
  :actions="[
    {icon: 'icon-edit-alt', key: 'edit', moveTo: '', color: 'primary', isDimmed: true},
    {icon: 'icon-delete', key: 'delete', moveTo: '', color: 'error', isDimmed: true}
  ]"
  statusType="switch"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ]"
  :tBody="[
    {
      id:1,
      first_name:'Charles',
      last_name:'Daniels',
      email:'cdaniels0@java.com',
      country:'China',
      ip_address:'27.159.97.60',
      status: { checked: false }
    },
    {
      id:2,
      first_name:'Stephen',
      last_name:'Martinez',
      email:'smartinez1@hhs.gov',
      country:'Brazil',
      ip_address:'67.135.55.135',
      status: { checked: false }
    },
    {
      id:3,
      first_name:'Ronald',
      last_name:'Cox',
      email:'rcox2@hatena.ne.jp',
      country:'Ukraine',
      ip_address:'74.193.127.5',
      status: { checked: false }
    },
    {
      id:4,
      first_name:'Shawn',
      last_name:'Knight',
      email:'sknight3@smh.com.au',
      country:'Peru',
      ip_address:'4.104.253.210',
      status: { checked: false }
    },
    {
      id:5,
      first_name:'Ann',
      last_name:'Brooks',
      email:'abrooks4@surveymonkey.com',
      country:'Albania',
      ip_address:'158.232.103.250',
      status: { checked: false }
    }
  ]"
/>
  `
})

StatusSwitch.parameters = {
  docs: {
    source: {
      code: `<SEDatatable
  actionType="icon"
  :actions="[
    {icon: 'icon-edit-alt', key: 'edit', moveTo: '', color: 'primary', isDimmed: true },
    {icon: 'icon-delete', key: 'delete', moveTo: '', color: 'error', isDimmed: true}
  ]"
  statusType="Switch"
  :tHead="[
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ]"
  :tBody="[
    {
      id:1,
      first_name:'Charles',
      last_name:'Daniels',
      email:'cdaniels0@java.com',
      country:'China',
      ip_address:'27.159.97.60',
      status: { label: 'Sales Order', color: 'active' }
    },
    {
      id:2,
      first_name:'Stephen',
      last_name:'Martinez',
      email:'smartinez1@hhs.gov',
      country:'Brazil',
      ip_address:'67.135.55.135',
      status: { label: 'Quotation', color: 'text-normal' }
    },
    {
      id:3,
      first_name:'Ronald',
      last_name:'Cox',
      email:'rcox2@hatena.ne.jp',
      country:'Ukraine',
      ip_address:'74.193.127.5',
      status: { label: 'Cancelled', color: 'error' }
    },
    {
      id:4,
      first_name:'Shawn',
      last_name:'Knight',
      email:'sknight3@smh.com.au',
      country:'Peru',
      ip_address:'4.104.253.210',
      status: { label: 'Sales Order', color: 'active' }
    },
    {
      id:5,
      first_name:'Ann',
      last_name:'Brooks',
      email:'abrooks4@surveymonkey.com',
      country:'Albania',
      ip_address:'158.232.103.250',
      status: { label: 'Quotation', color: 'text-normal' }
    }
  ]"
/>
      `
    }
  }
}

export const Checkable = () => ({
  components: { SEDatatable },
  template: `<SEDatatable
  :tableLayoutFixed="true"
  :checkable="true"
  :tHead="[
    { key: 'checkbox', label: 'IP Address' },
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP Address' }
  ]"
  :tBody="[
    { id:1, checkbox: false, first_name:'Charles', last_name:'Daniels', email:'cdaniels0@java.com', country:'China', ip_address:'27.159.97.60' },
    { id:2, checkbox: false, first_name:'Stephen', last_name:'Martinez', email:'smartinez1@hhs.gov', country:'Brazil', ip_address:'67.135.55.135' },
    { id:3, checkbox: true, first_name:'Ronald', last_name:'Cox', email:'rcox2@hatena.ne.jp', country:'Ukraine', ip_address:'74.193.127.5' },
    { id:4, checkbox: false, first_name:'Shawn', last_name:'Knight', email:'sknight3@smh.com.au', country:'Peru', ip_address:'4.104.253.210' },
    { id:5, checkbox: false, first_name:'Ann', last_name:'Brooks', email:'abrooks4@surveymonkey.com', country:'Albania', ip_address:'158.232.103.250' }
  ]"
/>
  `
})

export const EditTable = () => ({
  components: { SEDatatable },
  template: `<SEDatatable
  actionType="icon"
  :actions="[
    {icon: 'icon-minus', key: 'remove', moveTo: '', color: 'error',}
  ]"
  :isPagination="false"
  :editTable="true"
  :tHead="[
    { key: 'action', label: '' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Last Name' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'duration', label: 'Duration' },
    { key: 'price', label: 'Price' },
    { key: 'amount', label: 'Amount' }
  ]"
  :tBody="[
    {
      name: {
        type: 'textfield',
        placeholder: 'Input Name',
        size: 'small',
        value: ''
      },
      description: {
        type: 'textarea',
        placeholder: 'Input Description',
        size: 'small',
        value: ''
      },
      quantity: {
        type: 'textfield',
        placeholder: 'Input Quantity',
        size: 'small',
        value: ''
      },
      duration: {
        type: 'textfield',
        placeholder: 'Input Duration',
        size: 'small',
        value: ''
      },
      price: {
        type: 'textfield',
        placeholder: 'Input Price',
        size: 'small',
        value: ''
      },
      amount: {
        type: 'info',
        value: '9000000'
      },
    }
  ]"
/>
  `
})

EditTable.parameters = {
  docs: {
    source: {
      code: `<SEDatatable
  actionType="icon"
  :actions="[
    {icon: 'icon-minus', key: 'remove', moveTo: '', color: 'error',}
  ]"
  :isPagination="false"
  :editTable="true"
  :tHead="[
    { key: 'action', label: '' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Last Name' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'duration', label: 'Duration' },
    { key: 'price', label: 'Price' },
    { key: 'amount', label: 'Amount' }
  ]"
  :tBody="[
    {
      name: {
        type: 'textfield',
        placeholder: 'Input Name',
        size: 'small',
        value: ''
      },
      description: {
        type: 'textarea',
        placeholder: 'Input Description',
        size: 'small',
        value: ''
      },
      quantity: {
        type: 'textfield',
        placeholder: 'Input Quantity',
        size: 'small',
        value: ''
      },
      duration: {
        type: 'textfield',
        placeholder: 'Input Duration',
        size: 'small',
        value: ''
      },
      price: {
        type: 'textfield',
        placeholder: 'Input Price',
        size: 'small',
        value: ''
      },
      amount: {
        type: 'info',
        value: '9000000'
      },
    }
  ]"
/>
      `
    }
  }
}

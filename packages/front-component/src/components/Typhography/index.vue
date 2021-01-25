<template>
  <div class="container-fluid">
    <section class="page-hero">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <h1>Typography</h1>
        </div>
      </div>
    </section>
    <section>
      <div
        v-for="(list, index) in typograpghy"
        :key="`typhograph-${index}`"
        class="row middle-xs pb-xs-3"
      >
        <div class="col-xs-4">
          <div :class="list.class">
            {{ list.name }}
          </div>
        </div>
        <div class="col-xs-8">
          <p
            v-for="(info, idx) in list.info"
            :key="`info-${idx}`"
            class="fill"
          >
            {{ info }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typograpghy: [
        {
          name: 'Heading 1',
          class: 'title-extra-large',
          info: [
            'Title Extra Large',
            'Font Style : Gilroy Bold',
            'Font Size : 48 px',
            'Letter Spacing : 1%'
          ]
        },
        {
          name: 'Heading 2',
          class: 'title-large',
          info: [
            'Title Large',
            'Font Style : Gilroy Bold',
            'Font Size : 32 px',
            'Letter Spacing : 1%'
          ]
        },
        {
          name: 'Heading 3',
          class: 'title-normal',
          info: [
            'Title Normal',
            'Font Style : Gilroy Bold',
            'Font Size : 24 px',
            'Letter Spacing : 1%'
          ]
        },
        {
          name: 'Body Large',
          class: 'body-large',
          info: [
            'Body Large',
            'Font Style : Gilroy Medium',
            'Font Size : 24 px',
            'Letter Spacing : 1%',
            'Line Height : 144%'
          ]
        },
        {
          name: 'Body Normal',
          class: 'body-normal',
          info: [
            'Body Normal',
            'Font Style : Gilroy Medium',
            'Font Size : 16 px',
            'Letter Spacing : 1%',
            'Line Height : 148%'
          ]
        },
        {
          name: 'Body Normal Bold',
          class: 'body-normal-bold',
          info: [
            'Button Normal, Text High Emphasis',
            'Font Style : Gilroy Bold',
            'Font Size : 16 px',
            'Letter Spacing : 1%',
            'Line Height : 148%'
          ]
        },
        {
          name: 'Subtitle',
          class: 'subtitle',
          info: [
            'Subtitle',
            'Font Style : Gilroy Bold',
            'Font Size : 18 px',
            'Letter Spacing : 1%'
          ]
        },
        {
          name: 'Body Small',
          class: 'body-small',
          info: [
            'Body Small',
            'Font Style : Gilroy Medium',
            'Font Size : 13 px',
            'Letter Spacing : 1%',
            'Line Height : 154%'
          ]
        },
        {
          name: 'Body Small Bold',
          class: 'body-small-bold',
          info: [
            'Body Small, Small Text High Emphasis',
            'Font Style : Gilroy Bold',
            'Font Size : 13 px',
            'Letter Spacing : 1%',
            'Line Height : 154%'
          ]
        }
        // {
        //   name: 'Caption Regular Bold',
        //   info: [
        //     'Caption Regular Bold',
        //     'Font Style : Manrope',
        //     'Font Size : 14 px',
        //     'Letter Spacing : 1%',
        //     'Line Height : 154%'
        //   ]
        // },
        // {
        //   name: 'Caption Regular',
        //   info: [
        //     'Caption Regular',
        //     'Font Style : Manrope',
        //     'Font Size : 14 px',
        //     'Letter Spacing : 1%',
        //     'Line Height : 154%'
        //   ]
        // },
        // {
        //   name: 'Caption Small Bold',
        //   info: [
        //     'Caption Small Bold',
        //     'Font Style : Manrope',
        //     'Font Size : 12 px',
        //     'Letter Spacing : 1%',
        //     'Line Height : 154%'
        //   ]
        // },
        // {
        //   name: 'Caption Small Semibold',
        //   info: [
        //     'Caption Small Semibold',
        //     'Font Style : Manrope',
        //     'Font Size : 12 px',
        //     'Letter Spacing : 1%',
        //     'Line Height : 154%'
        //   ]
        // },
        // {
        //   name: 'Caption Small Regular',
        //   info: [
        //     'Caption Small Regular',
        //     'Font Style : Manrope',
        //     'Font Size : 12 px',
        //     'Letter Spacing : 1%',
        //     'Line Height : 154%'
        //   ]
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title-extra-large {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 1%;
}
.title-large {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1%;
}
.title-normal {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1%;
}
.body-large {
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 1%;
  line-height: 144%;
}
.body-normal {
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 1%;
  line-height: 148%;
}
.body-normal-bold {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1%;
  line-height: 148%;
}
.subtitle {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1%;
}
.body-small {
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 1%;
  line-height: 154%;
}
.body-small-bold {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1%;
  line-height: 154%;
}
</style>

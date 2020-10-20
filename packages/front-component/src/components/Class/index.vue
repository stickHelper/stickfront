<template>
  <div class="se-class container-fluid">
    <section class="page-hero">
      <h1>Class</h1>
    </section>
    <section class="flex">
      <div class="w-50 padd-m-hr">
        <pre><code>==========================================================
# Flexbox
==========================================================
.flex {
  display: flex;
}
.flex-between {
  justify-content: space-between;
}
.flex-around,
.flex-between {
  display: flex;
  align-items: center;
}
.flex-around {
  justify-content: space-around;
}
.flex-dir--column {
  flex-direction: column;
}
.flex-dir--row {
  flex-direction: row;
}

==========================================================
# Shadow
==========================================================
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
.shadow-none {
  box-shadow: none !important;
}

==========================================================
# Text styling
==========================================================
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-initial {
  text-transform: none;
}
.text-inherit {
  text-transform: inherit;
}
.text-subtle {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
}
.text-lg {
  font-weight: 500;
  font-size: 18px;
  line-height: 154%;
}
.text-bold {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}
.text-normal {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}
.text-sm-bold {
  font-weight: 700;
}
.text-sm,
.text-sm-bold {
  font-size: 13px;
  line-height: 16px;
}
.text-sm {
  font-weight: 500;
}

.text-xxl {
  font-size: 32px;
}
.text-xl {
  font-size: 24px;
}
.text-md {
  font-size: 16px;
}
.text-sm {
  font-size: 14px;
}
.text-xs {
  font-size: 12px;
}
.text-xxs {
  font-size: 11px;
}

==========================================================
# Margin
==========================================================
.m-xs-6 {
  margin: 64px;
}
.m--xs5 {
  margin: 48px;
}
.m-xs-4 {
  margin: 24px;
}
.m-xs-3 {
  margin: 16px;
}
.m-xs-2 {
  margin: 8px;
}
.m-xs-1 {
  margin: 4px;
}
.m-xs-0 {
  margin: 0;
}
.mx-xs-6 {
  margin: 0 64px;
}
.mx-xs-5 {
  margin: 0 48px;
}
.mx-xs-4 {
  margin: 0 24px;
}
.mx-xs-3 {
  margin: 0 16px;
}
.mx-xs-2 {
  margin: 0 8px;
}
.mx-xs-1 {
  margin: 0 4px;
}
.my-xs-6 {
  margin: 64px 0;
}
.my-xs-5 {
  margin: 48px 0;
}
.my-xs-4 {
  margin: 24px 0;
}
.my-xs-3 {
  margin: 16px 0;
}
.my-xs-2 {
  margin: 8px 0;
}
.my-xs-1 {
  margin: 4px 0;
}
.mt-xs-6 {
  margin-top: 64px;
}
.mt-xs-5 {
  margin-top: 32px;
}
.mt-xs-4 {
  margin-top: 24px;
}
.mt-xs-3 {
  margin-top: 16px;
}
.mt-xs-2 {
  margin-top: 8px;
}
.mt-xs-1 {
  margin-top: 4px;
}
.mt-xs-0 {
  margin-top: 0;
}
.mt-xs-auto {
  margin-top: auto;
}
.mr-xs-6 {
  margin-right: 64px;
}
.mr-xs-5 {
  margin-right: 32px;
}
.mr-xs-4 {
  margin-right: 24px;
}
.mr-xs-3 {
  margin-right: 16px;
}
.mr-xs-2 {
  margin-right: 8px;
}
.mr-xs-1 {
  margin-right: 4px;
}
.mr-xs-0 {
  margin-right: 0;
}
.mr-xs-auto {
  margin-right: auto;
}
.mb-xs-6 {
  margin-bottom: 64px;
}
.mb-xs-5 {
  margin-bottom: 32px;
}
.mb-xs-4 {
  margin-bottom: 24px;
}
.mb-xs-3 {
  margin-bottom: 16px;
}
.mb-xs-2 {
  margin-bottom: 8px;
}
.mb-xs-1 {
  margin-bottom: 4px;
}
.mb-xs-0 {
  margin-bottom: 0;
}
.mb-xs-auto {
  margin-bottom: auto;
}
.ml-xs-6 {
  margin-left: 64px;
}
.ml-xs-5 {
  margin-left: 32px;
}
.ml-xs-4 {
  margin-left: 24px;
}
.ml-xs-3 {
  margin-left: 16px;
}
.ml-xs-2 {
  margin-left: 8px;
}
.ml-xs-1 {
  margin-left: 4px;
}
.ml-xs-0 {
  margin-left: 0;
}
.ml-xs-auto {
  margin-left: auto;
}
@media only screen and (min-width: 768px) {
  .m-sm-6 {
    margin: 64px;
  }
  .m-sm-5 {
    margin: 48px;
  }
  .m-sm-4 {
    margin: 24px;
  }
  .m-sm-3 {
    margin: 16px;
  }
  .m-sm-2 {
    margin: 8px;
  }
  .m-sm-1 {
    margin: 4px;
  }
  .m-sm-0 {
    margin: 0;
  }
  .mx-sm-6 {
    margin: 0 64px;
  }
  .mx-sm-5 {
    margin: 0 48px;
  }
  .mx-sm-4 {
    margin: 0 24px;
  }
  .mx-sm-3 {
    margin: 0 16px;
  }
  .mx-sm-2 {
    margin: 0 8px;
  }
  .mx-sm-1 {
    margin: 0 4px;
  }
  .my-sm-6 {
    margin: 64px 0;
  }
  .my-sm-5 {
    margin: 48px 0;
  }
  .my-sm-4 {
    margin: 24px 0;
  }
  .my-sm-3 {
    margin: 16px 0;
  }
  .my-sm-2 {
    margin: 8px 0;
  }
  .my-sm-1 {
    margin: 4px 0;
  }
  .mt-sm-6 {
    margin-top: 64px;
  }
  .mt-sm-5 {
    margin-top: 32px;
  }
  .mt-sm-4 {
    margin-top: 24px;
  }
  .mt-sm-3 {
    margin-top: 16px;
  }
  .mt-sm-2 {
    margin-top: 8px;
  }
  .mt-sm-1 {
    margin-top: 4px;
  }
  .mt-sm-0 {
    margin-top: 0;
  }
  .mt-sm-auto {
    margin-top: auto;
  }
  .mr-sm-6 {
    margin-right: 64px;
  }
  .mr-sm-5 {
    margin-right: 32px;
  }
  .mr-sm-4 {
    margin-right: 24px;
  }
  .mr-sm-3 {
    margin-right: 16px;
  }
  .mr-sm-2 {
    margin-right: 8px;
  }
  .mr-sm-1 {
    margin-right: 4px;
  }
  .mr-sm-0 {
    margin-right: 0;
  }
  .mr-sm-auto {
    margin-right: auto;
  }
  .mb-sm-6 {
    margin-bottom: 64px;
  }
  .mb-sm-5 {
    margin-bottom: 32px;
  }
  .mb-sm-4 {
    margin-bottom: 24px;
  }
  .mb-sm-3 {
    margin-bottom: 16px;
  }
  .mb-sm-2 {
    margin-bottom: 8px;
  }
  .mb-sm-1 {
    margin-bottom: 4px;
  }
  .mb-sm-0 {
    margin-bottom: 0;
  }
  .mb-sm-auto {
    margin-bottom: auto;
  }
  .ml-sm-6 {
    margin-left: 64px;
  }
  .ml-sm-5 {
    margin-left: 32px;
  }
  .ml-sm-4 {
    margin-left: 24px;
  }
  .ml-sm-3 {
    margin-left: 16px;
  }
  .ml-sm-2 {
    margin-left: 8px;
  }
  .ml-sm-1 {
    margin-left: 4px;
  }
  .ml-sm-0 {
    margin-left: 0;
  }
  .ml-sm-auto {
    margin-left: auto;
  }
}
@media only screen and (min-width: 992px) {
  .m-md-6 {
    margin: 64px;
  }
  .m-md-5 {
    margin: 48px;
  }
  .m-md-4 {
    margin: 24px;
  }
  .m-md-3 {
    margin: 16px;
  }
  .m-md-2 {
    margin: 8px;
  }
  .m-md-1 {
    margin: 4px;
  }
  .m-md-0 {
    margin: 0;
  }
  .mx-md-6 {
    margin: 0 64px;
  }
  .mx-md-5 {
    margin: 0 48px;
  }
  .mx-md-4 {
    margin: 0 24px;
  }
  .mx-md-3 {
    margin: 0 16px;
  }
  .mx-md-2 {
    margin: 0 8px;
  }
  .mx-md-1 {
    margin: 0 4px;
  }
  .my-md-6 {
    margin: 64px 0;
  }
  .my-md-5 {
    margin: 48px 0;
  }
  .my-md-4 {
    margin: 24px 0;
  }
  .my-md-3 {
    margin: 16px 0;
  }
  .my-md-2 {
    margin: 8px 0;
  }
  .my-md-1 {
    margin: 4px 0;
  }
  .mt-md-6 {
    margin-top: 64px;
  }
  .mt-md-5 {
    margin-top: 32px;
  }
  .mt-md-4 {
    margin-top: 24px;
  }
  .mt-md-3 {
    margin-top: 16px;
  }
  .mt-md-2 {
    margin-top: 8px;
  }
  .mt-md-1 {
    margin-top: 4px;
  }
  .mt-md-0 {
    margin-top: 0;
  }
  .mt-md-auto {
    margin-top: auto;
  }
  .mr-md-6 {
    margin-right: 64px;
  }
  .mr-md-5 {
    margin-right: 32px;
  }
  .mr-md-4 {
    margin-right: 24px;
  }
  .mr-md-3 {
    margin-right: 16px;
  }
  .mr-md-2 {
    margin-right: 8px;
  }
  .mr-md-1 {
    margin-right: 4px;
  }
  .mr-md-0 {
    margin-right: 0;
  }
  .mr-md-auto {
    margin-right: auto;
  }
  .mb-md-6 {
    margin-bottom: 64px;
  }
  .mb-md-5 {
    margin-bottom: 32px;
  }
  .mb-md-4 {
    margin-bottom: 24px;
  }
  .mb-md-3 {
    margin-bottom: 16px;
  }
  .mb-md-2 {
    margin-bottom: 8px;
  }
  .mb-md-1 {
    margin-bottom: 4px;
  }
  .mb-md-0 {
    margin-bottom: 0;
  }
  .mb-md-auto {
    margin-bottom: auto;
  }
  .ml-md-6 {
    margin-left: 64px;
  }
  .ml-md-5 {
    margin-left: 32px;
  }
  .ml-md-4 {
    margin-left: 24px;
  }
  .ml-md-3 {
    margin-left: 16px;
  }
  .ml-md-2 {
    margin-left: 8px;
  }
  .ml-md-1 {
    margin-left: 4px;
  }
  .ml-md-0 {
    margin-left: 0;
  }
  .ml-md-auto {
    margin-left: auto;
  }
}
@media only screen and (min-width: 1024px) {
  .m-lg-6 {
    margin: 64px;
  }
  .m-lg-5 {
    margin: 48px;
  }
  .m-lg-4 {
    margin: 24px;
  }
  .m-lg-3 {
    margin: 16px;
  }
  .m-lg-2 {
    margin: 8px;
  }
  .m-lg-1 {
    margin: 4px;
  }
  .m-lg-0 {
    margin: 0;
  }
  .mx-lg-6 {
    margin: 0 64px;
  }
  .mx-lg-5 {
    margin: 0 48px;
  }
  .mx-lg-4 {
    margin: 0 24px;
  }
  .mx-lg-3 {
    margin: 0 16px;
  }
  .mx-lg-2 {
    margin: 0 8px;
  }
  .mx-lg-1 {
    margin: 0 4px;
  }
  .my-lg-6 {
    margin: 64px 0;
  }
  .my-lg-5 {
    margin: 48px 0;
  }
  .my-lg-4 {
    margin: 24px 0;
  }
  .my-lg-3 {
    margin: 16px 0;
  }
  .my-lg-2 {
    margin: 8px 0;
  }
  .my-lg-1 {
    margin: 4px 0;
  }
  .mt-lg-6 {
    margin-top: 64px;
  }
  .mt-lg-5 {
    margin-top: 32px;
  }
  .mt-lg-4 {
    margin-top: 24px;
  }
  .mt-lg-3 {
    margin-top: 16px;
  }
  .mt-lg-2 {
    margin-top: 8px;
  }
  .mt-lg-1 {
    margin-top: 4px;
  }
  .mt-lg-0 {
    margin-top: 0;
  }
  .mt-lg-auto {
    margin-top: auto;
  }
  .mr-lg-6 {
    margin-right: 64px;
  }
  .mr-lg-5 {
    margin-right: 32px;
  }
  .mr-lg-4 {
    margin-right: 24px;
  }
  .mr-lg-3 {
    margin-right: 16px;
  }
  .mr-lg-2 {
    margin-right: 8px;
  }
  .mr-lg-1 {
    margin-right: 4px;
  }
  .mr-lg-0 {
    margin-right: 0;
  }
  .mr-lg-auto {
    margin-right: auto;
  }
  .mb-lg-6 {
    margin-bottom: 64px;
  }
  .mb-lg-5 {
    margin-bottom: 32px;
  }
  .mb-lg-4 {
    margin-bottom: 24px;
  }
  .mb-lg-3 {
    margin-bottom: 16px;
  }
  .mb-lg-2 {
    margin-bottom: 8px;
  }
  .mb-lg-1 {
    margin-bottom: 4px;
  }
  .mb-lg-0 {
    margin-bottom: 0;
  }
  .mb-lg-auto {
    margin-bottom: auto;
  }
  .ml-lg-6 {
    margin-left: 64px;
  }
  .ml-lg-5 {
    margin-left: 32px;
  }
  .ml-lg-4 {
    margin-left: 24px;
  }
  .ml-lg-3 {
    margin-left: 16px;
  }
  .ml-lg-2 {
    margin-left: 8px;
  }
  .ml-lg-1 {
    margin-left: 4px;
  }
  .ml-lg-0 {
    margin-left: 0;
  }
  .ml-lg-auto {
    margin-left: auto;
  }
}
</code></pre>
      </div>
      <div class="w-50 padd-m-hr">
        <pre><code>==========================================================
# Height / Width
==========================================================
.w-25 {
  width: 25% !important;
}
.w-50 {
  width: 50% !important;
}
.w-75 {
  width: 75% !important;
}
.w-100 {
  width: 100% !important;
}
.w-auto {
  width: auto !important;
}
.h-25 {
  height: 25% !important;
}
.h-50 {
  height: 50% !important;
}
.h-75 {
  height: 75% !important;
}
.h-100 {
  height: 100% !important;
}
.h-auto {
  height: auto !important;
}

==========================================================
# Padding
==========================================================
.p-xs-6 {
  padding: 64px;
}
.p-xs-5 {
  padding: 48px;
}
.p-xs-4 {
  padding: 24px;
}
.p-xs-3 {
  padding: 16px;
}
.p-xs-2 {
  padding: 8px;
}
.p-xs-1 {
  padding: 4px;
}
.p-xs-0 {
  padding: 0;
}
.px-xs-6 {
  padding: 0 64px;
}
.px-xs-5 {
  padding: 0 48px;
}
.px-xs-4 {
  padding: 0 24px;
}
.px-xs-3 {
  padding: 0 16px;
}
.px-xs-2 {
  padding: 0 8px;
}
.px-xs-1 {
  padding: 0 4px;
}
.py-xs-6 {
  padding: 64px 0;
}
.py-xs-5 {
  padding: 48px 0;
}
.py-xs-4 {
  padding: 24px 0;
}
.py-xs-3 {
  padding: 16px 0;
}
.py-xs-2 {
  padding: 8px 0;
}
.py-xs-1 {
  padding: 4px 0;
}
.pt-xs-6 {
  padding-top: 64px;
}
.pt-xs-5 {
  padding-top: 32px;
}
.pt-xs-4 {
  padding-top: 24px;
}
.pt-xs-3 {
  padding-top: 16px;
}
.pt-xs-2 {
  padding-top: 8px;
}
.pt-xs-1 {
  padding-top: 4px;
}
.pt-xs-0 {
  padding-top: 0;
}
.pt-xs-auto {
  padding-top: auto;
}
.pr-xs-6 {
  padding-right: 64px;
}
.pr-xs-5 {
  padding-right: 32px;
}
.pr-xs-4 {
  padding-right: 24px;
}
.pr-xs-3 {
  padding-right: 16px;
}
.pr-xs-2 {
  padding-right: 8px;
}
.pr-xs-1 {
  padding-right: 4px;
}
.pr-xs-0 {
  padding-right: 0;
}
.pr-xs-auto {
  padding-right: auto;
}
.pb-xs-6 {
  padding-bottom: 64px;
}
.pb-xs-5 {
  padding-bottom: 32px;
}
.pb-xs-4 {
  padding-bottom: 24px;
}
.pb-xs-3 {
  padding-bottom: 16px;
}
.pb-xs-2 {
  padding-bottom: 8px;
}
.pb-xs-1 {
  padding-bottom: 4px;
}
.pb-xs-0 {
  padding-bottom: 0;
}
.pb-xs-auto {
  padding-bottom: auto;
}
.pl-xs-6 {
  padding-left: 64px;
}
.pl-xs-5 {
  padding-left: 32px;
}
.pl-xs-4 {
  padding-left: 24px;
}
.pl-xs-3 {
  padding-left: 16px;
}
.pl-xs-2 {
  padding-left: 8px;
}
.pl-xs-1 {
  padding-left: 4px;
}
.pl-xs-0 {
  padding-left: 0;
}
.pl-xs-auto {
  padding-left: auto;
}
@media only screen and (min-width: 768px) {
  .p-sm-6 {
    padding: 64px;
  }
  .p-sm-5 {
    padding: 48px;
  }
  .p-sm-4 {
    padding: 24px;
  }
  .p-sm-3 {
    padding: 16px;
  }
  .p-sm-2 {
    padding: 8px;
  }
  .p-sm-1 {
    padding: 4px;
  }
  .p-sm-0 {
    padding: 0;
  }
  .px-sm-6 {
    padding: 0 64px;
  }
  .px-sm-5 {
    padding: 0 48px;
  }
  .px-sm-4 {
    padding: 0 24px;
  }
  .px-sm-3 {
    padding: 0 16px;
  }
  .px-sm-2 {
    padding: 0 8px;
  }
  .px-sm-1 {
    padding: 0 4px;
  }
  .py-sm-6 {
    padding: 64px 0;
  }
  .py-sm-5 {
    padding: 48px 0;
  }
  .py-sm-4 {
    padding: 24px 0;
  }
  .py-sm-3 {
    padding: 16px 0;
  }
  .py-sm-2 {
    padding: 8px 0;
  }
  .py-sm-1 {
    padding: 4px 0;
  }
  .pt-sm-6 {
    padding-top: 64px;
  }
  .pt-sm-5 {
    padding-top: 32px;
  }
  .pt-sm-4 {
    padding-top: 24px;
  }
  .pt-sm-3 {
    padding-top: 16px;
  }
  .pt-sm-2 {
    padding-top: 8px;
  }
  .pt-sm-1 {
    padding-top: 4px;
  }
  .pt-sm-0 {
    padding-top: 0;
  }
  .pt-sm-auto {
    padding-top: auto;
  }
  .pr-sm-6 {
    padding-right: 64px;
  }
  .pr-sm-5 {
    padding-right: 32px;
  }
  .pr-sm-4 {
    padding-right: 24px;
  }
  .pr-sm-3 {
    padding-right: 16px;
  }
  .pr-sm-2 {
    padding-right: 8px;
  }
  .pr-sm-1 {
    padding-right: 4px;
  }
  .pr-sm-0 {
    padding-right: 0;
  }
  .pr-sm-auto {
    padding-right: auto;
  }
  .pb-sm-6 {
    padding-bottom: 64px;
  }
  .pb-sm-5 {
    padding-bottom: 32px;
  }
  .pb-sm-4 {
    padding-bottom: 24px;
  }
  .pb-sm-3 {
    padding-bottom: 16px;
  }
  .pb-sm-2 {
    padding-bottom: 8px;
  }
  .pb-sm-1 {
    padding-bottom: 4px;
  }
  .pb-sm-0 {
    padding-bottom: 0;
  }
  .pb-sm-auto {
    padding-bottom: auto;
  }
  .pl-sm-6 {
    padding-left: 64px;
  }
  .pl-sm-5 {
    padding-left: 32px;
  }
  .pl-sm-4 {
    padding-left: 24px;
  }
  .pl-sm-3 {
    padding-left: 16px;
  }
  .pl-sm-2 {
    padding-left: 8px;
  }
  .pl-sm-1 {
    padding-left: 4px;
  }
  .pl-sm-0 {
    padding-left: 0;
  }
  .pl-sm-auto {
    padding-left: auto;
  }
}
@media only screen and (min-width: 992px) {
  .p-md-6 {
    padding: 64px;
  }
  .p-md-5 {
    padding: 48px;
  }
  .p-md-4 {
    padding: 24px;
  }
  .p-md-3 {
    padding: 16px;
  }
  .p-md-2 {
    padding: 8px;
  }
  .p-md-1 {
    padding: 4px;
  }
  .p-md-0 {
    padding: 0;
  }
  .px-md-6 {
    padding: 0 64px;
  }
  .px-md-5 {
    padding: 0 48px;
  }
  .px-md-4 {
    padding: 0 24px;
  }
  .px-md-3 {
    padding: 0 16px;
  }
  .px-md-2 {
    padding: 0 8px;
  }
  .px-md-1 {
    padding: 0 4px;
  }
  .py-md-6 {
    padding: 64px 0;
  }
  .py-md-5 {
    padding: 48px 0;
  }
  .py-md-4 {
    padding: 24px 0;
  }
  .py-md-3 {
    padding: 16px 0;
  }
  .py-md-2 {
    padding: 8px 0;
  }
  .py-md-1 {
    padding: 4px 0;
  }
  .pt-md-6 {
    padding-top: 64px;
  }
  .pt-md-5 {
    padding-top: 32px;
  }
  .pt-md-4 {
    padding-top: 24px;
  }
  .pt-md-3 {
    padding-top: 16px;
  }
  .pt-md-2 {
    padding-top: 8px;
  }
  .pt-md-1 {
    padding-top: 4px;
  }
  .pt-md-0 {
    padding-top: 0;
  }
  .pt-md-auto {
    padding-top: auto;
  }
  .pr-md-6 {
    padding-right: 64px;
  }
  .pr-md-5 {
    padding-right: 32px;
  }
  .pr-md-4 {
    padding-right: 24px;
  }
  .pr-md-3 {
    padding-right: 16px;
  }
  .pr-md-2 {
    padding-right: 8px;
  }
  .pr-md-1 {
    padding-right: 4px;
  }
  .pr-md-0 {
    padding-right: 0;
  }
  .pr-md-auto {
    padding-right: auto;
  }
  .pb-md-6 {
    padding-bottom: 64px;
  }
  .pb-md-5 {
    padding-bottom: 32px;
  }
  .pb-md-4 {
    padding-bottom: 24px;
  }
  .pb-md-3 {
    padding-bottom: 16px;
  }
  .pb-md-2 {
    padding-bottom: 8px;
  }
  .pb-md-1 {
    padding-bottom: 4px;
  }
  .pb-md-0 {
    padding-bottom: 0;
  }
  .pb-md-auto {
    padding-bottom: auto;
  }
  .pl-md-6 {
    padding-left: 64px;
  }
  .pl-md-5 {
    padding-left: 32px;
  }
  .pl-md-4 {
    padding-left: 24px;
  }
  .pl-md-3 {
    padding-left: 16px;
  }
  .pl-md-2 {
    padding-left: 8px;
  }
  .pl-md-1 {
    padding-left: 4px;
  }
  .pl-md-0 {
    padding-left: 0;
  }
  .pl-md-auto {
    padding-left: auto;
  }
}
@media only screen and (min-width: 1024px) {
  .p-lg-6 {
    padding: 64px;
  }
  .p-lg-5 {
    padding: 48px;
  }
  .p-lg-4 {
    padding: 24px;
  }
  .p-lg-3 {
    padding: 16px;
  }
  .p-lg-2 {
    padding: 8px;
  }
  .p-lg-1 {
    padding: 4px;
  }
  .p-lg-0 {
    padding: 0;
  }
  .px-lg-6 {
    padding: 0 64px;
  }
  .px-lg-5 {
    padding: 0 48px;
  }
  .px-lg-4 {
    padding: 0 24px;
  }
  .px-lg-3 {
    padding: 0 16px;
  }
  .px-lg-2 {
    padding: 0 8px;
  }
  .px-lg-1 {
    padding: 0 4px;
  }
  .py-lg-6 {
    padding: 64px 0;
  }
  .py-lg-5 {
    padding: 48px 0;
  }
  .py-lg-4 {
    padding: 24px 0;
  }
  .py-lg-3 {
    padding: 16px 0;
  }
  .py-lg-2 {
    padding: 8px 0;
  }
  .py-lg-1 {
    padding: 4px 0;
  }
  .pt-lg-6 {
    padding-top: 64px;
  }
  .pt-lg-5 {
    padding-top: 32px;
  }
  .pt-lg-4 {
    padding-top: 24px;
  }
  .pt-lg-3 {
    padding-top: 16px;
  }
  .pt-lg-2 {
    padding-top: 8px;
  }
  .pt-lg-1 {
    padding-top: 4px;
  }
  .pt-lg-0 {
    padding-top: 0;
  }
  .pt-lg-auto {
    padding-top: auto;
  }
  .pr-lg-6 {
    padding-right: 64px;
  }
  .pr-lg-5 {
    padding-right: 32px;
  }
  .pr-lg-4 {
    padding-right: 24px;
  }
  .pr-lg-3 {
    padding-right: 16px;
  }
  .pr-lg-2 {
    padding-right: 8px;
  }
  .pr-lg-1 {
    padding-right: 4px;
  }
  .pr-lg-0 {
    padding-right: 0;
  }
  .pr-lg-auto {
    padding-right: auto;
  }
  .pb-lg-6 {
    padding-bottom: 64px;
  }
  .pb-lg-5 {
    padding-bottom: 32px;
  }
  .pb-lg-4 {
    padding-bottom: 24px;
  }
  .pb-lg-3 {
    padding-bottom: 16px;
  }
  .pb-lg-2 {
    padding-bottom: 8px;
  }
  .pb-lg-1 {
    padding-bottom: 4px;
  }
  .pb-lg-0 {
    padding-bottom: 0;
  }
  .pb-lg-auto {
    padding-bottom: auto;
  }
  .pl-lg-6 {
    padding-left: 64px;
  }
  .pl-lg-5 {
    padding-left: 32px;
  }
  .pl-lg-4 {
    padding-left: 24px;
  }
  .pl-lg-3 {
    padding-left: 16px;
  }
  .pl-lg-2 {
    padding-left: 8px;
  }
  .pl-lg-1 {
    padding-left: 4px;
  }
  .pl-lg-0 {
    padding-left: 0;
  }
  .pl-lg-auto {
    padding-left: auto;
  }
}
</code></pre>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

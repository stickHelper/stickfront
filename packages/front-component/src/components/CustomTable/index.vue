<template>
  <div class="custom-table">
    <table v-if="columns.length !== 0 && rows.length !== 0">
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
        >
          <td width="20%">
            {{ row.attr }}
          </td>
          <td
            width="40%"
          />
          <td width="20%">
            {{ row.type }}
          </td>
          <td width="20%">
            {{ row.default ? row.default : '-' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CustomTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>

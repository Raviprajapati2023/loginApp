<template>
  <div>
    <q-table :title="label" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:top-left>
        <template></template>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: "" },
    rows: { type: Array },
    columns: { type: Array, default: () => [] },
    itemsPerPage: { type: Number, default: 10 },
    itemKey: { type: String },
    showSelect: { type: Boolean },
    hideFooter: { type: Boolean },
  },
};
</script>

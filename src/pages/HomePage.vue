<template>
  <div>
    <router-link to="upload" style="text-decoration: none" class="text-red-600">
      This is home page
    </router-link>

    <AddressForm @save="getformData" />
    <RTable :columns="tableColumns" :rows="tableRows" label="Table Data">
    </RTable>
  </div>
</template>
<script setup>
import AddressForm from "src/components/AddressForm.vue";
import { ref } from "vue";

const tableColumns = ref([
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "email", label: "Email", field: "email", sortable: true },
  { name: "add", label: "Address", field: "add" },
]);
const tableRows = ref([
  {
    name: "Ravi Prajapati",
    email: "ravi@mailinator.com",
    add: "Indore",
  },
]);
const getformData = (form) => {
  // console.log(form, "getData");
  tableRows.value.push(form);
};
</script>

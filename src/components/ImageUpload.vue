<template>
  <div class="border-dashed border-2 border-indigo-600 my-12 mx-12">
    <div v-bind="getRootProps()" class="p-12">
      <input v-bind="getInputProps()" />
      <p v-if="isDragActive">Drop the files here ...</p>
      <p v-else>Drag 'n' drop some files here, or click to select files</p>
    </div>
    <span class="w-full flex justify-center">
      <button
        @click="open"
        class="justify-center text-center bg-blue-400 p-2 my-4 rounded"
      >
        open
      </button></span
    >
  </div>
</template>

<script>
import { useDropzone } from "vue3-dropzone";
import axios from "axios";

export default {
  name: "UseDropzoneDemo",
  setup() {
    const url = "{your_url}"; // Your url on the server side
    const saveFiles = (files) => {
      const formData = new FormData(); // pass data as a form
      for (var x = 0; x < files.length; x++) {
        // append files as array to the form, feel free to change the array name
        formData.append("images[]", files[x]);
      }

      // post the formData to your backend where storage is processed. In the backend, you will need to loop through the array and save each file through the loop.

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.info(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    function onDrop(acceptFiles, rejectReasons) {
      saveFiles(acceptFiles); // saveFiles as callback
      console.log(acceptFiles, "_____________this input ");
    }

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    return {
      getRootProps,
      getInputProps,
      ...rest,
    };
  },
};
</script>

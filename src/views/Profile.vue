<template>
  <v-form validate-on="submit lazy" @submit.prevent="submit">
       <v-text-field v-model="Experience" label="Experience"></v-text-field>
    <v-text-field v-model="Competences" label="Competences"></v-text-field>
    <v-text-field v-model="Formation" label="Formation"></v-text-field>

    <v-btn
      :loading="loading"
      type="submit"
      block
      class="mt-2"
      text="Save"
    ></v-btn>
  </v-form>
</template>
<script>
import instance from "@/auth";
// import axios from "axios";

export default {
  data: () => ({
    Experience:"",
    Competences: "",
    Formation: "",
  }),
  methods: {
    async submit(event) {
      this.loading = true;

      const results = await event;

      this.loading = false;

      // alert(this.email, this.password);
      // console.log(this.email, this.password);

      // Make a POST request to the API
      instance
        .post("http://localhost:8000/api/profile", {
          Experience: this.Experience,
          Competences: this.Competences,
          Formation: this.Formation,
          user_id:1,
        })
        .then((response) => {
          // Handle the successful response here
          console.log("Response:", response.data);

          this.$router.push({ name: 'Home' });

        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
    },
  },
};
</script>

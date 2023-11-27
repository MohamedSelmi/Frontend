<template>
  <v-form validate-on="submit lazy" @submit.prevent="submit">
       <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="password" label="Password"></v-text-field>

    <v-btn
      :loading="loading"
      type="submit"
      block
      class="mt-2"
      text="Register"
    ></v-btn>
  </v-form>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    name:"",
    email: "",
    password: "",
  }),
  methods: {
    async submit(event) {
      this.loading = true;

      const results = await event;

      this.loading = false;

      // alert(this.email, this.password);
      // console.log(this.email, this.password);

      // Make a POST request to the API
      axios
        .post("http://localhost:8000/api/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Handle the successful response here
          console.log("Response:", response.data);

          this.$router.push({ name: 'Profile' });

        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
    },
  },
};
</script>

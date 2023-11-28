<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title> {{ offer.Title }} </v-card-title>

    <v-card-subtitle> {{ offer.Deadline }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text" @click="apply">
        Apply
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ offer.Description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
import axiosInstance from "@/auth";

export default {
  props: ["offer"],
  data: () => ({
    show: false,
  }),
  methods: {
    async apply() {
      axiosInstance
        .post("http://localhost:8000/api/submitOffer", {
          offer_id: this.offer.id,
        })
        .then((response) => {
          // Handle the successful response here
          console.log("Applied:", response.data);
          this.items = response.data;
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
    },
  },
};
</script>

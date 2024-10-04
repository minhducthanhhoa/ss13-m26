<template>
    <v-container>
      <v-card>
        <v-card-title>
          <h2>Item</h2>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Manage Items</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-pagination
                v-model="page"
                :length="pageCount"
                class="mt-3"
              ></v-pagination>
            </v-toolbar>
          </template>
  
          <template v-slot:[`item.status`]="{ item }">
            <v-chip
              :color="getStatusColor(item.status)"
              text-color="white"
            >
              {{ item.status }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    { name: 'Sunil Joshi', project: 'Elite Admin', post: 'Web Designer', status: 'Active', budget: '$39' },
    { name: 'Andrew McDowland', project: 'Real Homes WP Theme', post: 'Project Manager', status: 'Pending', budget: '$24.5k' },
    { name: 'Christopher Jamil', project: 'MedicalLP WP Theme', post: 'Project Manager', status: 'Completed', budget: '$12.8k' },
    { name: 'Nirav Joshi', project: 'Hosting Press HTML', post: 'Frontend Engineer', status: 'Active', budget: '$2.4k' },
    { name: 'Michael Doe', project: 'Helping Hands WP Theme', post: 'Content Writer', status: 'Cancel', budget: '$4.2k' },
  ]);
  
  const headers = [
    { text: 'Name', value: 'name' },
    { text: 'Project Name', value: 'project' },
    { text: 'Post', value: 'post' },
    { text: 'Status', value: 'status' },
    { text: 'Budget', value: 'budget' },
  ];
  
  const page = ref(1);
  const pageCount = ref(Math.ceil(items.value.length / 5));
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'Completed':
        return 'blue';
      case 'Cancel':
        return 'red';
      default:
        return 'grey';
    }
  };
  </script>
  
  <style scoped>
  
  </style>
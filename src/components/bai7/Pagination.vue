<template>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      :total-visible="5"
      @input="updatePage"
      class="pagination"
    ></v-pagination>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  </style>
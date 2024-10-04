<template>
    <v-container>
      <v-tabs v-model="activeTab" background-color="blue" dark>
        <v-tab v-for="tab in tabs" :key="tab.name">{{ tab.name }}</v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="activeTab">
        <v-tab-item v-for="tab in tabs" :key="tab.name">
          <v-card>
            <v-card-text>{{ tab.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const tabs = [
    { name: 'Trang Chủ', content: 'Tab trang chủ' },
    { name: 'Giới Thiệu', content: 'Giới thiệu' },
    { name: 'Liên Hệ', content: 'Liên hệ' },
  ];
  
  const activeTab = ref(0);
  </script>
  
  <style scoped>
  
  </style>
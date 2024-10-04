<template>
    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn color="blue" v-bind="props">QUẢN TRỊ VIÊN</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Thông tin cá nhân</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Đổi mật khẩu</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Đăng xuất</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  </style>
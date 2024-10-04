<template>
    <div>
      <v-btn color="primary" @click="openDialog">Xác Nhận</v-btn>
  
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title>
            <span class="headline">Xác Nhận</span>
          </v-card-title>
          <v-card-text>
            Bạn có xác nhận làm mới dữ liệu không? Nếu có dữ liệu sẽ được cập nhật.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green" @click="confirm">Xác Nhận</v-btn>
            <v-btn color="red" @click="closeDialog">Hủy</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const dialog = ref(false);
  
  const openDialog = () => {
    dialog.value = true;
  };
  
  const closeDialog = () => {
    dialog.value = false;
  };
  
  const confirm = () => {
    console.log('Đã xác nhận làm mới dữ liệu!');
    closeDialog();
  };
  </script>
  
  <style scoped>
  
  </style>
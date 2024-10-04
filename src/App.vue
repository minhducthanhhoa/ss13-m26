<template>
  <div>
    <v-btn @click="handleClick" append-icon="$vuetify">Click me</v-btn>
    <v-combobox
      v-model="city"
      label="Thành phố"
      :items="[
        'Hà Nội',
        'Đà Nẵng',
        'Hà Nam',
        'Thanh Hóa',
        'Nghệ An',
        'Ninh Bình',
      ]"
    ></v-combobox>
    <h3>Thành phố: {{ city }}</h3>
    <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="First name"
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet>
    <Button></Button>
    <Input></Input>
    <Cart></Cart>
    <Menu></Menu>
    <Alerts></Alerts>
    <Dialog></Dialog>
    <Pagination></Pagination>
    <Tab></Tab>
    <Form></Form>
    <Table></Table>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const rules = reactive([
  (value) => {
    if (value) return true;

    return "Thông tin không được để trống.";
  },
]);
const city = ref("");
const handleClick = () => {
  console.log("Clicked");
};
import Button from "./components/bai1/Button.vue";
import Input from "./components/bai2/Input.vue";
import Cart from "./components/bai3/Cart.vue";
import Menu from "./components/bai4/Menu.vue";
import Alerts from "./components/bai5/Alerts.vue";
import Dialog from "./components/bai6/Dialog.vue";
import Pagination from "./components/bai7/Pagination.vue";
import Tab from "./components/bai8/Tab.vue";
import Form from "./components/bai9/Form.vue";
import Table from "./components/bai10/Table.vue";
</script>

<style></style>

<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Basic Layout</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" v-model="form.name" />
                <v-text-field label="Company" v-model="form.company" />
                <v-text-field label="Email" v-model="form.email" />
                <v-text-field label="Phone No" v-model="form.phone" />
                <v-textarea label="Message" v-model="form.message" />
                <v-btn >Send</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Basic with Icons</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Name"
                  v-model="formWithIcons.name"
                  prepend-icon="mdi-account"
                />
                <v-text-field
                  label="Company"
                  v-model="formWithIcons.company"
                  prepend-icon="mdi-office-building"
                />
                <v-text-field
                  label="Email"
                  v-model="formWithIcons.email"
                  prepend-icon="mdi-email"
                />
                <v-text-field
                  label="Phone No"
                  v-model="formWithIcons.phone"
                  prepend-icon="mdi-phone"
                />
                <v-textarea
                  label="Message"
                  v-model="formWithIcons.message"
                  prepend-icon="mdi-message"
                />
                <v-btn>Send</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  </style>
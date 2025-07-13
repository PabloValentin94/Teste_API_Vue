<script setup lang="ts">
import { useApi } from '../composables/api'
import { useRouter } from "vue-router"
import type { User } from '../models/User'

const router = useRouter()

const { data } = useApi('/users').get().json<User[]>()

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div>
    <a style="margin-bottom: 15px" class="btn btn-secondary" @click="goBack">Voltar</a>
    <table class="table table-dark table-striped">
      <thead>
        <tr class="table-primary text-center">
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
          <th>E-mail</th>
          <th>City</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="user in data" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address.city }}</td>
          <td>{{ user.company.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useApi } from '../composables/api'
import { useRouter } from 'vue-router'
import type { Post } from '../models/Post'

const router = useRouter()

const { data } = useApi('/posts').get().json<Post[]>()

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
          <th>Title</th>
          <th>User Id</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="post in data" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.userId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

import { createFetch } from '@vueuse/core'
import { apiUrl } from '../config/env'

export const useApi = createFetch({
  baseUrl: apiUrl,
})

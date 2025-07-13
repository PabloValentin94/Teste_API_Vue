import type { Address } from './Address'
import type { Company } from './Company'

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

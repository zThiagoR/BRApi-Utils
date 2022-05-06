/* eslint-disable no-self-assign */

import axios from 'axios'
import { urls } from './urls.json'

type resources = 'CEP' | 'BANKS' | 'DDD' | 'CNPJ';

export class BRApiUtils {
  private readonly type: resources
  private readonly code: string

  constructor() {
    this.type = this.type
    this.code = this.code
  }

  async fetch({ type, code }: { type: resources, code: string }) {
    const url: string = urls[type] + code

    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }
}

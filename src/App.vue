<template>
  <pro-form :columns="columns"> </pro-form>
</template>

<script setup lang="ts">
import { ProForm } from '@pro/index'
import type { Columns } from '@pro/index'

const columns: Columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    valueType: 'text'
  },
  {
    title: '密码',
    dataIndex: 'password',
    valueType: 'password'
  }
]
</script>

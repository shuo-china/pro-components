<template>
  <el-form>
    <form-item
      v-for="(column, index) in columns"
      :key="index"
      :column="column"
    ></form-item>
  </el-form>
</template>

<script setup lang="ts" name="ProForm">
import { formProps } from './form'
import FormItem from './form-item.vue'

defineProps(formProps)
</script>

<template>
  <el-form-item>
    <form-field :column="column" />
  </el-form-item>
</template>

<script setup lang="ts">
import { formItemProps } from './form-item'
import FormField from './form-field.vue'

defineProps(formItemProps)
</script>

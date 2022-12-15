<template>
  <component :is="base?.component"></component>
</template>

<script setup lang="ts">
import { getValueTypeBase, formFieldProps } from './form-field'

const props = defineProps(formFieldProps)
const base = getValueTypeBase(props.column?.valueType)
console.log(props.column)
</script>

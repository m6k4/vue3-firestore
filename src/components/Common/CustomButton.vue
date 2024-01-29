<template>
  <button
    class="custom-button"
    :class="`custom-button--${type} 
    ${loading ? 'custom-button--loading' : ''}`"
    @click="$emit('handleClick')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ButtonTypes } from '@/types/types'

defineProps({
  type: {
    type: String as PropType<ButtonTypes>,
    default: ButtonTypes.Primary,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss">
.custom-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  background-color: #0e3b43;

  &--primary {
    background-color: #dc3545;
  }

  &--secondary {
    background-color: #a3bbad;
  }

  &--success {
    background-color: #28a745;
  }

  &--info {
    background-color: #357266;
  }

  &--warning {
    background-color: #ffc107;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    transform: scale(0.98);
  }

  &--loading {
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      animation: loading 1s infinite;
    }
  }
}
</style>

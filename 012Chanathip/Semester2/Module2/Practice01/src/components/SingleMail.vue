<script setup>

const props = defineProps({
  mail: {
      type: Object,
      required: true    },
  layout: {
      type: Object,
      default: { type: 'flex' }
  }
  // layout = {type:'grid', colSpanNo:2, colSpanValue=6}
})
defineEmits(['chooseMail'])
</script>

<template>
  <div
    :class="
      layout.type === 'flex'
        ? 'w-2/12'
        : layout.colSpanNo === 1
        ? `col-span-${layout.colSpanValue}`
        : ''
    "
  >
    <input
      type="checkbox"
      :value="mail.id"
      @click="
        $emit('chooseMail', {
          mailId: mail.id,
          eTarget: $event.target.value,
          mailStatus: { status: 'read' },
        })
      "
    />
    <span> {{ mail.title }}</span>
  </div>
  <div
    :class="
      layout.type === 'flex'
        ? 'w-8/12'
        : layout.colSpanNo === 2
        ? `col-span-${layout.colSpanValue}`
        : ''
    "
  >
    {{ mail.body }}
  </div>
  <div
    :class="
      layout.type === 'flex'
        ? 'w-2/12'
        : layout.colSpanNo === 3
        ? `col-span-${layout.colSpanValue}`
        : ''
    "
  >
    {{ mail.keywords.join("/ ") }}
  </div>

</template>

<style scoped>
</style>

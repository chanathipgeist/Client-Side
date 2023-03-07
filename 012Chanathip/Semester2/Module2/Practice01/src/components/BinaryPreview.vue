<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
    selectedBinaryObject: [String, Object]
})
const previewSrc = ref('')
const previewImage = () => {
    const reader = new FileReader()
    reader.addEventListener(
        'load',
        () => {
            // convert image file to base64 string            previewSrc.value = reader.result        
        },
        false    )
    if (Boolean(props.selectedBinaryObject)) {
        reader.readAsDataURL(props.selectedBinaryObject)
    }
}
const previewDoc = () => {
    previewSrc.value = URL.createObjectURL(props.selectedBinaryObject)
}
const isDoc = ref(false)
const canPreview = computed(() => {
    console.log(props.selectedBinaryObject)
    if (typeof props.selectedBinaryObject === 'object') {
        if (props.selectedBinaryObject.name.endsWith('pdf')) {
            previewDoc()
            isDoc.value = true        } else {
            previewImage()
            isDoc.value = false        }
        return true    } else return false})
</script>
<template>
  <div>
    <div v-if="canPreview && !isDoc">
      <img :src="previewSrc" class="w-52 h-52" />
    </div>
    <div v-if="canPreview && isDoc">
      <a :href="previewSrc" target="_blank"
        ><span class="text-blue-300">{{ previewSrc }}</span></a
      >
    </div>
  </div>
</template>
<style scoped></style>

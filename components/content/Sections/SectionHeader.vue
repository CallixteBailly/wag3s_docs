<template>
    <div class="section-header">
        <img :src="icon" :alt="title" width="40" class="section-icon" />
        <span class="section-title">{{ title }}</span>
    </div>
</template>
  
<script>
export default {
    props: {
        title: String,
        icon: String
    }
};
</script>
  
<style>
.section-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #4DA8A2;
    font-weight: bold;
    font-size: 25px;
}

.section-icon {
    margin-right: 10px;
}
</style>
  
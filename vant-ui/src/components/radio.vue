<template>
    <div>
        <p>{{ tip }}</p>
    </div>
</template>

<script>
export default {
    name:' radio',
    data: function () {
        return {
            tip: '单选框'
        }
    }
}
</script>

<style scoped>
p {
    color: red;
    font-size: 18px;
    font-weight: bold;
}
</style>
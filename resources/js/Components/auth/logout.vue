<template>

</template>

<script>
export default {
    name: "logout",
    created(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        Toast.fire({
            icon: 'success',
            title: 'Logout successfully'
        })
        this.$router.push({ name: 'Login'})

    }
}
</script>

<style scoped>

</style>

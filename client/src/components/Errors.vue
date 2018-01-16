<template>
  <div class="container">
    <transition name="notification">
      <div
        class="notification is-danger"
        v-if="error"
        @click="resetError">
        <button class="delete" @click="resetError"></button>
        <div>
          {{ error }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  methods: {
    resetError () {
      return this.$store.dispatch('utility/clearError')
    }
  },
  computed: {
    error () {
      return this.$store.getters['utility/error']
    }
  }
}
</script>

<style lang="css" scoped>
.notification-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}
.notification-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity .5s;    
}
.notification-enter, .notification-leave-to {
  opacity: 0;
}
.notification {
  border-radius: 3px;
  color: #FFF;
  cursor: pointer;
  left: 10%;
  padding: 0.2rem 1rem 1rem 1rem;
  position: fixed;
  top: 7%;
  width: 400px;
  z-index: 99999;
}

@keyframes slide-in {
  from {
    transform: translateY(20px)
  }
  to {
    transform: translateY(0)
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(20px)
  }    
}
</style>

<template>
  <div class="container">
    <transition name="notification">
      <div
        class="notification"
        v-if="notifications.length > 0"
        @click="resetNotification">
        <h4>Notification (click to close)</h4>
        <div>
          {{ notification }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  methods: {
    resetNotification () {
      return this.$store.dispatch('utility/clearNotification')
    }
  },  
  computed: {
    notification () {
      return this.$store.getters['utility/notification']
    }
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
  cursor: pointer;
  border-radius: 10px;
  top: 5%;
  width: 400px;
  right: 10%;
  position: fixed;
  z-index: 99999;
  background: #9d1f1f;
  color: #FFF;
  padding: 0.2rem 1rem 1rem 1rem;
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


<!-- ADDED TO RAILS APP -->

<!-- <template>
  <transition name="notification">
    <div
      class="message_error"
      v-if="errors.length > 0"
      @click="resetErrors">
      <h4>Errors (click to close)</h4>
      <div
        class="error"
        v-for="(error, index) in errors"
        :key="index">
        {{ error }}
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    methods: {
      resetErrors () {
        return this.$store.dispatch('utility/clearErrors')
      }
    },
    computed: {
      errors () {
        return this.$store.getters['utility/errors']
      }
    }
  }
</script> -->
<template>
  <footer class="footer is-static">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <h3 class="subtitle">Copyright &copy; 2018 Cromon</h3>
          <p>Donate </p> 
          <p>BTC: 1EDUSn47ddNQJ9wHX8WMAomN4McQYewcoN</p>
          <p>BCH: 16EU5v9e79hVcPgPmrNQhY7cHJxQsABX35</p>
          <p>ETH: 0xfb5337BfD765fDF7501ccF1650c14af4Bd0dd887</p>
        </div>
        <div class="column">
          <h3 class="subtitle">Links</h3>
          <p><a href="" title="">FAQ</a></p>
          <p><a href="" title="">Terms</a></p>
          <p><a href="" title="">Privacy Policy</a></p>
          <p><a href="" title="">Contact</a></p>
          <p><a href="https://github.com/CromonMS/cryptolist" target="_blank" title="github"><i class="fa fa-github"></i></a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.is-static {
  bottom: 0;
  overflow: hidden;
  position: static;
  width: 100%;
}
</style>
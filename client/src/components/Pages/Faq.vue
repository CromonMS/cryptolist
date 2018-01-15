<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2>FAQs</h2>
        <div class="columns">
          <div class="column is-two-thirds">
            <div class="container">
              <h3 class="link" @click="showGeneralFaq = !showGeneralFaq">General Questions
                <i v-if="!showGeneralFaq" class="fa fa-arrow-down"></i>
                <i v-if="showGeneralFaq" class="fa fa-arrow-up"></i>
              </h3>
              <div class="container" v-if="showGeneralFaq">
                <dl>
                  <blockquote>
                    <dt><h5>Do you charge for this site?</h5></dt>
                    <dd>
                      <p>At present there is no charge to use this site. You can donate via the address at the bottom of the page or use our Faucet Links to help support us for server and development costs.</p>
                    </dd>
                  </blockquote>
                  <blockquote>
                    <dt><h5>Can I get my Coin Listed here?</h5></dt>
                    <dd>
                      <p>Sure, just contact us on the <a href="#/contact">Contact</a> page, it would be better if you were listed on Coinmarket cap or Cryptocompare as that is where a lot of the pricing data comes from.</p>
                    </dd>
                  </blockquote>
                  <blockquote>
                    <dt><h5>Can I get my Faucet Listed here?</h5></dt>
                    <dd>
                      <p>Sure, just contact us on the <a href="#/contact">Contact</a> page.</p>
                    </dd>
                  </blockquote>
                  <blockquote>
                    <dt><h5>Can I request a feature?</h5></dt>
                    <dd>
                      <p>Please raise an issue on the <a href="https://github.com/CromonMS/cryptolist/issues" target="_blank">Github</a> page of this project, and we will see what we can do.</p>
                    </dd>
                  </blockquote>
                  <blockquote>
                    <dt><h5>How do I report a bug?</h5></dt>
                    <dd>
                      <p>Please raise an issue on the <a href="https://github.com/CromonMS/cryptolist/issues" target="_blank">Github</a> page of this project.</p>
                    </dd>
                  </blockquote>
                </dl>
              </div>
              <h3 class="link" @click="showPortfolioFaq = !showPortfolioFaq">Portfolio Questions
                <i v-if="!showPortfolioFaq" class="fa fa-arrow-down"></i>
                <i v-if="showPortfolioFaq" class="fa fa-arrow-up"></i>
              </h3>
              <div class="container" v-if="showPortfolioFaq">
                <dl>
                  <blockquote>
                    <dt><h5>Why is my Portfolio total value not updating?</h5></dt>
                    <dd>
                      <p>Currently you must click refresh for the system to update your total value, this is throttled to once every 10 seconds due to API calls.</p>
                    </dd>
                  </blockquote>
                </dl>
              </div>
            </div>
          </div>
          <div class="column"></div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faq',
  data () {
    return {
      showGeneralFaq: false,
      showPortfolioFaq: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
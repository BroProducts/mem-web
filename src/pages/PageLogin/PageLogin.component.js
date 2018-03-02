import { mapState } from 'vuex'
import dialogPolyfill from 'dialog-polyfill'
import uiConfig from '@/common/firebaseUiConfig'

window.dialogPolyfill = dialogPolyfill

export default {
  name: 'page-login',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
    this.$firebaseui.start('#firebaseui-auth-container', uiConfig)
  },
  methods: {

  },
  watch: {
    'user.isAnonymous' (val) {
      if (!val) {
        if (this.$router.currentRoute.query.redirect) {
          this.$router.replace(this.$router.currentRoute.query.redirect)
        } else {
          this.$router.replace('/')
        }
      }
    }
  }
}

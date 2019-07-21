import store from '@/store/store'

function changeLocate (args) {
  store.commit('changeLocate', args)
}

export default{ changeLocate }

import { createStore } from "vuex"
import journal from '../modules/daybook/store/journal'

const store = createStore({
    module:{
        journal
    }
})

export default store
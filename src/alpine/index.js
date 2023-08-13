export default{
    register: (Alpine) => {
        // Alpine stores
        const alpineStores = require.context('./stores/', true, /\.js$/)

        alpineStores.keys().forEach((key) => {
        const store = alpineStores(key).default

        const name = store.name

        Alpine.store(name, store.store())
        })
    }
}
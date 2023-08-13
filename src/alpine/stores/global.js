export default {
    name: 'global',
    store(){
        return{
            isMobileMenuVisible: false,
            openMobileMenu(){
                this.isMobileMenuVisible = true
            },
            closeMobileMenu(){
                this.isMobileMenuVisible = false
            },
            toggleMobileMenu(){
                this.isMobileMenuVisible = !this.isMobileMenuVisible
            }
        }
    }
}
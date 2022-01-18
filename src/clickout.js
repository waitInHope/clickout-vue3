
exports = module.exports = {
    mounted(el, binding) {
        el.__vueClickOutside__ = {
            callback: binding.value
        }

        let handler = function(event) {
            if(el === event.target || el.contains(event.target)) {
                return;
            }
            el.__vueClickOutside__.callback && el.__vueClickOutside__.callback(event);
        }

        el.__vueClickOutside__.handler = handler;

        document.addEventListener('click', el.__vueClickOutside__.handler);
    },

    unmounted(el) {
        el.__vueClickOutside__ && document.removeEventListener('click', el.__vueClickOutside__.handler);
        delete el.__vueClickOutside__;
    }
}
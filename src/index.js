import Clickout from "./clickout";

const install = function(Vue) {
    Vue.directives('clickout', Clickout);
}

Clickout.install = install;

export default Clickout;
/**
 * @desc a pick plugin for vue
 */
import VueMultiplePick from './multiple-pick.jsx'
var MultiplePick = {};
MultiplePick.install = function (Vue, options) {
    var opt = {
        defaultType:'center',
        duration:'3000'
    }
    for(var property in options){
        opt[property] = options[property];
    }
    Vue.component('multiple-pick', VueMultiplePick)
}    
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(MultiplePick);
}
export default MultiplePick;
import './index.css'
export default {
 name: 'multiple-pick',
   data(){
     return {
       zonesname: 'diyicitest'
     }  
   },
   render () {
       return <div class="multiple-picker_box">
        <span>123456</span>
        <input placeholder="请输入区域名称" value={this.zonesname} />
       </div>
   }
}
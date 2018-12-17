import './index.css'
export default {
 name: 'multiple-pick',
   data(){
     return {
       zonesname: '' 
     }  
   },
   render () {
       return <div class="multiple-picker_box">
        <input placeholder="请输入区域名称" v-model="zonesname" />
       </div>
   }
}
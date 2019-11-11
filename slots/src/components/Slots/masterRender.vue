<script>
import child from './child'
export default {
  name: 'master',
  components: {
    Child: child
  },
  render: h => h('div', [
    h('Child', {
      scopedSlots: {
        default: props => h('span', 'QQ'),
        wtf: props => h('span', [' ', props.someHuman.firstName, ' ', props.someHuman.lastName])
      }
    })
  ])
}
</script>

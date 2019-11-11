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
        default: props => h('span', {
          class: {
            'text-success': true
          }
        }, 'QQ'),
        wtf: props => h('span', {
          class: {
            'text-success': true
          }
        }, [' ', props.someHuman.firstName, ' ', props.someHuman.lastName])
      }
    })
  ])
}
</script>

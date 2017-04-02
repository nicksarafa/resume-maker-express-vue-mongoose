<script>
export default {
  name: 'SelectMonth',
  template: '\
    <select name="{{ props.selectName }}" form="{{ props.selectForm }}" id="{{ props.selectId }}">\
      <option value="">Month</option>\
      <option v-for="month in months" :value="month"> {{ month }} </option>\
    </select>\
  ',
  props: {
    selectName: {
      type: String,
      required: true,
    },
    selectId: {
      type: String,
    },
    selectForm: {
      type: String,
    }
  },
  data() {
      return {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
  },
}
</script>
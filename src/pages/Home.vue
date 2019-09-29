<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-col v-for="(brandData, index) in getBrandData" :key="index" cols="12" xl="2" lg="3" md="4" sm="6" xs="12">
          <v-card @click="gotoDetail(brandData.entity_id)">
            <v-card-title>{{brandData.name}}</v-card-title>
            <v-card-text>Number of State Registrations: {{brandData.state_registrations.length}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import 'dotenv'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getBrandData')
    console.log('env', process.env.VUE_APP_DATA)
  },
  methods: {
    gotoDetail (entityId) {
      this.$router.push({ path: `/detail/${entityId}` })
    }
  },
  computed: {
    ...mapState({
      getBrandData: state => state.brandDataList
    })
  }
}
</script>

<template>
  <div class="detail">
    <v-container>
      <v-row>
        <v-col>
          <v-card cols="12" xl="3" lg="3" md="4" sm="6" xs="12">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ detailInfo.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="(state_registration, index) in detailInfo.state_registrations" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ state_registration.state }}</v-list-item-title>
                <v-list-item-subtitle>{{ state_registration.registrationNumber }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      detailInfo: {}
    }
  },
  created () {
    this.$store.dispatch('getBrandDataByID', this.$route.params.entity_id)
  },
  computed: {
    ...mapState({
      getBrandDataByID: state => state.brandDataDeatil
    })
  },
  watch: {
    getBrandDataByID (val) {
      this.detailInfo = Object.assign(
        {},
        { name: val.name },
        { state_registrations: val.state_registrations }
      )
    }
  }
}
</script>

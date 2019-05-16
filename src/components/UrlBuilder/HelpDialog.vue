<template>

  <v-dialog
  width="500"
  v-model='oppened'
  >

    <template v-slot:activator="{ on }">
      <v-icon v-on="on">help_outline</v-icon>
    </template>

    <v-card>

      <v-card-title
        class="headline grey lighten-2"
        primary-title>
        <v-layout
          row
          wrap>
          <v-flex xs11>
            {{title}}
          </v-flex>
          <v-flex xs1>
            <v-icon
              large
              @click="oppened = false">
              close
            </v-icon>
          </v-flex>
        </v-layout>
      </v-card-title>

      <v-card-text>
        <slot></slot>
      </v-card-text>

    </v-card>

  </v-dialog>

</template>

<script>
export default {
  props: [
    'title'
  ],
  data: () => ({
    oppened: false
  })
}
</script>
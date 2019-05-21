<template>
  <HelpDialog title='Marketing Medium'>

  <p class="mb-4 t-title_xxs">
    <strong>utm_medium</strong> — marketing medium: (e.g. cpc, banner, email)
  </p>
  <p class="t-text_md">
  </p>
  <p>It is recommended to use standard values in this parameter, e.g., cpc (cost per
    click) — context ad, display — banner ad, social_cpc — ad in social networks</p>
    <strong>What for:</strong>
    <p>To define the type of campaign or ad</p>
    <strong>Example:</strong>
    <ul>
      <li>utm_medium=organic – organic traffic</li>
      <li>utm_medium=cpc – context ad (cost per click)</li>
      <li>utm_medium=email — email campaign</li>
      <li>utm_medium=social — social networks</li>
      <li>utm_medium=banner — banner ad</li>
      <li>utm_medium=cpa — other ad (cost per action)</li>
    </ul>
    <p></p>

  </HelpDialog>
</template>

<script>
import HelpDialog from './HelpDialog'
export default {
  components: {
    HelpDialog
  }
}
</script>

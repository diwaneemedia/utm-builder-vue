<template>
  <HelpDialog title='The Referrer Source'>

    <p class="mb-4 t-title_xxs">
      <strong>utm_source</strong> — the referrer
    </p>
    <p class="t-text_md">
    </p>
    <p></p>
    <strong>What for:</strong>
    To indicate the referrer (e.g. google, newsletter)
    <p></p>
    <strong>Example:</strong>
    <ul>
      <li>utm_source=google – context ad in Google Adwords</li>
      <li>utm_source=facebook — context ad in Facebook</li>
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

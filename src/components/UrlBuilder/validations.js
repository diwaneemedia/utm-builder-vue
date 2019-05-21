export default {
  domain: [
    v => !!v || "This field is required",
    //v => /^[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(v) || "Not a valid domain format "
  ],
  smallMinusRequired: [
    v => !!v || "This field is required",
    v => /^[a-z\-]+$/.test(v) || "You can use only small setters and `-` characters"
  ],
  letterNumberMinusUnderscoreRequired: [
    v => !!v || "This field is required",
    v => /^[a-zA-Z0-9\-\_]+$/.test(v) || "You can use only letters, numbers and `-` characters"
  ],
  optional: [
    v => /^[a-zA-Z0-9\-\_\+\%]*$/.test(v) || "You can use only letters, numbers and `-` characters"
  ],
}
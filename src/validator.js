let validator = {
  validName: function(value) {
    const pattern = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/
    return pattern.test(value)
  }
}

export default validator

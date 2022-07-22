let validator = {
  validName: function(value) {
    const pattern = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/
    return pattern.test(value)
  },
  validSurname: function(value) {
    const patternOneSurname = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/
    const patternDoubleSurname = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+ - [A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/

    if (patternOneSurname.test(value) || patternDoubleSurname.test(value)) {
      return true
    }
  },
  validDept: function(value) {
    const pattern = /^[.A-Za-ząćęłńóśźżĆŁÓŚŹŻ -]+$/
    return pattern.test(value)
  },
  validTel: function(value) {
    const pattern = /^[. ()+0-9we]+$/
    return pattern.test(value)
  }
}

export default validator

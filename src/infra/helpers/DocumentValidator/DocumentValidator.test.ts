import { DocumentValidator } from './DocumentValidator'

describe.only('Exception handler test suite.', () => {
  test('should refuse equal digits', () => {
    expect(DocumentValidator.validateCPF('11111111111')).toBe(false)
  })

  test('should refuse lesser values', () => {
    expect(DocumentValidator.validateCPF('1111')).toBe(false)
  })
})

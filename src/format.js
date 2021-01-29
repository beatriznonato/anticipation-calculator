const format = (value) => (
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  )

export default format;

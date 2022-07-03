import is from './is'

export function getEmptyValues(values: any, required: string[] = []) {
  const emptyValues: any = {}

  Object.keys(values).forEach((field: string) => {
    const v = is.String(values[field]) ? values[field].trim() : values[field]

    if (required && required.length === 0 && (v === '' || v === null)) {
      emptyValues[field] = true
    } else if (required && required.includes(field) && (v === '' || v === null)) {
      emptyValues[field] = true
    }
  })

  return !is.EmptyObject(emptyValues) ? emptyValues : false
}

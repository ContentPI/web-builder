type Attrs = {
  ccn: string
  data: string[]
  className?: string
}

function cxGenerator({ ccn, data, className }: Attrs) {
  const classList = [ccn]

  data.forEach((key) => {
    if (key !== '') {
      classList.push(`${ccn}-${key}`)
    }
  })

  if (className) {
    classList.push(className)
  }

  return classList.join(' ')
}

export default cxGenerator

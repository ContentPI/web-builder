type DebugData = {
  _DEBUG: string
}

export function parseDebugData(data: DebugData): any {
  if (data._DEBUG) {
    return JSON.parse(data._DEBUG)
  }

  return null
}

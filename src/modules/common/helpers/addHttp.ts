export const addHttp = (url: string) => {
  if (!/^(?:f|ht)tps?:\/\//.test(url)) {
    return `http://${url}`
  }
  return url
}

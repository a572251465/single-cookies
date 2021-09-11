interface ICookieInfo {
  // eslint-disable-next-line no-unused-vars
  (cookies: string): { [keyName: string]: string }
}

const resolveCookie: ICookieInfo = (cookies) => {
  if (!cookies) {
    return {}
  }
  const resultCookies = {} as { [keyName: string]: string }
  cookies.split(';').forEach((item) => {
    const [key, value] = item.split('=')
    resultCookies[key.trim()] = value.trim()
  })
  return resultCookies
}

const settingCookie = (cookieObj: { [keyName: string]: string }): boolean => {
  if (Object.keys(cookieObj).length === 0) {
    return false
  }

  const cookieList = Object.keys(cookieObj).map((item) => {
    const key = item
    const value = cookieObj[key]
    return `${key}=${value}`
  })
  document.cookie = cookieList.join('; ')
  return true
}

const get = () => {
  const cookies: string = document.cookie
  return resolveCookie(cookies)
}

const getCookie = (key: string) => get()[key]

const deleteCookie = (key: string): boolean => {
  const cookieObj = get()
  if (!cookieObj[key]) {
    return false
  }

  Reflect.deleteProperty(cookieObj, key)
  settingCookie(cookieObj)
  return true
}

const clearCookie = () => {
  document.cookie = ''
}

const editCookie = (key: string, value: string): boolean => {
  const cookiesObj = get()
  cookiesObj[key] = value
  settingCookie(cookiesObj)
  return true
}

module.exports = {
  getCookie,
  deleteCookie,
  clearCookie,
  editCookie
}

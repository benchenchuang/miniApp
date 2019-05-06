const http = require('./httpRequest')

export const getWebSite = http.sendRequest('mini/findWebsite','GET')
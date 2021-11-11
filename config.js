module.exports = function configJSON(req) {
  return {
    workflowApiVersion: '1.1',
    metaData: {
      // the location of our icon file
      icon: 'favicon.ico',
      category: 'customer'
    },
    type: 'REST',
    lang: {
      'en-US': {
        name: 'API Sample Custom Activity',
        description: 'API SAMPLE CUSTOM ACTIVITY'
      }
    },
    arguments: {
        execute: {
            inArguments: [],
            url: "https://ensy7y4pgb5ipx9.m.pipedream.net",        
            headers: "{\"Authorization\":\"Bearer theToken\"}",
            // The amount of time we want Journey Builder to wait before cancel the request. Default is 60000, Minimal is 1000
            timeout: 10000,
            // how many retrys if the request failed with 5xx error or network error. default is 0
            retryCount: 3,
            // wait in ms between retry.
            retryDelay: 1000,
            }
    },
  configurationArguments: {
    save: {},
    publish: {},
    validate: {},
    edit: {
      uri: "https://ensy7y4pgb5ipx9.m.pipedream.net",
      height: 350,
      width: 550
    },
        }
    }
}
define([],function() {
    workflowApiVersion: "1.1",
    metaData: {
       icon: "favicon.ico",
       category: "message"
    },
    type: "REST",
    lang: {
       en-US: {
           name: "REST Activity (Workflow API v1.1)",
           description: "An example REST activity using workflow API v1.1 format."
       }
    },
    arguments: {
        execute: {
            inArguments: [],
            url: "https://ens2pfv4xtvpwxi.m.pipedream.net",        
            headers: "{\"Authorization\":\"Bearer theToken\"}"
        }
    },
    configurationArguments: {
       save: {
           url: "https://ens2pfv4xtvpwxi.m.pipedream.net/save"
       },
       publish: {
           url: "https://ens2pfv4xtvpwxi.m.pipedream.net/publish",
      
       },
       validate: {
           "url": "https://ens2pfv4xtvpwxi.m.pipedream.net/validate"
       },
       stop: {
           url: "https://ens2pfv4xtvpwxi.m.pipedream.net/stop"
       }
    },
    wizardSteps: [
       { label: "Step 1", key: "step1" },
       { label: "Step 2", key: "step2" },
       { label: "Step 3", key: "step3" },
       { label: "Step 4", key: "step4", active: false }
    ],
    userInterfaces: {
       configModal: {
           height: 200,
           width: 300,
           fullscreen: true
       }
    },
});
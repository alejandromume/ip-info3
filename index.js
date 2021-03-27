const fetch = require("node-fetch")

class getInfo {

    GetName(servercode){
        return new Promise((send, err) => {
            fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
            .then(res => res.json())
            .then((out) => {
                send(out["Data"]["hostname"]);
            })
        })
        
    }

    GetAll(servercode){
        return new Promise((send, err) => {
        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out);
                    })

                })
    }
    

    GetEndpoint(servercode){
        return new Promise((send, err) => {
        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["Data"]["connectEndPoints"][0]);
                    })

                })
    }

    GetPlayersCount(servercode){
        return new Promise((send, err) => {

        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["Data"]["players"].length);
                    })
                })
    }

    GetResourcesCount(servercode){
        return new Promise((send, err) => {

        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["Data"]["resources"].length);
                    })
                })
    }

    GetMaxPlayers(servercode){
        return new Promise((send, err) => {

        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["Data"]["svMaxclients"]);
                    })
                })
    }

    GetArtifacts(servercode){
        return new Promise((send, err) => {

        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["Data"]["server"]);
                    })
                })
    }

    GetVars(servercode){
        return new Promise((send, err) => {

        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["Data"]["vars"]);
                    })
                })
    }

    GetResources(servercode){
        return new Promise((send, err) => {

        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["Data"]["resources"]);
                    })
                })
    }

    GetGameType(servercode){
        return new Promise((send, err) => {

        fetch("https://servers-live.fivem.net/api/servers/single/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["Data"]["gametype"]);
                    })
                })
    }

    
}

class getIPInfo {
    GetAll(servercode){
        return new Promise((send, err) => {

        fetch("http://ip-api.com/json/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out);
                    })
                })
    }

    GetAS(servercode){
        return new Promise((send, err) => {

        fetch("http://ip-api.com/json/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["as"]);
                    })
                })
    }

    GetCity(servercode){
        return new Promise((send, err) => {

        fetch("http://ip-api.com/json/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["City"]);
                    })
                })
    }

    GetCountry(servercode){
        return new Promise((send, err) => {

        fetch("http://ip-api.com/json/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["country"]);
                    })
                })
    }

    GetCountryCode(servercode){
        return new Promise((send, err) => {

        fetch("http://ip-api.com/json/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["countryCode"]);
                    })
                })
    }

    GetISP(servercode){
        return new Promise((send, err) => {

        fetch("http://ip-api.com/json/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["isp"]);
                    })
                })
    }

    GetOrg(servercode){
        return new Promise((send, err) => {

        fetch("http://ip-api.com/json/"+servercode)
                    .then(res => res.json())
                    .then((out) => {
                        send(out["org"]);
                    })
                })
    }
    
}

module.exports.getInfo = getInfo;
module.exports.getIPInfo = getIPInfo;
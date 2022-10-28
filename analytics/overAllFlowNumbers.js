function lengthOfFlows (flows) {
    return flows.length;
}

function moreThan2Tenants (flows) {
    let tenants = flows.filter(flow =>{
        return flow.tenants.length > 2;
    })
    return tenants.length;
}

function toCheck (flows, val) {
    let valToCheck = flows.filter(flow => {
        return flow[val];
    })
    return valToCheck.length;
}


module.exports = {
    lengthOfFlows,
    moreThan2Tenants,
    toCheck    
}

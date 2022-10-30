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

function compareAndCheck (flows, prop, op, val) {
    let tenants = flows.filter(flow => {
        if (op === "===") {
            return flow[prop] === val;
        }
        if (op === "!==") {
            return flow[prop] !== val;
        }
        if (op === ">") {
            return flow[prop] > val;
        }
        if (op === "<") {
            return flow[prop] < val;
        }
        if (op === ">==") {
            return flow[prop] >= val;
        }
        if (op === "<==") {
            return flow[prop] <= val;
        }
    })
    return tenants.length;
}

function rentalAmount (flows) {
    let valToCheck = flows.filter(flow => {
       return flow[open_flow_rental_offer[rental_amount]] > 5000;
    })
    return valToCheck.length;
}


module.exports = {
    lengthOfFlows,
    moreThan2Tenants,
    toCheck, 
    compareAndCheck,
    rentalAmount
}

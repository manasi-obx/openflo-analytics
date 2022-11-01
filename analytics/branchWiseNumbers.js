function lengthOfFlows (flows,branchId) {
    let elementsOfBranch = flows.filter(flow => {
        return flow.branch_id === branchId;
    })
    return elementsOfBranch.length;
}

function moreThan2Tenants (flows ,branchId) {
    let tenants = flows.filter(flow =>{
        return flow.branch_id === branchId && flow.tenants.length > 2;
    })
    return tenants.length;
}

function toCheck (flows, val, branchId) {
    let valToCheck = flows.filter(flow => {
        return flow.branch_id === branchId && flow[val];
    })
    return valToCheck.length;
}

function compareAndCheck (flows, prop, op, val, branchId) {
    let tenants = flows.filter(flow => {
        if (flow.branch_id === branchId) {
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
        }
    })
    return tenants.length;
}

function rentalAmount (flows, branchId) {
    let tenants = flows.filter(flow => {
        if (flow.open_flow_rental_offer && flow.branch_id === branchId){
            return flow.open_flow_rental_offer.rental_amount > 5000;
        } else {
            return false;
        }
    })
    return tenants.length;
}

function irpRequired (flows, branchId) {
    let tenants = flows.filter(flow => {
        if (flow.open_flow_rental_offer && flow.branch_id === branchId){
            return (flow.open_flow_rental_offer.is_irp_required);
        } else {
            return false;
        }
    })
    return tenants.length;
}

function irpNotRequired (flows, branchId) {
    let tenants = flows.filter(flow => {
        if (flow.open_flow_rental_offer && flow.branch_id === branchId){
            return !flow.open_flow_rental_offer.is_irp_required;
        } else {
            return false;
        }
    })
    return tenants.length;
}

function tenantWaterResoncibility (flows, branchId) {
    let tenants = flows.filter(flow => {
        if (flow.open_flow_rental_offer && flow.branch_id === branchId){
            return flow.open_flow_rental_offer.tenant_water_responsibility === true;
        } else {
            return false;
        }
    })
    return tenants.length;
}


function agentWaterResoncibility (flows, branchId) {
    let tenants = flows.filter(flow => {
        if (flow.open_flow_rental_offer && flow.branch_id === branchId){
            return (flow.open_flow_rental_offer.tenant_water_responsibility === false);
        } else {
            return false;
        }
    })
    return tenants.length;
}

function furnishedProperty (flows, branchId) {
    let property = flows.filter(flow => {
        if (flow.open_flow_rental_offer && flow.branch_id === branchId){
            return (flow.open_flow_rental_offer.furnished);
        } else {
            return false;
        }
    })
    return property.length;
}

function certificates (flows, branchId) {
    let cartificate = flows.filter(flow =>{
        return flow.branch_id === branchId && flow.open_flow_certificates.length > 2;
    })
    return cartificate.length;
}

function average(flows, prop, val, branchId) {
    let sum = 0;
    flows.map(flow => {
        if (flow[prop] && flow.branch_id === branchId) {
            let value = flow[prop][val];
            sum += value;
        }   
    })
    let avg =  sum / flows.length
    return avg.toFixed(2)
}

function valPerFlow (flows, prop, branchId) {
    let sum =0;
        let flowsForProp = flows.filter(flow => {
            if(flow[prop] && flow.branch_id === branchId) {
                let value = flow[prop].length;
                return sum += value;
            }
        })
        let avg = sum /flows.length
        return avg.toFixed(2)
}



module.exports = {
    lengthOfFlows,
    moreThan2Tenants,
    toCheck, 
    compareAndCheck,
    rentalAmount,
    irpRequired,
    irpNotRequired,
    tenantWaterResoncibility,
    agentWaterResoncibility,
    furnishedProperty,
    certificates,
    average,
    valPerFlow
}

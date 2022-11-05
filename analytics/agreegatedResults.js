const FlowsBranchWise = require ("./branchWiseNumbers");


function branchWithFlows (flows) {
    let response = {};
    flows.forEach (flow => {
        if (response[flow.branch_id]) {
            return(response[flow.branch_id] = response[flow.branch_id] + 1);
        } else {
            return response[flow.branch_id] = 1;
        }
    })
    return response;
}

function propertyWithFlows (flows) {
    let response = {};
    flows.forEach (flow => {
        if (response[flow.property_id]) {
            return(response[flow.property_id] = response[flow.property_id] + 1);
        } else {
            return response[flow.property_id] = 1;
        }
    })
    return response;
}

function noOfFlowsWithProperties (flows, prop) {
    let branchIds = [];
    let arr = [];
  
    flows.forEach (flow => {
        if (branchIds.indexOf(flow[prop]) == -1){
            branchIds.push(flow[prop])
        }
    })

    branchIds.forEach (branchId => {
        flowsLength = FlowsBranchWise.lengthOfFlows(flows,branchId);
        flowsDeleted = FlowsBranchWise.toCheck(flows,"is_deleted",branchId); 
        flowsCompleted = FlowsBranchWise.toCheck(flows,"is_completed",branchId); 
        flowsArchived = FlowsBranchWise.toCheck(flows,"is_archived",branchId);
        reapit = FlowsBranchWise.toCheck(flows,"reapit_tenancy_id",branchId);
        arr.push({
            id : branchId,
            lengthOfFlows : flowsLength,
            deletedFlows : flowsDeleted,
            completedFlows : flowsCompleted,
            archivedFlows : flowsArchived,
            reapit : reapit
        })     
    })
    return arr;
}

function branchWithMaxFlows (flows,bID,prop) {
    let branches = noOfFlowsWithProperties(flows,bID);
    branches.sort((a, b) => a[prop] - b[prop]);
    branches = branches[branches.length - 1];
    const branch = {
        'branchId' : branches.id,
        'flows' : branches[prop]
    }
    return branch;
}

function maxFlowsInCurrentMonth (flows, bID) {
   let noOfFlows = noOfFlowsWithProperties(flows, bID); 
   let noOfFlowsInMonth = noOfFlows.map (ids => {
   let currentMonthFlows = FlowsBranchWise.flowInCurrentMonth(flows,"createdAt",ids.id);
   const branch = {
    'branchId' : ids.id,
    'currentMonthFlows' : currentMonthFlows
   }
   return branch;
   });
   noOfFlowsInMonth.sort((a, b) => a.currentMonthFlows - b.currentMonthFlows);
   noOfFlowsInMonth = noOfFlowsInMonth[noOfFlowsInMonth.length - 1];
   return noOfFlowsInMonth;
}

function astContractUrl(flows) {
    let astUrl = flows.map(flow => {
        return flow.ast_contract_url
    })
    let url = astUrl.filter(url => {
        return url;
    })  
    return url
}

function nhaContractUrl(flows) {
    let nhaUrl = flows.map(flow => {
        return flow.nha_contract_url
    })
    let url = nhaUrl.filter(url => {
        return url; 
    })  
    return url
}





module.exports = {
    branchWithFlows,
    propertyWithFlows,
    noOfFlowsWithProperties,
    branchWithMaxFlows,
    maxFlowsInCurrentMonth,
    astContractUrl,
    nhaContractUrl
}
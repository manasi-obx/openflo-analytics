const flowNumbers = require ("./analytics/agreegatedResults");
const flows = require("./flows");

let output = flowNumbers.branchWithFlows (flows.flows);
console.log ("branches with their flows: ", output);

output = flowNumbers.noOfFlowsWithProperties (flows.flows , "branch_id");
console.log ("branches with deleted flows: ", output);

output = flowNumbers.noOfFlowsWithProperties (flows.flows, "property_id");
console.log ("properties with deleted flows: ", output);

output = flowNumbers.branchWithMaxFlows (flows.flows,"branch_id","lengthOfFlows");
console.log ("branch with max flows: ", output);

output = flowNumbers.branchWithMaxFlows(flows.flows,"branch_id","deletedFlows");
console.log ("branch with max deleted flows: ", output);

output = flowNumbers.branchWithMaxFlows (flows.flows,"branch_id","completedFlows");
console.log ("branch with max completed flows: ", output);

output = flowNumbers.branchWithMaxFlows (flows.flows,"branch_id","archivedFlows");
console.log ("branch with max archived flows: ", output);

output = flowNumbers.maxFlowsInCurrentMonth (flows.flows,"branch_id");
console.log ("branch id with maximum number of flows in current month: ", output);

output = flowNumbers.propertyWithFlows (flows.flows);
console.log ("properties with their flows: ", output);






const flowNumbers = require ("./analytics/overAllFlowNumbers");
const flows = require("./flows");

let length = flowNumbers.lengthOfFlows(flows.flows);
console.log ("length of flows: ",length);

let flowsWithmoreThan2Tenants = flowNumbers.moreThan2Tenants(flows.flows);
console.log ("flows with more than 2 tenants: ", flowsWithmoreThan2Tenants);

let val = flowNumbers.toCheck(flows.flows,"is_deleted");
console.log ("number of deleted flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_completed");
console.log ("number of completed flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_archived");
console.log ("number of archived flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_ast_generated");
console.log ("number of ast generated flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_nha_generated");
console.log ("number of nha generated flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_flow_used");
console.log ("number of flows used: ", val);

val = flowNumbers.toCheck(flows.flows,"reapit_tenancy_id");
console.log ("number of flows created from reapit: ", val);

val = flowNumbers.toCheck(flows.flows,"is_added_to_property");
console.log ("number of flows added to proparty: ", val);




























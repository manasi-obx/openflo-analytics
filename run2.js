const flowNumbers = require ("./analytics/branchWiseNumbers");
const flows = require("./flows");

let length = flowNumbers.lengthOfFlows(flows.flows, 2);
console.log ("length of flows: ",length);

let val = flowNumbers.toCheck(flows.flows,"is_deleted", 2);
console.log ("number of deleted flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_completed", 2);
console.log ("number of completed flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_archived", 2);
console.log ("number of archived flows: ", val);

val = flowNumbers.moreThan2Tenants(flows.flows, 2);
console.log ("number of flows with more than 2 tenants: ", val);

val = flowNumbers.toCheck(flows.flows,"is_ast_generated",2);
console.log ("number of ast generated flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_nha_generated", 2);
console.log ("number of nha generated flows: ", val);

val = flowNumbers.toCheck(flows.flows,"is_flow_used", 2);
console.log ("number of flows used: ", val);

val = flowNumbers.toCheck(flows.flows,"reapit_tenancy_id", 2);
console.log ("number of flows created from reapit: ", val);

val = flowNumbers.toCheck(flows.flows,"is_added_to_property", 2);
console.log ("number of flows added to proparty: ", val);

val = flowNumbers.compareAndCheck(flows.flows, "landlord_id", "===", null, 2);
console.log ("number of flows where landlords are empty : ", val);

val = flowNumbers.compareAndCheck(flows.flows, "is_ast_signed", "!==", false, 2);
console.log ("number of flows where ast is generated and its signed : ", val);

val = flowNumbers.compareAndCheck(flows.flows, "is_ast_signed", "===", false, 2);
console.log ("number of flows where ast is generated and its not signed : ", val);

val = flowNumbers.rentalAmount (flows.flows, 2);
console.log ("number of flows where rental amount is greater than 5000 : ", val);

val = flowNumbers.irpRequired (flows.flows, 2);
console.log ("number of flows where IRP is required: ", val);

val = flowNumbers.irpNotRequired (flows.flows, 2);
console.log ("number of flows where IRP is not required: ", val);

val = flowNumbers.tenantWaterResoncibility (flows.flows, 2);
console.log ("number of flows where tenant has the water responsibility: ", val);

val = flowNumbers.agentWaterResoncibility (flows.flows, 2);
console.log ("number of flows where agent has the water responsibility: ", val);

val = flowNumbers.furnishedProperty (flows.flows, 2);
console.log ("number of flows with furnished property: ", val);

val = flowNumbers.certificates (flows.flows, 2);
console.log ("number of flows where number of certificates is greater than 2: ", val);

val = flowNumbers.average(flows.flows, "open_flow_rental_offer", "rental_amount", 2);
console.log ("average rental amount per flow: ", val);

val = flowNumbers.average(flows.flows, "open_flow_holding_deposit", "holding_desposit_amount", 2);
console.log ("average holding deposit per flow: ", val);

val = flowNumbers.valPerFlow(flows.flows, "open_flow_certificates", 2);
console.log ("number of certificates per flow: ", val);

val = flowNumbers.valPerFlow(flows.flows, "tenants", 2);
console.log ("number of tenants per flow: ", val);






























































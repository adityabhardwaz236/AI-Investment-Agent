function RiskBadge({ risk }) {

let color = "text-yellow-400";

if (risk === "Low")
    color = "text-green-400";

if (risk === "High")
    color = "text-red-400";

return(

<div className="glass rounded-3xl p-8">

<h2 className="text-gray-400">

Risk

</h2>

<h1 className={`text-4xl font-bold mt-3 ${color}`}>

{risk}

</h1>

</div>

);

}

export default RiskBadge;
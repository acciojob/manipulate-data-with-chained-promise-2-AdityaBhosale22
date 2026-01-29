const output = document.getElementById("output");

function magic(){
	const data = [1,2,3,4];
	new Promise((resolve)=>{
		setTimeout(()=>{
			const filtered = data.filter(num => num % 2 === 0);
			output.innerText = filtered.join(",");
			resolve(filtered);
		},1000)
	})
	.then((filteredData)=>{
		return new Promise((resolve)=>{
			setTimeout(() => {
                const multiplied = filteredData.map(num => num * 2);
                output.innerText = multiplied.join(","); 
                resolve(multiplied);
            }, 2000);
		})
	})
}
magic();
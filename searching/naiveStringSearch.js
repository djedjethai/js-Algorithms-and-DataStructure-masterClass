const str = 'fsdogooommggmgkjdog'

const target = 'omg'

function run(s, t){
	
	let count = 0

	for(let i=0; i < s.length; i++){
		if(s[i] === t[0]){
			let ref = i + 1
			let refTar = 0
			for(let y=1; y < t.length; y++){
				if(s[ref] === t[y]){
					ref++
					refTar++
				}
				if(refTar === t.length - 1) count++
			}	
		}
	}

	return count
}

console.log(run(str, target))


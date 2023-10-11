
let foods={
	
	food:["mutton","chicken","periyani","pizza","burger","idly","poori"],
	
	price:[250,200,150,100,70,50,60],
	
	time:[45,30,20,15,20,10,10]

}

    foodorder=true;

function ans(ms){

    return new Promise((resolve,reject)=>{
	
	if(foodorder){
		
		setTimeout(resolve,ms)
		
	}
    
    else{
		
		reject(document.write("shop is closed"))
		
	}    
	
})

}

async function great(){
	
	try{
		
		await ans(1000)
		
		document.write(`${foods.food[3]} was selected`);
		
		document.write("<br>")
		
		await ans(2000)
		
		document.write("Production started");
		
		document.write("<br>")
		
		await ans(3000)
		
		document.write(`Preparing a time is ${foods.time[3]} mins`);
		
		document.write("<br>")
		
		await ans(2000)
		
		document.write(`your food is ${foods.food[3]} and price is ${foods.price[3]}`);
		
		document.write("<br>")
		
		await ans(2000)
		
		document.write("Dilevery your food ");
		
	}
	catch(err){
		
		setTimeout(()=>{
			
		    document.write("Custermer left");	
			
		},1000)
		
	}
	
} 
great()
//your JS code here. If required.
function daysOfAYear(value){
		let year =parseInt(value);
		let days ="";
			if((year%4==0||year%400==0)&&year%100!=0){
				days=366
			}else{
					days=365
			}
		return days
}

var count=localStorage.getItem('counts');
var count1=localStorage.getItem('counts1');
var count2=localStorage.getItem('counts2');
	if(!count){
		count=0;
	}
	if(!count1){
		count1=0;
	}
	if(!count2){
		count2=0;
	}
	function like()
	{
		localStorage.setItem('counts',++count);
		document.getElementById('likeCount').innerHTML=count;

	}
	function like1()
	{
		localStorage.setItem('counts1',++count1);
		document.getElementById('likeCount1').innerHTML=count1;

	}
	function like2()
	{
		localStorage.setItem('counts2',++count2);
		document.getElementById('likeCount2').innerHTML=count2;

	}
/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
var result=0;

	for(var i=0; i<preferences.length;++i)
{
if(preferences[i]!=-1){
	
var first_loves=preferences[i];
var second_loves=preferences[first_loves-1];
var third_loves=preferences[second_loves-1];
if((first_loves!=second_loves)&&
(second_loves!=third_loves)&&
(third_loves!=first_loves)&&
(third_loves==i+1))
{
++result;
preferences[first_loves-1]=-1;
preferences[second_loves-1]=-1;
preferences[third_loves-1]=-1;
}

}
}
return result;
	


  
  
};


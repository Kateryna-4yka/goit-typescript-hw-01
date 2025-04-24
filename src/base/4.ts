export default  function showMessage(message: string) : void {
    console.log(message);
  }
  showMessage('The new verse was shared, Like a glass of papal milk.'); 
  
  function calc(num1:number, num2:number) :number {
    return num1 + num2;
  }
  
  console.log(calc (30, 3));
  
  function customError() :never {
    throw new Error('Error');
  }
  
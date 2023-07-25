// initial value
export const initialState={
    basket:[],

};
// Selector for total price using REDUCE() function, it will take all item's price and sum them, initialy it set to 0.
export const getBasketTotal = (basket)=>
basket?.reduce((amount,item)=>item.price + amount, 0);

// Here is reducer
const reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (basketItem)=> basketItem.id === action.id
                );
                let newBasket = [...state.basket];

                if(index >= 0){
                    newBasket.splice(index, 1);
                }else{
                    console.warn(`Can not remove product (id: ${action.id}) as its not in basket`)
                }
                return{
                    ...state,
                    basket: newBasket,
                }
        default:
            return state
    }
}
export default reducer;
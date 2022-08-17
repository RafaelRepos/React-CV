const INITIAL_STATE = {   showEducation: true }  
const showEducationReducer = (state = INITIAL_STATE, action) => {    
    switch (action.type) {       case "Education":           
    return {...state, showEducation: true}       
    case "Experience":         
    return {...state,showEducation:false}                
    default:           return state;   
}  }  
    
    
    export default showEducationReducer;
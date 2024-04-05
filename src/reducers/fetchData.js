import Axios from "axios";
let response;
const handleSubmit = async () => {
   try {
      response = await Axios.get('http://localhost:5000/api/auth');
      console.log(response +"****************")
   } catch (error) {
      console.error("Error occurred while submitting form:", error);
   }
};

handleSubmit();

const initialState = 10;
const changeTheNumber = (state = initialState, action) => {
   switch (action.type) {
      case "INCREAMENT": return state + 1;
      case "DECREAMENT": return state - 1;
      // case "USERDATA": return;
      default: return state;
   }
}

export default changeTheNumber;
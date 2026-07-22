// here we create a new request handler for a GET request
const healthCheck = async (req, res) => {
    // when the user accesses this endpoint/path, it returns a response with code 200
  return res.status(200).json({ message: "App running!" });
};
//here we create a new request handler for a POST request
const greet = async (req, res) => {
    // we assign the data in the request body to a variable called "name"
    const { name } = req.body; 
    //and we return a greeting to the user, using the variable , when they navigate to this endpoint
    return res.status(200).json({ message: `Hello, ${name}!` }); //  when calling variable in line, use ` backticks ` (next to the 1 on your keyboard)
};

const message = async (req, res) => {
    try
    {
        //here we grab both inputs from the body of the request
        const { recipient, message } = req.body;
        
        // first rule of validation - check if its blank
        if(!recipient || !message) {
            return res.status(400).json({ message: "Please enter all required fields" });
        }

        // then validate the content
        if(recipient.length > 20) {
            return res.status(400).json({ message: "Please enter a shorter name" });
        }

        if(message.length < 20 || message.length > 200) {
            return res.status(400).json({ message: "Enter a message longer than 20 characters, but less than 200" });
        }

        return res.status(200).json({ message: `${message} sent to ${recipient}` });
    }
    catch (error) {
        return res.status(500).json({ message: "An unexpected error occurred" });
    }
    
};

module.exports = { 
    healthCheck, 
    greet,
    message
};
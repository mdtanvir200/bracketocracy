const Role = require("../models/roles");

// Create a new role
const API = {
  createRole: async (req, res) => {
    // try {
    //   const {name} =req.body;
    //   if(!name)
    //   {
    //     return res.status(400).json({ error: 'Name  is required' });
    //   }
    //   const result =  new Role({name});
       
    //   const savedRole = await result.save();
       
    //   res.status(201).json(savedRole);
    try {
        const {name} = req.body;
        if (!name) {
         
          return res.status(400).json({ error: 'Name  is required' });

        }
        
        const role = new Role( {name} );
        const result = await role.save();
        res.status(201).json({ message: 'role created successfully', data: result });
      }    
      catch (error) {
      res
        .status(500)
        .json({ message: "Error creating role", error: error.message });
    }
  },

  // Get all roles
  getRoles: async (req, res) => {
    try {
      const rolesList = await roles.find().exec();
      res.json(rolesList);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error fetching roles", error: error.message });
    }
  },

  // Get a role by ID
  getRoleById: async (req, res) => {
    try {
      const id = req.params.id;
      const role = await roles.findById(id).exec();
      if (!role) {
        res.status(404).json({ message: "Role not found" });
      } else {
        res.json(role);
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching role", error: error.message });
    }
  },
};

module.exports = API;
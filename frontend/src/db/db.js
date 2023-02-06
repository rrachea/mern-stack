// i create this try out oni

import mongoose from "mongoose";

const database = new mongoose.Schema({
    goal: String,
    
  });
  
  const allgoals = mongoose.model('goals', yourSchema);
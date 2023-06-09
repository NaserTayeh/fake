const express = require("express");
const router = express.Router();
const traineeController = require("../controllers/trainee_controller");
const userController = require("../controllers/gym_controller");
const personContrller = require("../controllers/person_controller");
const skillController = require("../controllers/skill_controller");
const coachController = require("../controllers/coach_controller");
const adminController = require("../controllers/admin_controller");
const uploadtraineeController = require("../controllers/upload_trainee_controller");
const uploadrecipeController = require("../controllers/upload_recipe_controller");
const recipeController = require("../controllers/recipe_controller");
const nutritionController = require("../controllers/nutrition_controller");

router.post("/api/person/setpass", personContrller.setpass); //Forget Password API set password if Email true //ForgetPass
router.post("/api/updatePerson/", personContrller.updatePersonData); // Update person Data

router.post("/api/trainee", traineeController.getData); //sign in trinee based on email and pass if true give 1 result //sign in
router.post("/api/addtrainee", traineeController.addtrainee); //here we add the trainee data after calling get_person_id Api
router.post(
  "/api/traineephoto/:folderName",
  uploadtraineeController.uploadFile
); //uploading the trainee personal photo
router.get("/api/viewtraineephoto/");

router.post("/api/addperson", personContrller.addPerson); //adding a person when sign in click we call this api
router.post("/api/get_person_id", personContrller.get_person_id); //return the person id form the table after adding a person based on email
router.post("/api/setpass", personContrller.setpass); //Used to chage the password for the person
router.get("/api/get_person_id_admin", personContrller.get_person_id_admin); //return the Id Based on the Email and passwod so admin sec

router.get("/api/get_skills_lists", skillController.skillslist); //this retrive all the skills list's to show them in the admin page
router.post("/api/Add_skill_list", skillController.addskilllist); //this is for adding the Skill's list for the coach after adding coach

router.post("/api/addcoach", coachController.addcoach); //to add a new coach by the Admin in the dashbord
router.post("/api/signtrainee", traineeController.Sign_trainee);

router.post("/api/uploadrecipe/:folderName", uploadrecipeController.uploadFile); //uploading recipe imgae
router.post("/api/get_recipes", recipeController.getAllData); //get recipe  data
router.post(
  "/api/uploadAllRecipeInfo/:folderName",
  recipeController.uploadRecipeData
); //get recipe  data
router.post("/api/deleteRecipe", recipeController.deleteRecipe); //delete recipe  according to recipe_id
router.post(
  "/api/updateRecipeInfo/:folderName",
  recipeController.updateRecipeData
); //update  recipeInformation  according to recipe_id

router.get("/api/adminid", adminController.adminid); //Chceking the id of the admin to auth that user is Admin
router.post("/api/addtrainee_id", traineeController.addtrainee_id_from_person);

router.get("/gym", userController.getAllData);
router.post("/addgym", userController.addGym);
router.post("/deletegym", userController.deleteGym);

// Nutrition Plan Section
router.post("/api/addNutrition", nutritionController.addNutrition); // Add nutritop
router.post("/api/deleteNutrition", nutritionController.deleteNutrition); // delete nutrition
router.post("/api/updateNutrition", nutritionController.updateNutrition); // delete nutrition
router.post("/api/getNutrition", nutritionController.getNutrition); // delete nutrition

module.exports = router;

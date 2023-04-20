const express = require("express");
const router = express.Router();

const {
    getAllRegisters,
    postCreateRegister,
    putUpdateRegister,
    deleteRegister,
}= require("../controller/Register");

/**
 * @route GET api/register
 * @description get all registers
 * @access public
 */
router.get("/", getAllRegisters);

/**
 * @route POST api/register
 * @description create register
 * @access public
 */
router.post("/", postCreateRegister);

/**
 * @route PUT api/register/:id
 * @description update register
 * @access public
 */
router.put("/:id", putUpdateRegister);

/**
 * @route DELETE api/register/:id
 * @description delete register
 * @access public
 */
router.delete("/:id", deleteRegister);

module.exports = router;
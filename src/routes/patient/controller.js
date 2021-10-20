const { prisma, appointment } = require("../../utils/db")

const addPatient = async (req, res) => {
    try{
        const createPatient = await prisma.patient.create({
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                dateOfBirth: new Date(
                    req.body.dateOfBirth
                )
            },
            include: {
                appointment: appointment
            }
        })
        res.json({ data: createPatient })
        console.log(createPatient)
    }
    catch(error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

module.exports = { addPatient }
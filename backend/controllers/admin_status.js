import BoxModal from "../models/BoxModal.js";

const adminStatus = async (req, res) => {
    try {
        const { id, status } = req.body;

        let updatedUser;

        if (status === "APPROVED") {
            updatedUser = await BoxModal.findByIdAndUpdate(id, { status: "APPROVED" }, { new: true });
        } else if (status === "REJECTED") {
            updatedUser = await BoxModal.findByIdAndUpdate(id, { status: "REJECTED" }, { new: true });
        } else {
            return res.status(400).json({ message: "Invalid status provided" });
        }

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating user status");
    }
};


export default adminStatus;

import BoxModal from "../models/BoxModal.js";

const admin = async (req, res) => {
    try 
    {
        const pendingRecords = await BoxModal.find({ status: "PENDING" });
        console.log(pendingRecords);
        return res.status(200).json({ data: pendingRecords });
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).send("Error fetching pending records");
    }
}



export default admin;
import Tour from "../models/Tour.js"

export const creteTour = async(req,res)=>{

   const newTour = new Tour(req.body);
   
   try{
        const savedTour = await newTour.save();

        res
        .status(200)
        .json({
            success:true,
            message : "created",
            data:savedTour,
        });
   }
   catch(err){
    res
    .status(500)
    .json({
        success:false,
        message : "failed to created",
    });
   }
}
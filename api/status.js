const {getToyyibPayConfig}=require('./toyyibpay/config');

module.exports=async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  try{
    const cfg=getToyyibPayConfig();
    return res.status(200).json({ok:true,toyyibpayConfigured:true,mode:cfg.mode});
  }catch(e){
    return res.status(500).json({ok:false,toyyibpayConfigured:false,mode:String(process.env.TOYYIBPAY_MODE||'sandbox').toLowerCase(),error:e&&e.message?e.message:String(e)});
  }
};

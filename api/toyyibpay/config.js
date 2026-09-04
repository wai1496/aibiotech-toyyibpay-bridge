function getToyyibPayConfig(){
  const mode=String(process.env.TOYYIBPAY_MODE||'sandbox').trim().toLowerCase();
  if(mode!=='sandbox'&&mode!=='live')throw new Error('TOYYIBPAY_MODE must be sandbox or live');
  const sandbox=mode==='sandbox';
  const secretKey=sandbox
    ? process.env.TOYYIBPAY_SANDBOX_SECRET_KEY
    : (process.env.TOYYIBPAY_LIVE_SECRET_KEY||process.env.TOYYIBPAY_SECRET_KEY);
  if(!secretKey)throw new Error('ToyyibPay '+mode+' secret is not configured');
  const categoryCode=sandbox
    ? (process.env.TOYYIBPAY_SANDBOX_CATEGORY_CODE||process.env.TOYYIBPAY_CATEGORY_CODE||'')
    : (process.env.TOYYIBPAY_LIVE_CATEGORY_CODE||process.env.TOYYIBPAY_CATEGORY_CODE||'');
  return {
    mode,
    secretKey,
    categoryCode,
    baseUrl:sandbox?'https://dev.toyyibpay.com':'https://toyyibpay.com'
  };
}
module.exports={getToyyibPayConfig};

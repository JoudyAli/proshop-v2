const asyncHandler=fn=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next);
// It uses asyncHandler to handle asynchronous operations and errors gracefully.
};

export default asyncHandler;
// It exports the router to be used in the main application.
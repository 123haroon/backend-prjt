class ApiError extends Error { 
  constructor(
    statusCode,
    message = 'Something went Wrong',
    errors = [],
    stack = ''
  ) {
    super(message); // ✅ parent Error class ka constructor call
    this.statusCode = statusCode; // HTTP status code e.g. 400, 404
    this.data = null;             // future use ke liye (jab data bhejna ho)
    this.message = message;       // custom error message
    this.success = false;         // hamesha false, kyunki ye error response hai
    this.errors =errors;   
    
    // stack trace error ka line-by-line trace show krta hai
    if (stack) {
      this.stack = stack; // agar manually stack diya gaya hai to use set kar lo
    } else {
      Error.captureStackTrace(this, this.constructor); 
      // 👆 ye automatically stack trace capture krta hai
      // jisse pata chalta hai error kis file aur kis line se aaya
    }
  }
}
export {ApiError}

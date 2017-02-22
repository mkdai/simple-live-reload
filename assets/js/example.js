/** 
 * now available in main.js but will not be attached to window
 * also even if only exporting one function, rest of file no longer available in window
 * uncomment to see what i mean
 */
// export function hi(a) {
//   console.log(a);
// };

/** 
 * not exporting so not available in main.js
 * but this is now available in the window so can play with from console
 */
function otherHi(a) {
  console.log(a)
};
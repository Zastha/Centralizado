const tokenizer = require('./tokenizer.js');
const parser = require('./parser')
module.exports = function compiler(input) {

  // 1. Lexical Analysis
  const tokens = tokenizer(input);
  const lispAST = pasrser(tokens);
  // 2. Syntactic Analysis
  // 3. Transformation
  // 4. Code Generation
  //
 return lispAST;
}
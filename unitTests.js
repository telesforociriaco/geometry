function describe(name, cb){
  try{
    cb();
    console.log(`${name} passed.`);
  } catch(e) {
    console.error(`${name} failed:`, e);
  }
}
function it(description, cb){
  cb();
}

function _toBe(val1, val2){
  if(val1 !== val2) throw new Error(`${val1} should be equal to ${val2}`);
}

function _notToBe(val1, val2){
  if(val1 === val2) throw new Error(`${val1} should not be equal to ${val2}`);
}

function expect(val1){
  return {
    toBe: function(val2){
      return _toBe(val1, val2);
    },
    notToBe: function(val2){
      return _notToBe(val2);
    }
  }
}

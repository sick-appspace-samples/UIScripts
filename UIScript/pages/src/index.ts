// Define an Object
class FunctionObject {

  // define function in object
  press() {
    alert("Alert from typescript script file");
  }
}

// Publish Object
window.FunctionObject = new FunctionObject();
self.onmessage = function (event) {
  console.log("Worker received:", event.data);

  switch (event.data) {
    case "FAVOR": {
      self.postMessage("Sure, I can help");
      break;
    }
    case "HELLO": {
      self.postMessage("HELLO");
      break;
    }
    case "CLOSE": {
      self.postMessage("Okay, I’ll close it");
      self.close();
      break;
    }
    default:
      self.postMessage("I didn’t understand");
  }
};

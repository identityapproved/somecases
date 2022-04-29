const func = (x) => {
  switch (isNaN(x) || x) {
    case null: {
      console.log(1);
      break;
    }
    case undefined: {
      console.log(1);
    }
    case NaN: {
      console.log(1);
      return;
    }
    case false: {
      console.log(1);
    }
    case true: {
      console.log(1);
    }
    default:
      break;
  }
};

func();

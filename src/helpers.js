export const errorHelper = (err, setIsError, setErrorMessage) => {
  setIsError(true);
  switch (err.response.status) {
    case 400:
      setErrorMessage(
        "Couldn't find anything with this request! Please try again."
      );
      break;
  }
};

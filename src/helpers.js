export const errorHelper = (err, setIsError, setErrorMessage, setIsSuccess) => {
  setIsError(true);
  setIsSuccess(false);
  if (typeof err === 'string') {
    setErrorMessage(err);
    return null;
  }
  switch (err.response.status) {
    case 400:
      setErrorMessage(
        "Couldn't find anything with this request! Please try again."
      );
      break;
    case 401:
      setErrorMessage('Technical difficulties. Please try again later');
      break;
    default:
      setErrorMessage('Please try again later');
      break;
  }
};

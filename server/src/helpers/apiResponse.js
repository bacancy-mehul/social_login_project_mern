const httpError = (res, error) => {
  switch (typeof error) {
    case "string":
      return res.status(400).json({ errors: [{ message: error.message }] });

    case "object":
      return res.status(422).json({
        errors: error,
      });
    default:
      return res
        .status(500)
        .json({ errors: [{ message: "Internal Server Error" }] });
  }
};

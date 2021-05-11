const value_Regex = {
  valueWithoutNumberSymbol: /^[/ +/A-Za-z]+$/,
  valueWithoutNumberSymbolWithoutSpace: /^[A-Za-z]+$/,
  valueWithOutSymbols: /^[ A-Za-z0-9]/,
  valueOnlyNumber: /^[0-9]/,
  valueOfMobileNumber: '',
  valueOfEmail: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
  valueOfAddress: /^[A-Za-z0-9'\.\-\/\s\,]/,
  valueWithOutSymbolsWithoutSpace: /^[A-Za-z0-9]/,
};

exports.value_Without_Number_Symbols = (val) => {
  const valRegex = value_Regex.valueWithoutNumberSymbol;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};

exports.value_Without_Number_Without_Symbols_Without_Space = (val) => {
  const valRegex = value_Regex.valueWithoutNumberSymbolWithoutSpace;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};

exports.value_Without_Symbols = (val) => {
  const valRegex = value_Regex.valueWithOutSymbols;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};

exports.value_Without_Symbols_Without_Space = (val) => {
  const valRegex = value_Regex.valueWithOutSymbolsWithoutSpace;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};

exports.value_Without_Number_Without_Symbols_Without_Space = (val) => {
  const valRegex = value_Regex.valueWithoutNumberSymbolWithoutSpace;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};
exports.value_Only_Number = (val) =>{
  const valRegex = value_Regex.valueOnlyNumber;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};

exports.value_Of_Mobile_Number = (val) => {
  const valRegex = value_Regex.valueOfMobileNumber;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};

exports.value_Of_Email_ID = (val) => {
  const valRegex = value_Regex.valueOfEmail;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};

exports.value_Of_Address = (val) => {
  const valRegex = value_Regex.valueOfAddress;
  const value = val || window.event;
  if (!valRegex.test(value.key)) {
    val.preventDefault();
  }
};

exports.isNull = (field) => {
  return (
    typeof field === "undefined" ||
    field === undefined ||
    field === "" ||
    field === "" ||
    field === null
  );
}

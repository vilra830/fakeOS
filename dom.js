//create an element
export const createElement = (
  elementType,
  value = "",
  parent,
  classList = ""
) => {
  const element = document.createElement(elementType);
  element.innerText = value;
  element.classList = classList;
  parent.appendChild(element);
};

export const createImage = (value, parent, classList = "") => {
  const element = document.createElement("img");
  element.src = value;
  element.classList = classList;
  parent.appendChild(element);
};

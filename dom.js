//create an element
export const createElement = (elementType, value, parent, classList) => {
  elementType.innerText = value;
  elementType.classList = classList;
  parent.appendChild(elementType);
};

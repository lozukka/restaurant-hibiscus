export function renderMenu() {
  const contentArea = document.getElementById("content");
  contentArea.textContent = "";

  contentArea.innerHTML = `
    <h1>Menu</h1>
    <ul>
    <li>Coffee $3</li>
    <li>Biscuit $1</li>
    <li>Afternoon tea and snacks $5</li>
    </ul>
    `;
}

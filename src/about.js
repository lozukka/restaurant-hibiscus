const contentArea = document.getElementById("content");

export function renderAbout() {
  contentArea.textContent = "";
  const description = document.createElement("div");
  description.id = "description";
  description.innerHTML = `
    <h1>Restaurant Hibiscus</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
    maiores, deleniti repudiandae ipsam laboriosam consectetur quae in
    quia temporibus nihil nemo officiis autem tenetur cumque incidunt
    eligendi. Impedit, a dolorem?</p>
    `;
  contentArea.appendChild(description);
}

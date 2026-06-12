export function renderHome() {
  const contentArea = document.getElementById("content");

  contentArea.innerHTML = `
  <div id="description">
  <h1>Restaurant Hibiscus</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
    maiores, deleniti repudiandae ipsam laboriosam consectetur quae in
    quia temporibus nihil nemo officiis autem tenetur cumque incidunt
    eligendi. Impedit, a dolorem?</p>
  </div>
  <div id="open-hours">
  <h2>Open</h2>
  <ul>
    <li>Monday: 10-16</li>
    <li>Tuesday: 10-16</li>
    <li>Wednesday: 10-20</li>
    <li>Thursday: 10-16</li>
    <li>Friday: 12-20</li>
    <li>Saturday & Sunday: 12-21</li>
  </ul>
  </div>
  <div id="location">
  <h2>Address</h2>
  <p>Main Street 123</p>
  </div>
  `;
}

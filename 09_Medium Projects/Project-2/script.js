const td = document.querySelector('.table')

window.addEventListener('keyup',(e)=>{
    td.innerHTML = `
    <div class = "tds">
  <table>
  <thead>
    <tr>
      <th>Key</th>
      <th>keycode</th>
      <th>Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key == ' '? `Space`: e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </tbody>
</table>
    </div>
`
})

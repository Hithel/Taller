export function modalModificar(){

    let body = document.querySelector("body")
    let div = document.createElement("div")

    div.setAttribute("class", "modal fade");
    div.setAttribute("id","modalModificar");
    div.setAttribute("tabindex","-1");
    div.setAttribute("aria-labelledby","exampleModalLabel");
    div.setAttribute("aria-hidden","true");

    div.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
    `;

    body.appendChild(div);
}
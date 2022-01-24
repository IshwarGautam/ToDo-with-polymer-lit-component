import {LitElement, html, css} from 'lit-element';

class TodoApp extends LitElement{

  static get styles(){
    // Styling Add button
    return css`
      .container .btn{
        width: 50px;
        height: 25px;
        font-size: 20px;
        cursor:pointer;
        float:right;
        margin-top: -25px;
      }
  `;
  }
  render(){
    return html`
    <div class="container">
      <input type="button" value="Add" id="btnClick" class="btn" @click="${this.addData}"/>
    </div>
    `;
  } 

  constructor(){
    super();
    
    // implementation of remove button
    // when X is clicked, the list will get removed
    let btn = document.querySelector('ul');
    btn.addEventListener('click', function(e){
      let box = document.getElementById('box');
      let li = e.target.parentNode;
      box.removeChild(li);
    })
  }

  addData(){
    //No error message by default
    document.getElementById('error').innerHTML = "";

    // Get name from input text field
    let name = document.getElementById('name').value;

    // check if the text field is empty or not
    if (name === ''){
      // display message
      document.getElementById('error').innerHTML = "Please enter data";
    }
    else{
      let box = document.getElementById('box');

      let li = document.createElement('li');
      li.textContent = name; //Get user input

      let a = document.createElement('a');
      a.textContent = "X"; //create remove icon
      a.href = "javascript:void(0)";
      a.className = "remove";
      li.appendChild(a);

      let pos = box.firstElementChild; //get the position of first element child

      if (pos === null){
        box.appendChild(li); // when first list will be added
      }
      else{
        box.insertBefore(li, pos); // insert new list (TODO) at the top
      }
    }
    document.getElementById('name').value = ""; // remove the user input when the button is clicked 
  }  
}

customElements.define('todo-app', TodoApp);

const topicsDiv = document.getElementById('topics');

document.getElementById('topicForm').onsubmit = e => {
 e.preventDefault();
 addTopic(topicTitle.value, author.value);
 e.target.reset();
};

function addTopic(title, author){
 const t = document.createElement('div');
 t.className = 'topic';
 t.innerHTML = `
 <h3>${title}</h3>
 <div class="meta">Автор теми: ${author}</div>
 <form class="msgForm">
   <input placeholder="RP повідомлення" required>
   <input placeholder="Нік" required>
   <button>Відправити</button>
 </form>
 <div class="msgs"></div>
 `;

 t.querySelector('.msgForm').onsubmit = e => {
   e.preventDefault();
   const text = e.target[0].value;
   const nick = e.target[1].value;
   addMsg(t.querySelector('.msgs'), text, nick);
   e.target.reset();
 };

 topicsDiv.appendChild(t);
}

function addMsg(container, text, nick){
 const m = document.createElement('div');
 m.className = 'msg';
 const time = new Date().toLocaleString();
 m.innerHTML = `
 <div class="meta">${nick} | ${time}</div>
 <div class="text">${text}</div>
 <button class="edit">✎</button>
 <button class="del">🗑</button>
 `;

 m.querySelector('.edit').onclick = () => {
   const newText = prompt("Редагування повідомлення:", text);
   if(newText){
     text = newText;
     m.querySelector('.text').textContent = newText;
   }
 };

 m.querySelector('.del').onclick = () => m.remove();

 container.appendChild(m);
}
